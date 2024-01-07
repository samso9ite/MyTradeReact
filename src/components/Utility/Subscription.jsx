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
    const [number, setNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const bills = useSelector(state => state.utilities.utilities)


    const uniqueArray = (items, filter_key) => {
        return items.filter((item, index, array) => {
            const ids = array.map(innerItem => innerItem[filter_key]);
            return ids.indexOf(item[filter_key]) === index;
        
    })};
    console.log(subscriptionType);
    const getNetworkList = (filter_key) => {
        let networkList;
        networkList = bills?.data.filter((bill) =>(subscriptionType =='Airtime' ? bill[filter_key] : 
        bill[filter_key] == 'Meter Number')&& bill?.country=='NG')
        let uniqueNetworkList =  uniqueArray(networkList, 'biller_code')
        setSelSubscriptionList(uniqueNetworkList)
    }
    const getServiceProvider = (network) => {
        if(subscriptionType == 'Data'){
            const packages = bills?.data.filter((item) =>  item.name === network )
            let uniquePackages = uniqueArray(packages, 'item_code')
            setSelSubscriptionList(uniquePackages)
        }else if(subscriptionType == 'TV'){
            let packages;
            if(network == 'DSTV'){
                packages = bills?.data.filter((item) =>  item.biller_code === "BIL119" && item.country === 'NG')
                setSelSubscriptionList(packages)
            }else{
                packages = bills?.data.filter((item) =>  item.name === network && item.country === 'NG')
                let uniquePackages = uniqueArray(packages, 'item_code')
                setSelSubscriptionList(uniquePackages)
            }
        }
       
            // let code = item?.item_code.slice(0,2)
            // console.log(code);
            // if(code && code === 'MD'){
            //     return true
            // }
            // return false; 
     }

    const submitHandler = () => {
        setLoading(true)
        let formData;
        const parsedNetwork = JSON.parse(selectedNetwork)
        if(subscriptionType == 'Airtime' || subscriptionType == 'Data'){
            setNumber('234'+number.slice(1))
            if(number.length !== 11){
                toast.error('Phone number must be 11 digit', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "light",
                });
                return
            }
        }
        
        formData = { 
            'customer': number,
            'item_code':parsedNetwork.code,
            'amount': amount,
            'biller_name': parsedNetwork.biller
        }

        Api.axios_instance.post(Api.baseUrl+'bills/initiate', formData).then((res) => {
            if(res.data.status = true) {
                window.location.href = res.data.message
            }
        }).catch(err => {
            toast.error('It seems your number details isn\'t correct', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });

        }).finally(() => {
            setLoading(false)
        })
    }

    const networkHandler = (e) => {
        // setSelSubscriptionList([])
        setSelectedNetwork(e.target.value)
        getServiceProvider(e.target.value)
    }
    const packagesHandler = (e) => {
        // setSelSubscriptionList([])
        setSelectedNetwork(e.target.value)
        let parsedObject = JSON.parse(e.target.value)
        let selItem =  selSubscriptionList.filter((item) => item.biller_name == parsedObject.biller)
        setAmount(selItem[0]?.amount)
    }

    useEffect(() => {
        if(subscriptionType == 'Airtime'){
            getNetworkList('is_airtime');
        }else if(subscriptionType == 'Electricity'){
            getNetworkList('label_name');
        }
        else if(subscriptionType == 'Data' || subscriptionType == 'TV' ){
            getServiceProvider()
        }
        
    }, [bills]); 
    
    return (
        <>
            {
            // If Subscription Type is Airtime
               (subscriptionType == 'Airtime' || subscriptionType == 'Electricity') && <div>
                  <label for="crud-form-2" className="form-label">{subscriptionType == 'Airtime'? 'Network' : 'Provider' }</label>
                    <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example"  
                        onChange={(e) => {setSelectedNetwork(e.target.value)}}>
                        <option value=""> --{subscriptionType == 'Airtime'? 'Choose Network' : 'Select Provider' }-- </option>
                        {selSubscriptionList.map((utility, index) => 
                            (<option value={JSON.stringify({code:utility.item_code, biller:utility.biller_name})} key={index}>{
                                utility.name == 'AIRTIME' ? 'MTN NIGERIA' : utility.name
                            }</option> ))
                        }
                    </select>
                    <label for="crud-form-2" className="form-label"  style={{marginTop:'25px'}}>Amount</label>
                    <input type="text" className="form-control w-full" placeholder="1000" onChange={(e) => {setAmount(e.target.value)}} />
                    
                    <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>{subscriptionType == 'Airtime'? 'Phone Number' : 'Meter Number' } </label>
                    <input type="text" className="form-control w-full" placeholder="08112417083" 
                        onChange={(e) => {setNumber(e.target.value)}} 
                    />

                   
                </div>
            }
            {
                // If subscription type is data
                (subscriptionType == 'Data' || subscriptionType == 'TV') && 
                <div>
                    <label for="crud-form-2" className="form-label">Service Provider</label>
                    <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example"  
                        onChange={networkHandler}>
                        { subscriptionType == 'Data' ? 
                            <>
                                <option value=""> -- Choose Network -- </option>
                                <option value="MTN DATA BUNDLE"> MTN </option>
                                <option value="GLO DATA BUNDLE"> GLO </option>
                                <option value="AIRTEL DATA BUNDLE"> AIRTEL </option>
                                <option value="9MOBILE DATA BUNDLE"> 9MOBILE</option>
                            </>
                            :
                            <>
                                <option value=""> -- Choose Network -- </option>
                                <option value="DSTV"> DSTV </option>
                                <option value="GOTV"> GOTV </option>
                                <option value="STARTIMES"> STARTIMES </option>
                            </>
                        }
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
                    <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>
                        {subscriptionType == 'Data' ? 'Phone Number' : 'Smart Card Number'}
                    </label>
                    <input type="text" className="form-control w-full" placeholder="08112417083" 
                        onChange={(e) => {setNumber(e.target.value)}} 
                    />
                    <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>Amount</label>
                    <input type="text" className="form-control w-full" placeholder="1000" value={amount} disabled />
                </div>
            }
            
            <button type="button" class="btn btn-primary mr-1 mt-10"
                onClick={submitHandler} disabled={loading}> {loading ? 'Processing Payment...' : 'Recharge Now'}
            </button>
            <ToastContainer />
        </>
    )
}

export default Subscription