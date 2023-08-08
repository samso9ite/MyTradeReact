import { Suspense, useEffect } from "react";
import { Await, useLoaderData, defer } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Transaction from "../components/Transaction";
import Api from "../Api";
import { useDispatch } from "react-redux";
import { transactionsAction } from "../store/transactions-slice";

const Transactions = () => {
    const dispatch = useDispatch()
    const {transactions} = useLoaderData();

    useEffect(() => {
        dispatch(transactionsAction.storeTransactions(transactions))
    }, [transactions])
    
    return ( 
        <>
        <MainLayout>
            <div className="content">
                <h2 className="intro-y text-lg font-medium mt-10">
                    All Transactions
                </h2>
                <div className="grid grid-cols-12 gap-6 mt-5">
                    <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                        <div className="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                            <div className="w-56 relative text-slate-500">
                                <input type="text" className="form-control w-56 box pr-10" placeholder="Search..." />
                                <i className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                            </div>
                        </div>
                    </div>
                      <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                <table className="table table-report -mt-2">
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
                    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                        <Await resolve={transactions}>
                            {(loadedTransactions) =>  <Transaction transactions={loadedTransactions} />}
                        </Await>
                    </Suspense>
                     </tbody>
                </table> 
            </div>
                    
                        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                            <nav className="w-full sm:w-auto sm:mr-auto">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                    </li>
                                    <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                    <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                                    <li className="page-item active"> <a className="page-link" href="#">2</a> </li>
                                    <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                                    <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                    </li>
                                </ul>
                            </nav>
                            <select className="w-20 form-select box mt-3 sm:mt-0">
                                <option>10</option>
                                <option>25</option>
                                <option>35</option>
                                <option>50</option>
                            </select>
                        </div>
                    </div>
                    </div>
        </MainLayout>
        </> 
    );
}
 
export default Transactions;

async function loadTransactions(){
    return await Api.axios_instance.get(Api.baseUrl+'card_transaction/all')
     .then(res => {
        return res.data.data
     })
     .catch(err => {
         console.log(err);
     })
 }
 
 export function loader(){
    return defer({
        transactions:loadTransactions()
    })
 }