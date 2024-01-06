import { useEffect } from "react"
import MainLayout from "../../components/layout/admin/MainLayout"
import Api from "../../Api"

const UtilityTransactions = () => {
useEffect(() => {
    Api.axios_instance.get(Api.baseUrl+'/user/all')
    Api.axios_instance.get(Api.baseUrl+'bills/transaction_list')
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
                                        <th class="whitespace-nowrap">Name</th>
                                        <th class="whitespace-nowrap">Email</th>
                                        <th class="text-center whitespace-nowrap">Phone</th>
                                        <th class="text-center whitespace-nowrap">Transactions</th>
                                        <th class="text-center whitespace-nowrap">Pending Amount</th>
                                        <th class="text-center whitespace-nowrap">Available Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {users?.map((user) => (
                                             <tr class="intro-x">
                                             <td class="w-40">
                                                <p>{user.fullname}</p>
                                             </td>
                                             <td>
                                                 <p>{user.email}</p>
                                             </td>
                                             <td class="text-center">{user.phone}</td>
                                             <td class="w-40">
                                                 <p>{user.card_transactions.length}</p>
                                             </td>
                                             <td class="table-report__action w-56">
                                                <p>{user.pendingAmount}</p>
                                             </td>
                                             <td class="table-report__action w-56">
                                                 <p>{user.availableAmount}</p>
                                              </td>      
                                         </tr>
                                    ))
                                } */}
                                    
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