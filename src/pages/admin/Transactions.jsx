import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layout/admin/MainLayout"
import Transaction from "../../components/Transaction"
import { useState, useEffect } from "react"
import { fetchPendingTransactions, fetchPaidTransactions, fetchApprovedTransactions } from "../../store/admin/transactions-base-slice"

const AdminTransactions = () => {
    
    const btnOutline = {
        backgroundColor: 'transparent'
    }
    const btnFill = {
        backgroundColor: "#1a3175",
        color: "white"
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPendingTransactions())
        dispatch(fetchPaidTransactions())
        dispatch(fetchApprovedTransactions())
    }, [])
   
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
                            <th class="text-center whitespace-nowrap">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    <Transaction transactions={transactions && transactions.slice(0,30)} />
                    </tbody>
                </table>
            </div>

         
        </div>
       
    </div>
    </MainLayout>
    )
}

export default AdminTransactions