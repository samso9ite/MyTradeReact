import { useContext, useEffect, useState } from "react";
import AssetContext from "../../store/context/asset-context"; 
import { useParams } from "react-router-dom";
import rawCountries from '../../util/countries.json'
import CurrencyFormatter  from "../CurrencyFormatter";
import ImageDrawer from "./ImageDrawer";
import { useDispatch } from "react-redux";
import { tradeAction } from "../../store/trade-slice";


const SetTradeAmount = () => {
const assetCtx = useContext(AssetContext)
const [card, setCard] = useState('')
const {id} = useParams()
const [cardRate, setCardRate] = useState([])
const [selectedCardType, setSelectedCardType] = useState([])
const [selectedRate, setSelectedRate] = useState(0)
const [cardValue, setCardValue] = useState('')

const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

const dispatch = useDispatch()

// Removing country duplicates
const getUniqueCountries = (countryArr) => {
    const uniqueCountries = countryArr.filter((thing, index, self) => index ===
        self.findIndex(t=>t.country === thing.country && t.currency === thing.currency)
    )
    return uniqueCountries
} 

useEffect(() => {
    let assetDetail = assetCtx.asset.find((asset) => asset._id === id)
    setCard(assetDetail)
    setCardRate(assetDetail.rates)

}, [])

// Map through a list of rates for a selected digital asset
const cardTypesHandler = () => {
    return cardRate?.map((cardType) => {
        return <option  value={cardType._id}>{cardType.country} - {cardType.cardType} - {cardType.denomination} </option>
    })
} 

const selectCardTypeHandler = (event) => {
    const selected = event.target.value
    setSelectedCardType(selected)
    const selectedObject = cardRate.find((option) => option._id === selected)
    setSelectedRate(selectedObject)
}


const getRateHandler = (event) => {
    setCardValue(event.target.value)
    // isRateAvailable(event.target.value)
}

 // This calculates the payout amount
 const getAmountHandler = () => {
    let payoutCalc = selectedRate.rate * cardValue
    return payoutCalc
}
/** End of rate calculation functions */

const storeTradeDetails = () => {
      let tradeDetails = {
        card: card.name,
        card_type: selectedRate.cardType,
        country: selectedRate.country,
        card_value: cardValue,
        price: cardValue * selectedRate.rate,
        rate: selectedRate.rate
    }
    dispatch(tradeAction.tradeDetails(tradeDetails))
    setState({isPaneOpen:true})
}

    return (
        <>
            <div class="col-span-12 lg:col-span-8 2xl:col-span-8 flex lg:block flex-col-reverse">
                <div class="intro-y box lg:mt-5">
                    <div class="p-5">   
                        <center> 
                            <img alt="Profile Image"  style={{width: '250px', marginBottom:'20px'}} src={card.image} />  
                            <h2 style={{fontSize:'25px', fontWeight:'500'}}>{card.name}</h2>
                        </center><br />
                        <hr />
                        <div>
                            <div class="grid grid-cols-1 gap-6 mb-5">
                            <div className="mt-5">
                                <label for="crud-form-2" className="form-label mt-5">Card Type</label>
                                <select className="form-select form-select-lg sm:mr-2" aria-label=".form-select-lg example" value={selectedCardType} onChange={selectCardTypeHandler}>
                                    <option value="">-- Choose card type -- </option>
                                    {cardTypesHandler()}
                                </select>   
                            </div>
                          
                            <div>
                                <label for="crud-form-2" className="form-label">What's the value of the card</label>
                                <input type="number" className="form-control w-full" placeholder="Card Value" value={cardValue} onChange={getRateHandler} />
                            </div>
                            </div>
                            
                            <h3 style={{fontSize: "20px", fontWeight: "500", paddingTop:'3%'}}> Rate: <CurrencyFormatter value={selectedRate.rate} currencycode="NGN" /> </h3> 
                            <div class="flex justify-end mt-5">
                                <div class="mr-auto flex items-center">
                                    <h3 style={{fontSize: "20px", fontWeight: "500"}}> Payout: <CurrencyFormatter value={getAmountHandler()}  currencycode="NGN" /></h3>
                                </div>
                                <button type="submit" class="btn btn-primary large mr-1 flex" onClick={storeTradeDetails}> Confirm & Proceed</button>
                            </div> 
                            
                        </div>
                    </div>

                </div>
                <ImageDrawer isPaneOpen={state.isPaneOpen}  
                    onRequestClose={() => {setState({ isPaneOpen: false });}}
                />
            </div>  
        </>
    )
}

export default SetTradeAmount;