const RateCalculator = () => {
    return ( 
        <>
            <div className="intro-y col-span-12 lg:col-span-6">     
                <div className="intro-y box p-5">
                    <h3 style={{fontSize: "25px", fontWeight: "600"}}> Rate Calculator</h3><br/>
                    <h4 style={{fontSize: "20px"}}>Get card currency equivalent in naira</h4><br/><br/>
                    
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Select Digital Asset</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example">
                            <option>NordStorm</option>
                            <option>Steam</option>
                            <option>Google</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Card Type</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example">
                            <option>Naira</option>
                            <option>Dollar</option>
                        </select>
                    </div>      
                    <div className="mt-5">
                        <label for="crud-form-1" className="form-label">What's the value of the card</label>
                        <input id="crud-form-1" type="number" className="form-control w-full" placeholder="Card Value" />
                    </div>
                
                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Rate: ₦30000</h3><br/>
                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Payout: ₦30000</h3>
                </div>
            </div>
        </>
     );
}
 
export default RateCalculator

   
                          