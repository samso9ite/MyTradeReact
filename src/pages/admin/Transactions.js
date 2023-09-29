import { useSelector } from "react-redux"
import MainLayout from "../../components/layout/admin/MainLayout"
import Transaction from "../../components/Transaction"
import { useState } from "react"

const AdminTransactions = () => {
    
    const btnOutline = {
        backgroundColor: 'transparent'
    }
    const btnFill = {
        backgroundColor: "#1a3175",
        color: "white"
    }
    const pendingTransactions = useSelector(state => state.allTransactions.pending)
    const [activeBtn, setActiveBtn] = useState('pending')
    const [transactions, setTransactions] = useState(pendingTransactions)
    const paidTransactions = useSelector(state => state.allTransactions.paid)
    const approvedTransactions = useSelector(state => state.allTransactions.approved)

    return(
        <MainLayout>
        <div class="content">
        <h2 class="intro-y text-lg font-medium mt-10">
            All Transactions
        </h2>
        <button class="btn  inline-block mr-1 mb-2 mt-10" style={activeBtn === 'pending' ? btnFill : btnOutline} onClick={() => {setTransactions(pendingTransactions); setActiveBtn('pending')}}>Pending Transactions </button>  <button class="btn btn-outline-primary  inline-block mr-1 mb-2 mt-10" style={activeBtn === 'approved' ? btnFill : btnOutline} onClick={() => {setTransactions(approvedTransactions); setActiveBtn('approved')}}>Approved Transactions </button>  <button class="btn btn-outline-primary  inline-block mr-1 mb-2 mt-10" style={activeBtn === 'completed' ? btnFill : btnOutline} onClick={() => {setTransactions(paidTransactions); setActiveBtn('completed')}}>Completed Transactions </button>
        <div class="grid grid-cols-12 gap-6 mt-5">
          
            <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                <table class="table table-report -mt-2">
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
                    <Transaction transactions={transactions && transactions.slice(0,30)} />
                    </tbody>
                </table>
            </div>

           <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                <nav class="w-full sm:w-auto sm:mr-auto">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                        </li>
                        <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                        <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                        <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                        <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                        <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                        <li class="page-item">
                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                        </li>
                    </ul>
                </nav>
                <select class="w-20 form-select box mt-3 sm:mt-0">
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                </select>
            </div>
        </div>
        <div id="delete-confirmation-modal" class="modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="p-5 text-center">
                            <i data-lucide="x-circle" class="w-16 h-16 text-danger mx-auto mt-3"></i> 
                            <div class="text-3xl mt-5">Are you sure?</div>
                            <div class="text-slate-500 mt-2">
                                Do you really want to delete these records? 
                                <br />
                                This process cannot be undone.
                            </div>
                        </div>
                        <div class="px-5 pb-8 text-center">
                            <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                            <button type="button" class="btn btn-danger w-24">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </MainLayout>
    )
}

export default AdminTransactions