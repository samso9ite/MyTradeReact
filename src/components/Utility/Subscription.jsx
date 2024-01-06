import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Api from "../../Api";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";

const Subscription = ({subscriptionType}) => {
    const [selSubscriptionList, setSelSubscriptionList]  = useState([])
    const [selectedNetwork, setSelectedNetwork] =  useState()
    const [packages ,setPackages] = useState([])
    const [serviceProvider, setServiceProvider] = useState()
    const [amount, setAmount] =  useState(0)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const bills = useSelector(state => state.utilities.utilities)


    const uniqueArray = (items, filter_key) => {
        return items.filter((item, index, array) => {
            const ids = array.map(innerItem => innerItem[filter_key]);
            return ids.indexOf(item[filter_key]) === index;
        
    })};
    console.log(subscriptionType);
    const getNetworkList = () => {
        const networkList = bills?.data.filter((bill) => bill?.is_airtime && bill?.country=='NG')
        const uniqueArray = networkList.filter((item, index, array) => {
            const ids = array.map(innerItem => innerItem.biller_code);
            return ids.indexOf(item.biller_code) === index;
        });
        setSelSubscriptionList(uniqueArray)
    }
    const getServiceProvider = () => {
        const packages = bills?.data.filter((item) =>  item.name === selectedNetwork )
        let uniquePackages = uniqueArray(packages, 'item_code')
        setSelSubscriptionList(uniquePackages)
            // let code = item?.item_code.slice(0,2)
            // console.log(code);
            // if(code && code === 'MD'){
            //     return true
            // }
            // return false; 
      
        console.log(packages);
    //    let uniquePackages = uniqueArray(packages)
     
        console.log(uniquePackages);
    }
    const submitHandler = () => {
        let formData;
        if(subscriptionType == 'Airtime'){
            const parsedNetwork = JSON.parse(selectedNetwork)
            if(phoneNumber.length !== 11){
                toast.error('Phone number must be 11 digit', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "light",
                });
                return
            }
            formData = { 
                'customer':'234'+phoneNumber.slice(1),
                'item_code':parsedNetwork.code,
                'amount': amount,
                'biller_name': parsedNetwork.biller
            }
        }
        Api.axios_instance.post(Api.baseUrl+'bills/initiate', formData).then((res) => {
            if(res.data.status = true) {
                window.location.href = res.data.message
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const networkHandler = (e) => {
        setSelectedNetwork(e.target.value)
        getServiceProvider()
    }
    const packagesHandler = (e) => {
        setPackages(e.target.value)
        console.log(e.target.value);
        let parsedObject =JSON.parse(e.target.value)
        console.log(parsedObject.biller);
       let selItem =  selSubscriptionList.filter((item) => item.biller_name == parsedObject.biller)
        console.log(selItem);
        setAmount(selItem[0]?.amount)
    }

    useEffect(() => {
        if(subscriptionType == 'Airtime'){
            getNetworkList();
        }else if(subscriptionType == 'Data'){
            getServiceProvider()
        }
        
    }, [bills]); 
    
    return (
        <>
            {
            // If Subscription Type is Airtime
                subscriptionType == 'Airtime' && <div>
                    <label for="crud-form-2" className="form-label">Amount</label>
                    <input type="text" className="form-control w-full" placeholder="1000" onChange={(e) => {setAmount(e.target.value)}} />
                    <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>Network</label>
                    <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example"  
                        onChange={(e) => {setSelectedNetwork(e.target.value)}}>
                        <option value=""> -- Choose Network -- </option>
                        {selSubscriptionList.map((utility, index) => 
                            (<option value={JSON.stringify({code:utility.item_code, biller:utility.biller_name})} key={index}>{
                                utility.name == 'AIRTIME' ? 'MTN NIGERIA' : utility.name
                            }</option> ))
                        }
                    </select>
                    <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>Phone Number</label>
                    <input type="text" className="form-control w-full" placeholder="08112417083" onChange={(e) => {setPhoneNumber(e.target.value)}} />

                    <button type="button" class="btn btn-primary mr-1 mt-10"
                        onClick={submitHandler} disabled={loading}> {loading ? 'Processing Payment...' : 'Recharge Now'}
                    </button>
                </div>
            }
            {
                // If subscription type is data
                subscriptionType == 'Data' && 
                <div>
                    <label for="crud-form-2" className="form-label">Service Provider</label>
                    <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example"  
                        onChange={networkHandler}>
                        <option value=""> -- Choose Network -- </option>
                        <option value="MTN DATA BUNDLE"> MTN </option>
                        <option value="GLO DATA BUNDLE"> GLO </option>
                        <option value="AIRTEL DATA BUNDLE"> AIRTEL </option>
                        <option value="9MOBILE DATA BUNDLE"> 9MOBILE</option>
                    </select>
                    <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>Select Package</label>
                    <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example"  
                        onChange={packagesHandler}>
                        <option value=""> -- Choose Network -- </option>
                        {selSubscriptionList.map((utility, index) => 
                            (<option value={JSON.stringify({code:utility.item_code, biller:utility.biller_name})} key={index}>{
                                utility.biller_name
                            }</option> ))
                        }
                    </select>
                    <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>Amount</label>
                    <input type="text" className="form-control w-full" placeholder="1000" value={amount} disabled />
                </div>


            }
            <ToastContainer />
        </>
    )
}

export default Subscription