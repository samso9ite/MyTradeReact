import MainLayout from "../components/layout/MainLayout";
import Transaction from "../components/Transaction";

const Transactions = () => {
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
                    <Transaction />
                    
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