import {useContext, useState } from "react";
import AssetContext from "../store/context/asset-context";
import SlideOver from "./Helpers/SlideOver";
import ReactDOM from 'react-dom'

const GetRate = () => {
    const assetCtx = useContext(AssetContext)
    const [cardRate, setCardRate] = useState([])
    const [assetSelected, setAssetSelected] = useState({})
    const [rateValue, setRateValue] = useState(0)
    const [selectedCardType, setSelectedCardType] = useState([])
    const [cardValue, setCardValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
   
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
        setSelectedCardType([])
        setCardValue('')
    }
  
    // Map through a list of rates for a selected digital asset
    const cardTypesHandler = () => {
        console.log(cardRate);
        return cardRate?.map((cardType) => {
            return <option  value={cardType._id}>{cardType.country} - {cardType.cardType} - {cardType.denomination} </option>
        })
    } 

    // Set cardType on user select
    const selectCardTypeHandler = (event) => {
        setSelectedCardType(event.target.value)
    }

    // This calculates the payout amount
    const getAmountHandler = () => {
        let payoutCalc = cardValue * rateValue
        return payoutCalc
    }
    /** End of rate calculation functions */

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    console.log(isModalOpen);
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
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={selectedCardType} onChange={selectCardTypeHandler}>
                            <option value="">-- Choose card type -- </option>
                            {cardTypesHandler()}
                        </select>
                    </div>      
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
                    {isModalOpen && ReactDOM.createPortal(<SlideOver/>, 
                        SlideOverRoot
                    ) }
                </div>
            </div>
        </>
     );
}
 
export default GetRate;