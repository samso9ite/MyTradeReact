import { defer } from "react-router-dom";

function Transaction({transactions}){
    return ( 
        <>
            {transactions?.map((transaction) => (
                <tr className="intro-x" >
                    <td className="w-40">
                        <p>{transaction.card}</p>
                    </td>
                    <td>
                        <p>{transaction.card_value}</p>
                    </td>
                    <td className="text-center">₦{transaction.amount}</td>
                    <td className="w-40">
                        <div className="flex items-center justify-center text-danger"> {transaction.status} </div>
                    </td>
                    <td className="table-report__action w-56">
                        <p>{transaction.created_at}</p>
                    </td>
                    <td className="table-report__action w-56">
                        <p>{transaction.updated_at}</p>
                        </td>      
                </tr>
            ))
            }
        </>
     );
}
 
export default Transaction;

