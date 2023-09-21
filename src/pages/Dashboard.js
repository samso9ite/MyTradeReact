import MainLayout from '../components/layout/MainLayout'
import { useSelector, useDispatch } from 'react-redux';
import { transactionsAction } from '../store/transactions-slice';
import Transaction from '../components/Transaction';
import { useEffect, useState } from 'react';
import { fetchDetails } from "../store/user-details";
import Api from '../Api';
import CurrencyFormatter from '../components/CurrencyFormatter';
import { Link } from 'react-router-dom';

    const Dashboard = () => {
    // Get user details from the store 
    const[details, setDetails] = useState([])
    const dispatch = useDispatch()
    // Getting recent transactions 
    useEffect(() => {
        dispatch(fetchDetails())
        Api.axios_instance.get(Api.baseUrl+'/user/get_info')
        .then(res => {
            setDetails(res.data.data)
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
                                                    <div className="text-3xl font-medium leading-8 mt-6"><CurrencyFormatter value={details.availableAmount} currencycode="NGN" /></div>
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
                                                    <div className="text-3xl font-medium leading-8 mt-6"><CurrencyFormatter value={details.pendingAmount} currencycode="NGN" /></div>
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
                                                    <div className="text-3xl font-medium leading-8 mt-6">{details.card_transactions && details.card_transactions.length}</div>
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

                                <div className="col-span-2 xl:col-span-2">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                            <center>
                                                <img alt="MyTrade" src="dist/images/coin/bitcoin.svg" width="30%"/>
                                                <div className="font-medium">Bitcoin</div>
                                            </center>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2 xl:col-span-2">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                            <center>
                                                <img alt="MyTrade" src="dist/images/coin/eth.svg" width="30%"/>
                                                <div className="font-medium">Ethereum</div>
                                            </center>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2 xl:col-span-2">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                            <center>
                                                <img alt="MyTrade" src="dist/images/coin/binance.svg" width="30%"/>
                                                <div className="font-medium">Binance</div>
                                            </center>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-span-2 xl:col-span-2">
                                    <div className="intro-y">
                                    <Link to="/redeem/cards"> 
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                            <center>
                                                <img alt="MyTrade" src="dist/images/coin/giftcard.svg" width="30%"/>
                                                <div className="font-medium">Giftcards</div>
                                            </center>
                                        </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-span-2 xl:col-span-2">
                                    <div className="intro-y">
                                   
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                            <center>
                                                <img alt="MyTrade" src="dist/images/coin/airtime.svg" width="30%"/>
                                                <div className="font-medium">Airtime</div>
                                            </center>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2 xl:col-span-2">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3  items-center zoom-in">
                                            <center>
                                                <img alt="MyTrade" src="dist/images/coin/data.svg" width="30%"/>
                                                <div className="font-medium">Data</div>
                                            </center>
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
                                              <Transaction transactions={details.card_transactions && details.card_transactions.slice(0,10)} />
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