import {useSelector, useDispatch, createSelectorHook} from 'react-redux'
import { useEffect, useState } from 'react'
import Api from '../Api'
import axios, { Axios } from 'axios'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchDetails } from '../store/user-details'


const Banks = (props) => {
    let storeDetails = useSelector(state => state.accountInfo.accountDetails)
    storeDetails = storeDetails.data.accountInfo
    const [accountNumber, setAccountNumber] = useState('')
    const [details, setDetails] = useState([])
    const [accountName, setAccountName] = useState('')
    const [banks, setBanks] = useState([])
    const [bankCode, setBankCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [isVerifying, setIsVerifying] = useState(false)
    const [error, setError] = useState('')

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchDetails())
        Api.axios_instance.get('https://api.paystack.co/bank')
            .then(response => {
                setBanks(response.data.data)
            })
            .catch(error => {
                setError('Check you internet connection')
        })
        setDetails(storeDetails)
    }, [])
    const bankHandler = (event) => {
       setBankCode(event.target.value)
    }
    const accountNumberHandler =async (event) => {
        setError('')
        setIsVerifying(true)
        setLoading(true)
        setAccountNumber(event.target.value)
        if(event.target.value.length === 10){
            let token = 'sk_live_8897fa0d728dd8a313165ba6c18c3b67c1bc0fca'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get('https://api.paystack.co/bank/resolve?account_number='+event.target.value+'&bank_code='+bankCode, {
                }) 
                .then(response => {
                    setAccountName(response.data.data.account_name)
                    })
                .catch((err) => {
                    setError('Account details not correct')
                })
                .finally(() => {
                    setIsVerifying(false)
                    setLoading(false)
                })
        }
    }
    const submitBankHandler = () => {
        setLoading(true)
        const bank = banks.find(option => option.code === bankCode)
        const formData = {
            bank_name:bank.name,
            number:accountNumber,
            bank_code: bankCode,
            name: accountName
        }
        Api.axios_instance.post(Api.baseUrl+('user/account/add'), formData)
        .then(res => {
            setState({isPaneOpen:false})
            // dispatch(fetchDetails())
            setDetails([...details, formData])
            setAccountNumber('')
            setAccountName('')
            toast.success('Bank Added Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });

        }).catch(err => {
            setError(error.response.data.message)
        }).finally(
            () => {setLoading(false)}
        )
    } 
    const deleteBankHandler = (id) => {
        Api.axios_instance.delete(Api.baseUrl+'/user/account/delete/'+id)
        .then(res => {
            let updatedDetails = details.filter((account) => account._id !== id)
            setDetails(updatedDetails)
            setState({isPaneOpen:false})
            // dispatch(fetchDetails())
            toast.success('Bank Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
                })
            })
        .catch(err => {
            console.log(err);
        })
    }

    return ( 
    <>
        <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
            <div class="intro-y box lg:mt-5">
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 class="font-medium text-base mr-auto">
                        Bank Accounts
                    </h2>
                </div>
                <SlidingPane
                    isOpen={state.isPaneOpen}
                    title="Create a new bank account"
                    width='35%'
                    onRequestClose={() => {
                    setState({ isPaneOpen: false });
                    }}
                >
                   {error && <div class="alert alert-danger-soft alert-dismissible show flex items-center mb-2" role="alert"> 
                        <i data-lucide="alert-octagon" class="w-6 h-6 mr-2"></i> {error}
                        <button type="button" class="btn-close" data-tw-dismiss="alert" aria-label="Close"> x </button>
                    </div>
                    } 
                    <div className='mb-8'>
                    <label for="crud-form-2" className="form-label">Select Bank</label>
                    <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example"  onChange={bankHandler}>
                        <option value=""> -- Choose Bank -- </option>
                        {banks.map((bank, index) => 
                            (<option value={bank.code} key={index}>{bank.name}</option> ))
                        }
                    </select>
                    </div>
                    <div className='mb-8'>
                    <label for="crud-form-2" className="form-label">Account Number</label>
                        <input type="number" className="form-control w-full" 
                        placeholder="Account number" onChange={accountNumberHandler}/>
                    </div>
                    <div>
                        <label for="crud-form-2" className="form-label">Account Name</label>
                        <input type="text" className="form-control w-full" placeholder="Account name" value={accountName} disabled />
                    </div>
                    { !isVerifying &&
                      <center>
                            <button type="button" class="btn btn-primary mr-1 mt-10"
                                onClick={submitBankHandler} disabled={loading}> {loading ? 'Submitting Bank Details...' : 'Submit Bank Details'}
                            </button>
                        
                     </center>
                    }
                     { isVerifying &&
                      <center>
                            <button type="button" class="btn btn-primary mr-1 mt-10"
                                onClick={submitBankHandler} disabled={loading}>  {
                                   loading ? 'Verifying Bank Details...' : 'Verify Bank Details'
                                }
                            </button>
                        
                     </center>
                    }
                
                </SlidingPane>
                <div class="p-5">
                    <div class="grid grid-cols-12 gap-2" >
                        {details?.map((account) => 
                            <div class="col-span-12 lg:col-span-6 2xl:col-span-6  box p-8 relative overflow-hidden bg-primary intro-y" style={{backgroundImage:'url("../../dist/images/cardBG.png")',  backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                                }}
                            >
                            <div class="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3">{account.name}</div>
                            <div class="w-full sm:w-72 leading-relaxed text-white/70 text-xl mt-3 mb-3"><strong>{account.bank_name}</strong></div>
                            <div class="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3 mb-5">{account.number}</div>
                            <button class="btn btn-danger box flex items-center text-slate-600 dark:text-slate-300" style={{backgroundColor:'red', color:'white'}} onClick={() => deleteBankHandler(account._id)}>  Delete 
                            </button>
                            </div>  
                        )} 
                    </div>
                    <center> <button class="btn btn-outline-primary  inline-block mr-1 mb-2 mt-10"  onClick={() => setState({ isPaneOpen: true })}>Add New Bank Details <i data-lucide="plus-circle" class="w-5 h-5"></i></button></center>
                </div>
            </div>
        </div>
        <ToastContainer />
    </> );
}
 
export default Banks;