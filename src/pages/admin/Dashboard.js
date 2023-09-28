import MainLayout from "../../components/layout/admin/MainLayout"

const Dashboard = () => {
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
                                                    <div class="text-3xl font-medium leading-8 mt-6">400</div>
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
                                                    <div class="text-3xl font-medium leading-8 mt-6">300</div>
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
                                                    <div class="text-3xl font-medium leading-8 mt-6">29</div>
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
                                                    <div class="text-3xl font-medium leading-8 mt-6">9</div>
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
                                                <tr class="intro-x">
                                                    <td class="w-40">
                                                       <p>Bitoin</p>
                                                    </td>
                                                    <td>
                                                        <p>4000</p>
                                                    </td>
                                                    <td class="text-center">₦4000</td>
                                                    <td class="w-40">
                                                        <div class="flex items-center justify-center text-danger"> <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> Failed </div>
                                                    </td>
                                                    <td class="table-report__action w-56">
                                                       <p>June 2 2023 1:50pm</p>
                                                    </td>
                                                    <td class="table-report__action w-56">
                                                        <p>June 2 2023 1:50pm</p>
                                                     </td>      
                                                </tr>
                                                <tr class="intro-x">
                                                    <td class="w-40">
                                                       <p>Bitoin</p>
                                                    </td>
                                                    <td>
                                                        <p>4000</p>
                                                    </td>
                                                    <td class="text-center">₦4000</td>
                                                    <td class="w-40">
                                                        <div class="flex items-center justify-center text-danger"> <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> Failed </div>
                                                    </td>
                                                    <td class="table-report__action w-56">
                                                       <p>June 2 2023 1:50pm</p>
                                                    </td>
                                                    <td class="table-report__action w-56">
                                                        <p>June 2 2023 1:50pm</p>
                                                     </td>      
                                                </tr>
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

export default Dashboard