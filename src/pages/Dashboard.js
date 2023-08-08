import MainLayout from '../components/layout/MainLayout'
import { useSelector, useDispatch } from 'react-redux';
import { transactionsAction } from '../store/transactions-slice';
import Transaction from '../components/Transaction';
import { useEffect, useState } from 'react';
import Api from '../Api';

    const Dashboard = () => {
    // Get user details from the store 
    const[transactions, setTransactions] = useState([])
    let userDetails = useSelector(state => state.auth.userDetails.userDetails)
    // Getting recent transactions 
    useEffect(() => {
        Api.axios_instance.get(Api.baseUrl+'card_transaction/all')
        .then(res => {
            setTransactions(res.data.data)
        })
        .catch(err => {
            console.log(err);
        })  
    }, [])
        return ( 
            <>
            <MainLayout >
                <div className="content">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-9">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12 mt-8">
                                    <div className="intro-y flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-5">
                                            General Report
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-12 gap-6 mt-5">
                                        <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                            <div className="report-box zoom-in">
                                                <div className="box p-5">
                                                    <div className="flex">
                                                        <i data-lucide="credit-card" className="report-box__icon text-pending"></i> 
                                                    </div>
                                                    <div className="text-3xl font-medium leading-8 mt-6">₦{userDetails.availableAmount}</div>
                                                    <div className="text-base text-slate-500 mt-1">Available Balance</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                            <div className="report-box zoom-in">
                                                <div className="box p-5">
                                                    <div className="flex">
                                                        <i data-lucide="credit-card" className="report-box__icon text-pending"></i> 
                                                    </div>
                                                    <div className="text-3xl font-medium leading-8 mt-6">₦{userDetails.pendingAmount}</div>
                                                    <div className="text-base text-slate-500 mt-1">Pending Balance</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                            <div className="report-box zoom-in">
                                                <div className="box p-5">
                                                    <div className="flex">
                                                        <i data-lucide="credit-card" className="report-box__icon text-pending"></i> 
                                                     </div>
                                                    <div className="text-3xl font-medium leading-8 mt-6">{userDetails.card_transactions.length}</div>
                                                    <div className="text-base text-slate-500 mt-1">Total Transactions</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                              
                                <div className="col-span-12 xl:col-span-12 mt-6">
                                    <div className="intro-y flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-5">
                                            Quick Links
                                        </h2>
                                    </div>
                                </div>

                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 xl:col-span-1">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" />
                                                <div className="font-medium">Bitcoin</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 mt-6">
                                    <div className="intro-y block sm:flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-5">
                                            Recent Transactions
                                        </h2>
                                      
                                    </div>
                                    <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                        <table className="table table-report sm:mt-2">
                                            <thead>
                                                <tr>
                                                    <th className="whitespace-nowrap">Card</th>
                                                    <th className="whitespace-nowrap">Value</th>
                                                    <th className="text-center whitespace-nowrap">Amount</th>
                                                    <th className="text-center whitespace-nowrap">Status</th>
                                                    <th className="text-center whitespace-nowrap">Date Performed</th>
                                                    <th className="text-center whitespace-nowrap">Date Completed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              <Transaction transactions={transactions} />
                                            </tbody>
                                        </table>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </MainLayout>
            </>
         );
    }
     
    export default Dashboard;