import Modal from 'react-modal';
import { useState } from 'react';
import Api from "../Api";
import CurrencyFormatter from "./CurrencyFormatter";
import ImageUploading from "react-images-uploading";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


function Transaction({transactions}){
    const [modalIsOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [transaction, setTransaction] = useState(true)
    const [modalSection, setModalSection] = useState('default')
    const [receipts, setReceipts] = useState([])
    const [userFetched, setUserFetched] = useState(false)
    const [comment, setComment] = useState('')

    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
        setUserFetched(false)
    }
    const isAdmin = localStorage.getItem('isAdmin')
    const fetchTransaction = (id) => {
        setIsOpen(true)
        setIsLoading(true)
        Api.axios_instance.get(Api.baseUrl+'/card_transaction/fetch/'+id)
        .then(res => {
            setTransaction(res.data.data)
            setUserFetched(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    const payOutHandler = async (id) => {
        setIsLoading(true)
        const response = await Promise.all((receipts.map( async(image) => {
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
            paymentReceipt: response[0],
            transaction_id: id
        }
        Api.axios_instance.post(Api.baseUrl+'/admin/card/transaction/payout', data)
        .then(res => {
            toast.success('Transaction Updated Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsOpen(false)
            setIsLoading(false)
            setReceipts([])
        })
    }

    const commentHandler = (event) => {
        setComment(event.target.value)
    }
    const declineHandler = (id) => {
        setIsLoading(true)
        const data = {
            reasonForDeclination: comment,
            transaction_id: id
        }
        Api.axios_instance.post(Api.baseUrl+'/admin/card/transaction/decline', data)
        .then(res => {
            console.log(res);
            toast.success('Transaction Updated Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false)
            setIsOpen(false)
        })
    }
   
    const onReceiptUpload = (imageList) => {
        setReceipts(imageList);
    }

    return ( 
        <>
            {transactions?.map((transaction) => (
                <tr className="intro-x" >
                    <td className="w-40">
                        <p>{transaction.card}</p>
                    </td>
                    <td>
                        <p>{transaction.card_value}</p>
                    </td>
                    <td className="text-center">₦{transaction.amount}</td>
                    <td className="w-40">
                        <div className="flex items-center justify-center text-danger"> {transaction.status} </div>
                    </td>
                    <td className="table-report__action w-56">
                        <p>{transaction.created_at}</p>
                    </td>
                    <td className="table-report__action w-56">
                        <p>{transaction.updated_at}</p>
                    </td>  
                    <td>
                        <button className="btn btn-outline-primary" onClick={() => fetchTransaction(transaction._id)}>View</button>
                    </td>    
                </tr>
            ))
            }
             <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            
                <button onClick={closeModal}>close</button>
                {modalSection == 'default' && 
                <div className="p-5" style={{fontSize:'15.5px', fontWeight:"500", padding: "15px"}}>
                    <img src={transaction.card_image} /><br />
                    <p className="mb-2 mt-2">Transaction Reference: {transaction.transaction_reference}</p> <hr />
                    <p className="mb-2 mt-2">Name: {transaction.card}</p><hr />
                    <p className="mb-2 mt-2">Amount: <CurrencyFormatter value={transaction.amount} currencycode="NGN" /> </p><hr />
                    <p className="mb-2 mt-2">Card Type: {transaction.card_type} </p><hr />
                    <p className="mb-2 mt-2">Card Value: {transaction.card_value}</p><hr />
                    <p className="mb-2 mt-2">Rate: {transaction.rate}</p> <hr />
                    <p className="mb-2 mt-2">Transaction Date: {transaction.created_at}</p>
                    <br />
                    {isAdmin && userFetched &&  <span>
                            <center> <button className="btn btn-success" onClick={() => {setModalSection('payout')}}>Payout</button> <button className="btn btn-danger" onClick={() => {setModalSection('decline')}}>Decline</button> </center>
                           
                            <center> <h3 className="mt-5" style={{fontSize: "17px"}}> Bank Details </h3> </center>

                            { transaction.user.accountInfo.length > 0 ? <span>
                                <p className="mb-2 mt-2">Name: {transaction.user.fullname}</p><hr />
                                <p className="mb-2 mt-2">Phone: {transaction.user.phone}</p><hr />
                                <p className="mb-2 mt-2">Email: {transaction.user.email}</p><hr />
                            </span>  : <center className="mt-3"><p>No saved bank details for this user</p> </center>}

                            <center> <h3 className="mt-5" style={{fontSize: "17px"}}>Customer Details</h3> </center>
                            <p className="mb-2 mt-2">Name: {transaction.user.fullname}</p> <hr />
                            <p className="mb-2 mt-2">Phone: {transaction.user.phone}</p> <hr />
                            <p className="mb-2 mt-2">Email: {transaction.user.email}</p> <hr /> <br />
                        </span>
                    }
                </div>
                } 
                {modalSection === 'payout' && <div className="p-5" style={{fontSize:'15.5px', fontWeight:"500", padding: "15px"}}>
                    <ImageUploading
                            multiple
                            value={receipts}
                            onChange={onReceiptUpload}
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
                                        <div class="text-center text-l mt-2">Click or Drop Receipt Here</div>
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

                    <center><button className="btn btn-success mt-4" onClick={() => payOutHandler(transaction._id)} disabled={isLoading}> {isLoading ? 'Confirming Payout ...' : 'Confirm Payout'} </button></center>
                </div>
                }
                {modalSection === 'decline' && <div className="p-5" style={{fontSize:'15.5px', fontWeight:"500", padding: "15px"}}>
                    <label>Reason for declining trade</label>
                    <textarea className="form-control" onChange={commentHandler}/> 
                    <button className="btn btn-danger" onClick={() => declineHandler(transaction._id)} disabled={isLoading}>{isLoading ? 'Declining Transaction ...': 'Decline Transaction'}</button>
                </div>} 
            </Modal>
            <ToastContainer />
        </>
     );
}
 
export default Transaction;

