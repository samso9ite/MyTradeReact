import UtilityBills from "../../components/Utility"
import MainLayout from "../../components/layout/MainLayout"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UtilityPayment = () => {
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
            </MainLayout>
        </>
    )
}

export default UtilityPayment