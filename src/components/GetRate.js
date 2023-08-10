    import {useContext, useEffect, useState } from "react";
    import AssetContext from "../store/context/asset-context";
    import SlideOver from "./Helpers/SlideOver";
    import ReactDOM from 'react-dom'
    import CurrencyFormatter from './CurrencyFormatter'

    const GetRate = () => {
        const assetCtx = useContext(AssetContext)
        const [cardRate, setCardRate] = useState([])
        const [assetSelected, setAssetSelected] = useState({})
        const [rateValue, setRateValue] = useState(0)
        const [cardValue, setCardValue] = useState('')
        const [isModalOpen, setIsModalOpen] = useState(false)
        const [selectedRate, setSelectedRate] = useState('')
        const [amount, setAmount] = useState(0)
        const [calcAmount, setCalcAmount] = useState(0)
    
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
            console.log(assetSelected);
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
            console.log(selectedObject);
            setSelectedRate(selectedObject)
        }

        // This set the usd amount value
        const setAmountHandler = (event) => {
            console.log(event.target.value);    
        setAmount(event.target.value) 
        }

        // This calculates the payout amount
        useEffect(() => {
            setCalcAmount(amount * selectedRate.rate)
        }, [amount])

        const getAmountHandler = () => {
            let payoutCalc = amount * selectedRate.rate
            console.log(payoutCalc);
            return payoutCalc
        }
        /** End of rate calculation functions */

        const toggleModal = () => {
            console.log("this ran");
            setIsModalOpen(!isModalOpen)
        }

        const USDAmount = () => {
            const triggerAction = () => {
                console.log("Action triggered");
            }
            return(
            <>
                    </>
            )     
        }

        const toggleModalButton = () => {
            console.log("Toggling this");   
        }
        const SlideOverRoot = document.getElementById('slide-over__root')
        
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
                        {/* <input type="number" c  lassName="form-control w-full" placeholder="Amount in USD" value={amount} onChange={setAmountHandler}/>  */}
                        <div className="text-center mt-5">
                            <a
                                href="javascript:;"
                                data-tw-toggle="modal"
                                data-tw-target="#medium-slide-over-size-preview"
                                className="btn btn-primary mr-1 mb-2"
                                onClick={toggleModal}
                                > View Details 
                            </a>
                        </div>  
                    </div>
                </div>
                {isModalOpen && ReactDOM.createPortal(
                <SlideOver> 
                    <div style={{paddingBottom:"30px"}}>
                        <center> <img src={assetSelected.image} width={"200px"} /></center>
                    </div>
                    <h2 className="mb-2" style={{fontSize:'20px'}}><strong>Details</strong></h2>
                    <hr />
                    <div>
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}>Asset:     <span style={{float:'right'}}>  {assetSelected.name}</span></p>
                        <hr />
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}> Card Type: <span style={{float:'right'}}>  {selectedRate.cardType} </span> </p>
                        <hr />
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}>  Country: <span style={{float:'right'}}>  {selectedRate.country} </span></p>
                        <hr />
                        <p className="mb-3 mt-3" style={{fontSize:"20px"}}> Denomination: <span style={{float:'right'}}> {selectedRate.denomination} </span></p>
                        <hr />              
                    </div>

                    <div style={{paddingTop:'35px'}}>
                        <h3 style={{fontSize: "20px", fontWeight: "500"}}> Rate: <CurrencyFormatter value={selectedRate.rate} currencycode="NGN" /> / USD </h3>
                                {/* <USDAmount /> */}
                                <div className="mt-5">
                            <input type="number" className="form-control w-full" placeholder="Amount in USD" value={amount} onChange={setAmountHandler}/>
                            <h3 style={{fontSize: "20px", fontWeight: "500"}}> <CurrencyFormatter value={calcAmount} currencycode="NGN" /> </h3>
                            <p>Amount calculated based on rate</p>
                        </div>
                    {/* <button  type="button"   onClick={triggerAction}>Trigger Action</button> */}
                    </div>
                    <div class="modal-footer w-full absolute bottom-0">  <button type="button" class="btn btn-outline-primary w-20 mr-1" onClick={toggleModalButton}> Close </button></div>
                </SlideOver>        
                , 
                    SlideOverRoot
                    )   
                }
                 
            </>
        );
    }
    
    export default GetRate;