const Transactions = () => {
    return (
        <>
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
                                <th className="whitespace-nowrap">Bill</th>
                                <th className="whitespace-nowrap">Value</th>
                                <th className="text-center whitespace-nowrap">Amount</th>
                                <th className="text-center whitespace-nowrap">Status</th>
                                <th className="text-center whitespace-nowrap">Date Performed</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    )
}

export default Transactions