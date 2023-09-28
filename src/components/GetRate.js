    import {useContext, useEffect, useState } from "react";
    import AssetContext from "../store/context/asset-context";
    import CurrencyFormatter from './CurrencyFormatter'
    import SlidingPane from "react-sliding-pane";
    import "react-sliding-pane/dist/react-sliding-pane.css";

    const GetRate = () => {
        const assetCtx = useContext(AssetContext)
        const [cardRate, setCardRate] = useState([])
        const [assetSelected, setAssetSelected] = useState({})
        const [rateValue, setRateValue] = useState(0)
        const [cardValue, setCardValue] = useState('')
        const [selectedRate, setSelectedRate] = useState('')
        const [amount, setAmount] = useState(0)
        const [calcAmount, setCalcAmount] = useState(0)

        const [state, setState] = useState({
            isPaneOpen: false,
            isPaneOpenLeft: false,
          });
    
        // Mapping through Asset for select option
        const getAssetHandler = () => {
            return assetCtx.asset?.map((asset) => {
                if(asset.status === 'Available'){
                    return  <option key={asset._id} value={asset._id}>{asset.name}</option>}
                }
            )
        } 

        // This set a new value when a new digital asset is selected
        const assetChangeHandler = (event) => {
            setRateValue(0)
            const selected = event.target.value

            // Find the selected object from the options array
            const selectedObject = assetCtx.asset.find((option) => option._id === selected);
            setAssetSelected(selectedObject)
            setCardRate(selectedObject.rates)
            setCardValue('')
        }
    
        // Map through a list of rates for a selected digital asset
        const cardTypesHandler = () => {
            return cardRate?.map((cardType) => {
                return <option  value={cardType._id}>{cardType.country} - {cardType.cardType} - {cardType.denomination} </option>
            })
        } 

        // Set cardType on user select
        const selectRateHandler = (event) => {
            const selected = event.target.value
            const selectedObject = cardRate.find((option) => option._id === selected)
            setSelectedRate(selectedObject)
        }

        // This set the usd amount value
        const setAmountHandler = (event) => {
            setAmount(event.target.value) 
        }

        // This calculates the payout amount
        useEffect(() => {
            setCalcAmount(amount * selectedRate.rate)
        }, [amount])

        const getAmountHandler = () => {
            let payoutCalc = amount * selectedRate.rate
            return payoutCalc
        }
        /** End of rate calculation functions */

        return ( 
            <>
                <div className="intro-y col-span-12 lg:col-span-6">   
                    <div className="intro-y box p-5">
                        <h3 style={{fontSize: "25px", fontWeight: "600"}}>Get Rate</h3><br/>
                        <h4 style={{fontSize: "20px"}}>Search and get the rate of any asset/card</h4><br/><br/>
                        
                        <div className="mt-5">
                            <label for="crud-form-2" className="form-label">Select a giftcard category</label>
                            <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={assetSelected._id} onChange={assetChangeHandler}>
                                <option value="">-- Choose an asset -- </option>
                                {getAssetHandler()}
                            </select>
                        </div>
                        <div className="mt-5">
                            <label for="crud-form-2" className="form-label">Select Rate & Type</label>
                            <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={selectedRate._id} onChange={selectRateHandler}>
                                <option value="">-- Choose card type -- </option>
                                {cardTypesHandler()}
                            </select>
                        </div>
                        <div className="text-center mt-5">
                        <center> <button class="btn btn-outline-primary  inline-block mr-1 mb-2 mt-10"  onClick={() => setState({ isPaneOpen: true })}>View Details <i data-lucide="plus-circle" class="w-5 h-5"></i></button></center>
                        </div>  
                    </div>
                </div>
                <SlidingPane 
                  isOpen={state.isPaneOpen}
                  title="Rate Details"
                  width='35%'
                  onRequestClose={() => {
                  setState({ isPaneOpen: false });
                  }}> 
                    <div style={{paddingBottom:"30px"}}>
                        <center> <img src={assetSelected.image} width={"200px"} /></center>
                    </div>
                    <h2 className="mb-2" style={{fontSize:'20px'}}><strong>Details</strong></h2>
                    <hr />
                    <div>
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}> Asset:     <span style={{float:'right'}}>  {assetSelected.name}</span></p>
                        <hr />
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}> Card Type: <span style={{float:'right'}}>  {selectedRate.cardType} </span> </p>
                        <hr />
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}> Country: <span style={{float:'right'}}>  {selectedRate.country} </span></p>
                        <hr />
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}> Denomination: <span style={{float:'right'}}> {selectedRate.denomination} </span></p>
                        <hr />              
                    </div>

                    <div style={{paddingTop:'35px'}}>
                        <h3 style={{fontSize: "20px", fontWeight: "500"}}> Rate: <CurrencyFormatter value={selectedRate.rate} currencycode="NGN" /> / USD </h3>
                             <div className="mt-5">
                            <input type="number" className="form-control w-full" placeholder="Amount in USD" value={amount} onChange={setAmountHandler}/><br />
                            <h3 style={{fontSize: "20px", fontWeight: "500"}} class="mt-5"> <CurrencyFormatter value={calcAmount} currencycode="NGN" /> </h3>
                            <p>Amount calculated based on rate</p>
                        </div>
                    </div>
                </SlidingPane>        
                 
            </>
        );
    }
    
    export default GetRate;