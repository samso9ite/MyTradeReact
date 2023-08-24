import {useSelector} from 'react-redux'
import ReactDOM from 'react-dom'
import SlideOver from './Helpers/SlideOver'
import { useEffect, useState } from 'react'
import Api from '../Api'
import axios from 'axios'


const Banks = (props) => {
    const details = useSelector(state => state.accountInfo.accountDetails)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [accountNumber, setAccountNumber] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountName, setAccountName] = useState('')
    const [banks, setBanks] = useState([])
    const [bankCode, setBankCode] = useState('')

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    const getBanks = () => {
        
    }
    const closeModalForm = () => {
        console.log("Cjecking this out");
    }
    
    useEffect(() => {
        Api.axios_instance.get('https://api.paystack.co/bank')
            .then(response => {
                setBanks(response.data.data)
                console.log(banks);
            })
            .catch(error => {
                console.log(error.data);
        })
    }, [])
    const bankHandler = (event) => {
        console.log("Here now");
        console.log(event.target.value);
        bankCode(event.target.value)
    }
    const accountNumberHandler = (event) => {
        console.log(event.target.value);
    }

    const validateAccount = async () => {
        let token = 'sk_live_8897fa0d728dd8a313165ba6c18c3b67c1bc0fca'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        await axios.get('https://api.paystack.co/bank/resolve?account_number='+accountNumber+'&bank_code='+bankCode, {
            }) 
            .then(response => {
                setAccountName(response.data.data.account_name)
               })
            .catch(() => {
                this.$toast.error({
                title:'Oops!',
                message:'Bank Details Incorrect'
                })
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
                <div class="p-5">
                    <div class="grid grid-cols-12 gap-6">
                            <div class="col-span-12 lg:col-span-6 2xl:col-span-6  box p-8 relative overflow-hidden bg-primary intro-y" style={{backgroundImage:'url("../../dist/images/cardBG.png")',  backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                                }}
                            >
                            <div class="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3">{details.accountInfo[0].name}</div>
                            <div class="w-full sm:w-72 leading-relaxed text-white/70 text-xl     mt-3 mb-3"><strong>{details.accountInfo[0].bank_name}</strong></div>
                            <div class="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3 mb-5">{details.accountInfo[0].number}</div>
                            <button class="btn box flex items-center text-slate-600 dark:text-slate-300" data-tw-toggle="modal"
                                data-tw-target="#medium-slide-over-size-preview" onClick={toggleModal}>  Edit 
                            </button>
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>
        {isModalOpen &&
            <SlideOver>
                <div className='mb-8'>
                    <label for="crud-form-2" className="form-label">Select Bank</label>
                    <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={bankCode}  onChange={bankHandler}>
                        <option value="">-- Choose Bank -- </option>
                        {banks.map((bank, index) => 
                            (<option value={bank.code} key={index}>{bank.name}</option> ))
                        }
                    </select>
                </div>
                <div className='mb-8'>
                <label for="crud-form-2" className="form-label">Account Number</label>
                    <input type="number" className="form-control w-full" placeholder="Account number" value={accountNumber} onChange={accountNumberHandler}/>
                </div>
                <div>
                    <label for="crud-form-2" className="form-label">Account Name</label>
                    <input type="text" className="form-control w-full" placeholder="Account name" value={accountName} />
                </div>

                <center><button type="button" class="btn btn-primary mr-1 mt-10" onClick={closeModalForm}> Submit Bank </button></center>
            
            </SlideOver>
}
    </> );
}
 
export default Banks;