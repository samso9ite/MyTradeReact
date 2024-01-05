import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Api from "../../Api";

const Subscription = ({subscriptionType}) => {
    const [selSubscriptionList, setSelSubscriptionList]  = useState([])
    const [selectedNetwork, setSelectedNetwork] =  useState()
    const [amount, setAmount] =  useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const bills = useSelector(state => state.utilities.utilities)
    const getNetworkList = () => {
        const networkList = bills?.data.filter((bill) => bill?.is_airtime && bill?.country=='NG')
        console.log(networkList);
        const uniqueArray = networkList.filter((item, index, array) => {
            const ids = array.map(innerItem => innerItem.biller_code);
            return ids.indexOf(item.biller_code) === index;
        });
        setSelSubscriptionList(uniqueArray)
    }

    const submitHandler = () => {
        if(subscriptionType == 'Airtime'){

        }
        console.log(selectedNetwork);
        const formData = {
            'customer':'234'+phoneNumber,
            'item_code':selectedNetwork.code,
            'amount': amount,
            'biller_name': selectedNetwork.biller
        }
        console.log(formData);
        Api.axios_instance.post(Api.baseUrl+'bills/initiate').then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getNetworkList();
    }, [bills]); 
    
    return (
        <>
            <div>
                <label for="crud-form-2" className="form-label">Amount</label>
                <input type="text" className="form-control w-full" placeholder="1000" onChange={(e) => {setAmount(e.target.value)}} />
                <label for="crud-form-2" className="form-label" style={{marginTop:'25px'}}>Network</label>
                <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example"  
                    onChange={(e) => {setSelectedNetwork(e.target.value)}}>
                    <option value=""> -- Choose Network -- </option>
                    {selSubscriptionList.map((utility, index) => 
                        (<option value={{'code':utility.item_code, 'biller':utility.biller_name}} key={index}>{
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
        </>
    )
}

export default Subscription