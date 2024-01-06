import { useEffect, useState } from "react"
import MainLayout from "../../components/layout/admin/MainLayout"
import Api from "../../Api"

const UtilityTransactions = () => {
    const [utilityTransactions, setUtilityTransactions] = useState([])
    useEffect(() => {
        Api.axios_instance.get(Api.baseUrl+'bills/transaction_list').then(
            res => {
                console.log(res.data.data.data);
                setUtilityTransactions(res.data.data.data)
            }
        )
    }, [])

    return(
        <>
           <MainLayout>
           <div class="content">
                    <h2 class="intro-y text-lg font-medium mt-10">
                        All Utility Transactions
                    </h2>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                       
                        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                            <table class="table table-report -mt-2">
                                <thead>
                                    <tr>
                                        <th class="whitespace-nowrap">Reference</th>
                                        <th class="whitespace-nowrap">Service</th>
                                        <th class="text-center whitespace-nowrap">Number</th>
                                        <th class="text-center whitespace-nowrap">Amount</th>
                                        <th class="text-center whitespace-nowrap">Status</th>
                                        {/* <th class="text-center whitespace-nowrap">Available Amount</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {utilityTransactions?.map((item) => (
                                             <tr class="intro-x">
                                             <td class="w-40">
                                                <p>{item.reference}</p>
                                             </td>
                                             <td>
                                                 <p>{item.data.name}</p>
                                             </td>
                                             <td class="text-center">{item.data.customer}</td>
                                             <td class="w-40">
                                                 <p>#{item.amount}</p>
                                             </td>
                                             <td class="table-report__action w-56">
                                                <p>{item.status}</p>
                                             </td>     
                                         </tr>
                                    ))
                                }
                                    
                                </tbody>
                            </table>
                        </div>

                      
                    </div>
                    

            </div>
           </MainLayout>
        </>
    )
}

export default UtilityTransactions