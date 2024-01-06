import { useEffect, useState } from "react";
import UtilityBills from "../../components/Utility"
import MainLayout from "../../components/layout/MainLayout"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import Api from "../../Api";

const UtilityPayment = () => {
    const location = useLocation()
    const [utitlityTransactions, setUtilityTransactions] = useState([])

    useEffect(() => {
        Api.axios_instance.get(Api.baseUrl+'').then(
            res => {
                console.log(res.data);
            }
        )

        const queryParams = new URLSearchParams(location.search);
        const reference = queryParams.get('tx_ref')
        const status = queryParams.get('status')
        if(status == 'successful'){
            toast.success('Transaction Successfull', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
        }else if(status == 'failed'){
            toast.error('Transaction Failed, Please retry!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
        }else if(status == 'cancelled'){
            toast.error('Transaction Cancelled', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            });
        }

    }, [])
    return(
        <>
            <MainLayout>
                <div class="content">
                    <div class="intro-y flex items-center mt-8">
                        <h2 class="text-lg font-medium mr-auto">
                            Utility Payment
                        </h2>
                    </div>
                    <UtilityBills />
                </div>

                <ToastContainer />
            </MainLayout>
        </>
    )
}

export default UtilityPayment