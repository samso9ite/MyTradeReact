import { useEffect, useState } from "react"
import MainLayout from "../../components/layout/admin/MainLayout"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Modal from "react-modal"
import Countries from '../../util/countries.json'
import Api from "../../Api"
import { ToastContainer, toast } from 'react-toastify';
import { fetchCards } from "../../store/admin/card-slice"

const Rates = (props) => {
        useEffect(() => {
            dispatch(fetchCards())
        }, [])

    const [rates, setRates] = useState([])
    const [cardName, setCardName] = useState('')
    let cards = useSelector(state => state.cards.cards)
    const {id} = useParams()
    const [modalIsOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [country, setCountry] = useState('')
    const [rate, setRate] = useState('')
    const [rateId, setRateId] = useState('')
    const [cardType, setCardType] = useState('')
    const [denomination, setDenomination] = useState('')
    const [card, setCard] = useState('')
    const [modalSection, setModalSection] = useState('')
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const dispatch = useDispatch()
    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width:'40%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };
    

    useEffect(() => {
        const card = cards.find(card => card._id === id)
        setRates(card.rates)
        setCardName(card.name)
    }, [])

    const setRateDetails = (id) => {
        setIsOpen(true)
        setModalSection('edit')
        const selectedRate = rates.find(rate => rate._id === id)
        setRateId(id)
        setRate(selectedRate.rate)
        setCardType(selectedRate.cardType)
        setDenomination(selectedRate.denomination)
        setCountry(selectedRate.country)
        setCard(selectedRate.card)
    }
    const selectCountryHandler = (event) => {
        setCountry(event.target.value)
    }   

   const rateHandler = (event) => {
        setRate(event.target.value)
    }

    const cardTypeHandler = (event) => {
        setCardType(event.target.value)
    }
    const denominationHandler = (event) => {
        setDenomination(event.target.value)
    }

    const addRateHandler = () => {
        setIsLoading(true)
        const formData = {
            country: country,
            rate: rate,
            denomination: denomination,
            processingTime: '00:00-23:59',
            cardType: cardType,
            card_id: id
        }
        Api.axios_instance.post(Api.baseUrl+'admin/card/ratings/add', formData)
        .then(() => {
            toast.success('Rate Created Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            dispatch(fetchCards())
            setIsOpen(false)
            setIsLoading(false)
            setTimeout(() => {
                window.location.reload()
            }, 300);
        }
        )

    }

    const editRateHandler = () => {
        setIsLoading(true)
        const formData = {
            country: country,
            rate: rate,
            denomination: denomination,
            processingTime: '00:00-23:59',
            cardType: cardType
        }
        Api.axios_instance.put(Api.baseUrl+'/admin/rating/'+rateId, formData)
        .then(res => {
            toast.success('Rate Updated Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            // window.location.reload()
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            dispatch(fetchCards())
            setIsOpen(false)
            setIsLoading(false)
            setTimeout(() => {
                window.location.reload()
            }, 300);
        }
        )

    }

    const onDeleteRate = (id) => {
        Api.axios_instance.delete(Api.baseUrl+'/admin/rating/'+id)
        .then(res => {
            toast.success('Rate Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
           
        }).finally(() => {
            dispatch(fetchCards())
            setTimeout(() => {
                window.location.reload()
            }, 300);
        })
    }

     // Freeze Card Sales
     const onFreeze = (id) => {
        Api.axios_instance.post(Api.baseUrl+'/admin/rate/disable/'+id, { reasonForDisabling: ''})
        .then(res => {
            rates.map((rate) => {
                if (rate._id === id) {
                  return {
                    ...rate,
                    isDisabled: !rate.isDisabled, // Toggle the isDisabled property
                  };
                }
                return rate;
            })
            setRates(rates)
            toast.success('Rate Disabled Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
        })
        .catch(err => {
            console.log(err);
        }).finally(() => {
            dispatch(fetchCards())
            setTimeout(() => {
                window.location.reload()
            }, 300);
        })
    }

    // Approve Card Sales   
    const activateRate = (id) => {
        Api.axios_instance.post(Api.baseUrl+'/admin/rate/sell/'+id)
        .then(res => {
            toast.success('Rate Activated Successfully', {
                position: "top-right",  
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
            rates.map((rate) => {
                if (rate._id === id) {
                  return {
                    ...rate,
                    isDisabled: !rate.isDisabled, // Toggle the isDisabled property
                  };
                }
                return rate;
            })
            setRates(rates)
        })
        .catch(err => {
            console.log(err);
        }).finally(() => {
            dispatch(fetchCards())
            setTimeout(() => {
                window.location.reload()
            }, 300);
        })
    }
   
    return(
        <MainLayout>
              <div class="content">
                    <h2 class="intro-y text-lg font-medium mt-10">
                        {cardName}
                    </h2>
                    <button className="btn btn-primary" style={{float:'right'}} onClick={() => {setIsOpen(true); setModalSection('add')}}>Add New Rate</button>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                       
                        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                            <table class="table table-report -mt-2">
                                <thead>
                                    <tr>
                                        <th class="whitespace-nowrap">Card Type</th>
                                        <th class="whitespace-nowrap">Country</th>
                                        <th class="whitespace-nowrap">Denomination</th>
                                        <th class="whitespace-nowrap">Rate</th>
                                        <th class="whitespace-nowrap">Active</th>
                                        <th class="whitespace-nowrap">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rates?.map((rate) => (
                                        <tr class="intro-x">
                                            <td class="w-40">
                                                <p>{rate.cardType}</p>
                                            </td>
                                            <td>
                                                <p>{rate.country}</p>
                                            </td>
                                            <td>
                                                <p>{rate.denomination}</p>
                                            </td>
                                            <td>
                                                <p>{rate.rate}</p>
                                            </td>
                                            <td>
                                                {rate.isDisabled ? 'Rate Active' : 'Rate Disabled'}
                                            </td>
                                            <td style={{fontSize:'17px'}}>
                                            <i class="fa fa-pencil-square-o" aria-hidden="true" style={{paddingRight:"10px"}} onClick={() => setRateDetails(rate._id)}></i> {rate.isDisabled === true ? <i class="fa fa-play-circle-o" aria-hidden="true"  style={{paddingRight:"10px"}} onClick={() => activateRate(rate._id)}></i>  : <i class="fa fa-pause-circle-o" aria-hidden="true" style={{paddingRight:"10px"}} onClick={() => onFreeze(rate._id)}></i> } <i class="fa fa-trash-o" aria-hidden="true" style={{paddingRight:"10px", color:"red"}} onClick={() => onDeleteRate(card._id)}></i> 
                                            </td>
                                        </tr>
                                    ))
                                    } 
                                    
                                </tbody>
                            </table>
                        </div>

                        <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        >
                            <button onClick={closeModal}>close</button>
                            <div className="p-5" style={{fontSize:'15.5px', fontWeight:"500", padding: "15px"}}>
                            <select style={{margin: "15px"}} className="form-select form-select-lg sm:mr-2" aria-label=".form-select-lg example" value={country} onChange={selectCountryHandler}>
                                    <option value="" disabled>-- Choose card type -- </option>
                                    { Countries.map(country => (
                                        <option value={country.name} key={country}>{country.name}</option>
                                    ) )
                                    }
                            </select>   
                            <label style={{margin: "15px"}} className="mt-5">Card Type</label>
                            <input style={{margin: "15px"}} type="text" placeholder="Card Type" className="form-control " value={cardType}  onChange={cardTypeHandler} />
                            <label style={{margin: "15px"}} className="mt-5">Rate</label>
                            <input style={{margin: "15px"}}  type="text" placeholder="Rate" className="form-control" value={rate} onChange={rateHandler} />
                            <label style={{margin: "15px"}}>Denomination</label>
                            <input style={{margin: "15px"}} type="text" placeholder="Denomination" className="form-control" value={denomination} onChange={denominationHandler} />

                            {modalSection === 'add' ? <center> <button className="btn btn-primary" onClick={addRateHandler} disabled={isLoading}>{isLoading ? 'Submitting ...' : 'Add New Rate' }</button> </center> :
                            <center> <button className="btn btn-primary" onClick={editRateHandler} disabled={isLoading}>{isLoading ? 'Submitting ...' : 'Edit Rate' }</button> </center>
                            }
                            </div>

                        </Modal>
                    </div>
                </div>
            <ToastContainer />
        </MainLayout>
    )
}
export default Rates 