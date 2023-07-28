import { useCallback, useContext, useState } from "react";
import AssetContext, { AssetContextProvider } from "../store/context/asset-context";


const RateCalculator = () => {
    const assetCtx = useContext(AssetContext)
    const [cardRate, setCardRate] = useState([])
    const [rateSelected, setRateSelected] = useState([])
    const [assetSelected, setAssetSelected] = useState([])
    const [rateValue, setRateValue] = useState(0)
 
    // Mapping through Asset for select option
    const getAssetHandler =  () => {
        return assetCtx.asset?.map((asset) => {
            if(asset.status === 'Available'){
             return <option key={asset._id} value={JSON.stringify(asset)}>{asset.name}</option>}
            }
        )
    } 
    // This set a new value when a new digital asset is selected
    const assetChangeHandler = (event) => {
        setRateValue(0)
        const selected = JSON.parse(event.target.value)
        setAssetSelected(selected)
        setCardRate(selected.rates)
    }
    // Map through a list of rates for a selected digital asset
    const rateListHandler = () => {
        return cardRate?.map((rate) => {
            return <option key={rate._id} value={JSON.stringify(rate)}>{rate.cardType}</option>
        })
    } 
    // Set a new value when rate is changed
    const rateChangeHandler = (event) => {
        const selected = JSON.parse(event.target.value)
        setRateSelected(selected)
        setRateValue(selected.rate)
        console.log(rateSelected);
    }

    return ( 
        <AssetContextProvider>
            <div className="intro-y col-span-12 lg:col-span-6">     
                <div className="intro-y box p-5">
                    <h3 style={{fontSize: "25px", fontWeight: "600"}}> Rate Calculator</h3><br/>
                    <h4 style={{fontSize: "20px"}}>Get card currency equivalent in naira</h4><br/><br/>
                    
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Select Digital Asset</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={JSON.stringify(assetSelected)} onChange={assetChangeHandler}>
                            {getAssetHandler()}
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Card Type</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={JSON.stringify(rateSelected)} onChange={rateChangeHandler}>
                          {rateListHandler()}
                        </select>
                    </div>      
                    <div className="mt-5">
                        <label for="crud-form-1" className="form-label">What's the value of the card</label>
                        <input id="crud-form-1" type="number" className="form-control w-full" placeholder="Card Value" />
                    </div>
                    <br />
                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Rate: ₦{rateValue}</h3><br/>
                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Payout: ₦30000</h3>
                </div>
            </div>
        </AssetContextProvider>     
     );
}
 
export default RateCalculator

   
                          