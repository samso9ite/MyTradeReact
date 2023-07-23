const Transaction = () => {
    return ( 
        <>
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
                        <tr className="intro-x">
                            <td className="w-40">
                                <p>Bitoin</p>
                            </td>
                            <td>
                                <p>4000</p>
                            </td>
                            <td className="text-center">₦4000</td>
                            <td className="w-40">
                                <div className="flex items-center justify-center text-danger"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Failed </div>
                            </td>
                            <td className="table-report__action w-56">
                                <p>June 2 2023 1:50pm</p>
                            </td>
                            <td className="table-report__action w-56">
                                <p>June 2 2023 1:50pm</p>
                                </td>      
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default Transaction;