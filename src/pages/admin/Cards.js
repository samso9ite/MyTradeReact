import { useSelector, useDispatch} from "react-redux"
import MainLayout from "../../components/layout/admin/MainLayout"
import { useEffect, useState } from "react"
import Api from "../../Api"
import { ToastContainer, toast } from 'react-toastify'
import { cardsAction } from "../../store/admin/card-slice"
import { Link } from "react-router-dom"

const Cards = () => {
    const [allCards, setCards] = useState([])
    const dispatch = useDispatch()

    const fetchCards = () => {
        Api.axios_instance.get(Api.baseUrl+'/card/all')
        .then(res => {
            setCards(res.data.data)
            dispatch((cardsAction.storeCards({cards:res.data.data})))
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
       fetchCards()
    }, [])

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
            fetchCards()
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
            fetchCards()
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
            fetchCards()
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return(
        <MainLayout>
            <div class="content">
                    <h2 class="intro-y text-lg font-medium mt-10">
                        All Cards
                    </h2>
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
            <ToastContainer />
        </MainLayout>
    )
}

export default Cards