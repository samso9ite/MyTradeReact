import { useEffect, useState } from "react"
import Api from "../../Api"

const Transactions = () => {
    const [utilityTransactions, setUtilityTransactions] = useState([])
    useEffect(() => {
        Api.axios_instance.get(Api.baseUrl+('bills/user/transaction_list'))
        .then(res => {
            setUtilityTransactions(res.data.data.data)
        })
    }, [])
    return (
        <>
            <div className="col-span-12 mt-6">
                <div className="intro-y block sm:flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                        Utility Transactions
                    </h2>
                    
                </div>
                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                    <table className="table table-report sm:mt-2">
                        <thead>
                            <tr>
                                <th className="whitespace-nowrap">Reference</th>
                                <th className="whitespace-nowrap">Service</th>
                                <th className="text-center whitespace-nowrap">Number</th>
                                <th className="text-center whitespace-nowrap">Amount</th>
                                <th className="text-center whitespace-nowrap">Status</th>
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
        </>
    )
}

export default Transactions