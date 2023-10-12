import { useSelector, useDispatch} from "react-redux"
import MainLayout from "../../components/layout/admin/MainLayout"
import { useEffect, useState } from "react"
import Api from "../../Api"
import { ToastContainer, toast } from 'react-toastify'
import { cardsAction, fetchCards } from "../../store/admin/card-slice"
import { Link } from "react-router-dom"
import Modal from 'react-modal';
import ImageUploading from 'react-images-uploading';
import axios from "axios"

const Cards = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [images, setImages] = useState([]);
    const [cardName, setCardName] = useState('')
    const maxNumber = 1;

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCards())
    }, [])

    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '30%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };

    const closeModal = () => {
        setIsOpen(false);
    }

    const allCards = useSelector(state => state.cards.cards)
    const onDeleteCard = (id) => {
        Api.axios_instance.post(Api.baseUrl+'/admin/card/'+id)
        .then(res => {
            toast.success('Card Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            dispatch(fetchCards())
        })
        .catch(err => {
            console.log(err);
        })
    }
   
    // Freeze Card Sales
    const onFreeze = (id) => {
        Api.axios_instance.post(Api.baseUrl+'/admin/card/freeze', {card_id:id})
        .then(res => {
            toast.success('Card Paused Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            dispatch(fetchCards())
        })
        .catch(err => {
            console.log(err);
        })
    }

    // Approve Card Sales
    const sellCard = (id) => {
        Api.axios_instance.post(Api.baseUrl+'/admin/card/sell', {card_id:id})
        .then(res => {
            toast.success('Approved Card Sales', {
                position: "top-right",  
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            dispatch(fetchCards())
        })
        .catch(err => {
            console.log(err);
        })
    }

    // Update Image 
    const onImageChange = (imageList) => {
        setImages(imageList);
    }

      const onCreateCard = async () => {
        setIsLoading(true)
        const response = await Promise.all((images.map( async(image) => {
            const formData = new FormData();
            formData.append('image', image.file);
            const response = await axios.post('https://api.imgur.com/3/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: 'Client-ID c383bbc6a421d53',
                }
            });
            return response.data.data.link;
        })
        ))
        const data = {
            image: response,
            name: cardName
        }
        Api.axios_instance.post(Api.baseUrl+'/admin/add_card', data)
        .then(res => {
            toast.success('Card Created Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
        }).finally(() => {
            setIsLoading(false)
            setIsOpen(false)
        })
    }

    const cardNameHandler = (event) => {
        setCardName(event.target.value)
    }

    return(
        <MainLayout>
            <div class="content">
                    <h2 class="intro-y text-lg font-medium mt-10">
                        All Cards
                    </h2>
                    <button className="btn btn-primary" style={{float:'right'}} onClick={() => {setIsOpen(true)}}>Add New Card</button>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                            <table class="table table-report -mt-2">
                                <thead>
                                    <tr>
                                        <th class="whitespace-nowrap">Name</th>
                                        <th class="whitespace-nowrap">Status</th>
                                        <th class="text-center whitespace-nowrap">Actions</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {allCards?.map((card) => (
                                        <tr class="intro-x">
                                            <td class="w-40">
                                                <p>{card.name}</p>
                                            </td>
                                            <td>
                                                <p>{card.status}</p>
                                            </td>
                                            <td class="text-center" style={{fontSize:'18px'}}>
                                             <Link to={'/cards/'+card._id}>  <i class="fa fa-pencil-square-o" aria-hidden="true" style={{paddingRight:"10px"}} ></i>  </Link> {card.status == 'Paused' ? <i class="fa fa-play-circle-o" aria-hidden="true"  style={{paddingRight:"10px"}} onClick={() => sellCard(card._id)}></i>  : <i class="fa fa-pause-circle-o" aria-hidden="true" style={{paddingRight:"10px"}} onClick={() => onFreeze(card._id)}></i> } <i class="fa fa-trash-o" aria-hidden="true" style={{paddingRight:"10px", color:"red"}} onClick={() => onDeleteCard(card._id)}></i> 
                                            </td>
                                        </tr>
                                    ))
                                } 
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <button onClick={closeModal}>close</button><br /> <br />
                    <label ><strong>Card Name</strong></label><br />
                    <input type="text" className="form-control" placeholder="Name of Card" onChange={cardNameHandler}/> <br /> <br />
                    <ImageUploading
                                    multiple
                                    value={images}
                                    onChange={onImageChange}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    // write your building UI
                                    <center>
                                    <div className="upload__image-wrapper" class="dropzone">
                                        <button
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                        >
                                        <div class="col-span-12 sm:col-span-12 lg:col-span-2 xl:col-span-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="cloud-rain" data-lucide="cloud-rain" class="lucide lucide-cloud-rain block mx-auto"><path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg> 
                                                <div class="text-center text-l mt-2">Click or Drop Card Image Here</div>
                                            </div>
                                        </button>
                                        {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                            <button class="btn btn-default" onClick={() => onImageUpdate(index)}>Update</button>
                                            <button  onClick={() => onImageRemove(index)} style={{color:'red'}}>Remove</button>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    </center>
                                )}
                    </ImageUploading>
                   <center> <button className="btn btn-primary mt-5" disabled={isLoading} onClick={onCreateCard}> {isLoading ? 'Submitting' : 'Add Card' }  </button> </center>
                </Modal>
            <ToastContainer />
        </MainLayout>
    )
}

export default Cards