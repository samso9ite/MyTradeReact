import { useSelector } from "react-redux"
import MainLayout from "../../components/layout/admin/MainLayout"
import Transaction from "../../components/Transaction"

const AdminDashboard = () => {
    const pendingTransactions = useSelector(state => state.allTransactions.pending)
    const paidTransactions = useSelector(state => state.allTransactions.paid)
    const approvedTransactions = useSelector(state => state.allTransactions.approved)
    const users = useSelector(state => state.users.usersList)

    return(
        <MainLayout>
             <div class="content">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-12 2xl:col-span-9">
                            <div class="grid grid-cols-12 gap-6">
                                <div class="col-span-12 mt-8">
                                    <div class="intro-y flex items-center h-10">
                                        <h2 class="text-lg font-medium truncate mr-5">
                                            General Report
                                        </h2>
                                    </div>
                                    <div class="grid grid-cols-12 gap-6 mt-5">
                                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                            <div class="report-box zoom-in">
                                                <div class="box p-5">
                                                    <div class="flex">
                                                        <i data-lucide="credit-card" class="report-box__icon text-pending"></i> 
                                                    </div>
                                                    <div class="text-3xl font-medium leading-8 mt-6">{users.length}</div>
                                                    <div class="text-base text-slate-500 mt-1">Users</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                            <div class="report-box zoom-in">
                                                <div class="box p-5">
                                                    <div class="flex">
                                                        <i data-lucide="credit-card" class="report-box__icon text-pending"></i> 
                                                    </div>
                                                    <div class="text-3xl font-medium leading-8 mt-6">{paidTransactions.length}</div>
                                                    <div class="text-base text-slate-500 mt-1">Completed</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                            <div class="report-box zoom-in">
                                                <div class="box p-5">
                                                    <div class="flex">
                                                        <i data-lucide="credit-card" class="report-box__icon text-pending"></i> 
                                                     </div>
                                                    <div class="text-3xl font-medium leading-8 mt-6">{approvedTransactions.length}</div>
                                                    <div class="text-base text-slate-500 mt-1">Approved</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                            <div class="report-box zoom-in">
                                                <div class="box p-5">
                                                    <div class="flex">
                                                        <i data-lucide="credit-card" class="report-box__icon text-pending"></i> 
                                                     </div>
                                                    <div class="text-3xl font-medium leading-8 mt-6">{pendingTransactions.length}</div>
                                                    <div class="text-base text-slate-500 mt-1">Pending</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                              
                                <div class="col-span-12 mt-6">
                                    <div class="intro-y block sm:flex items-center h-10">
                                        <h2 class="text-lg font-medium truncate mr-5">
                                            Recent Transactions
                                        </h2>
                                      
                                    </div>
                                    <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                        <table class="table table-report sm:mt-2">
                                            <thead>
                                                <tr>
                                                    <th class="whitespace-nowrap">Card</th>
                                                    <th class="whitespace-nowrap">Value</th>
                                                    <th class="text-center whitespace-nowrap">Amount</th>
                                                    <th class="text-center whitespace-nowrap">Status</th>
                                                    <th class="text-center whitespace-nowrap">Date Performed</th>
                                                    <th class="text-center whitespace-nowrap">Date Completed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <Transaction transactions={pendingTransactions && pendingTransactions.slice(0,30)} />
                                            </tbody>
                                        </table>
                                    </div>
                                  
                                </div>
                                
                            </div>
                        </div>
                      
                    </div>
                </div>
        </MainLayout>
    )
}

export default AdminDashboard