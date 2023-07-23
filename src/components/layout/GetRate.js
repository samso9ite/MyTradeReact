const GetRate = () => {
    return ( 
        <>
            <div className="intro-y col-span-12 lg:col-span-6">     
                <div className="intro-y box p-5">
                    <h3 style={{fontSize: "25px", fontWeight: "600"}}>Get Rate</h3><br/>
                    <h4 style={{fontSize: "20px"}}>Search and get the rate of any asset/card</h4><br/><br/>
                    
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Select a gifycard category</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example">
                            <option>NordStorm</option>
                            <option>Steam</option>
                            <option>Google</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Select Rate & Type</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example">
                            <option>Naira</option>
                            <option>Dollar</option>
                        </select>
                    </div>      
                    
                
                    <div className="text-right mt-5">
                        <button type="button" className="btn btn-primary w-24">View Rate</button>
                    </div>

                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Rate: ₦30000</h3><br/>
                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Payout: ₦30000</h3>
                </div>
            </div>
        </>
     );
}
 
export default GetRate;