import { useContext, useEffect, useState } from "react";
import AssetContext from "../../store/context/asset-context"; 
import { useParams } from "react-router-dom";
import rawCountries from '../../util/countries.json'
import CurrencyFormatter  from "../CurrencyFormatter";
import ImageDrawer from "./ImageDrawer";

const SetTradeAmount = () => {
const assetCtx = useContext(AssetContext)
const [card, setCard] = useState('')
const {id} = useParams()
const [cardRate, setCardRate] = useState([])
const [selectedCardType, setSelectedCardType] = useState([])
const [selectedCurrency, setSelectedCurrency] = useState([])
const [rateValue, setRateValue] = useState(0)
const [cardTypes, setCardTypes] = useState([])
const [countries, setCountries] = useState([])
const [cardValue, setCardValue] = useState('')

const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

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
    let cardArr = []
    let countryArr = []
    setCardTypes([])
    setCardValue('')
    assetDetail.rates.forEach(rate => {
        const currency = findCountryCurrency(rate.country)
        rate.currency = currency;
        if(!cardArr.includes(rate.cardType)){
            cardArr.push(rate.cardType)
        }
        countryArr.push({country:rate.country, currency})
    });
    countryArr = getUniqueCountries(countryArr)
    setCardTypes(prevState => [...prevState, ...cardArr])
    setCountries([])        
    setCountries(prevState => [...prevState, ...countryArr])
}, [])

// Find Country Currency Handler
const findCountryCurrency = (country) => {
    const countryCurrency = rawCountries.find(c => c.name === country)
    return countryCurrency.currency
}

// Map through a list of rates for a selected digital asset
const cardTypesHandler = () => {
    return cardTypes?.map((cardType) => {
        return <option  value={cardType}>{cardType}</option>
    })
} 

// Map through a list of rates for a selected digital asset
const countryListHandler = () => {
    return countries?.map((country) => {
        return <option value={country.country}>{country.country}-{country.currency}</option>
    })
} 

const selectCardTypeHandler = (event) => {
    setSelectedCardType(event.target.value)
}
const selectCurrencyHandler = (event) => {
    setSelectedCurrency(event.target.value)
}
/** The section calculates the rate of the value */     
const between = (x, range) => {
    const [min, max] = range.split('-').map(val => parseInt(val))
    return x >= min && x <= max
}
const isRateAvailable = (amount) => {
    cardRate.forEach(rate => {
        const isBetween = between(amount, rate.denomination);
        if(isBetween){
            setRateValue(rate.rate)
        }else{
            setRateValue(0)
        }
    })
}

const getRateHandler = (event) => {
    setCardValue(event.target.value)
    isRateAvailable(event.target.value)
}

 // This calculates the payout amount
 const getAmountHandler = () => {
    let payoutCalc = cardValue * rateValue
    return payoutCalc
}
/** End of rate calculation functions */

const openDrawer = () => {
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
                                <label for="crud-form-2" className="form-label ">Select Country/Currency</label>
                                <select className="form-select form-select-lg sm:mr-2" aria-label=".form-select-lg example" value={selectedCurrency} onChange={selectCurrencyHandler}>
                                <option value="">-- Choose Currency -- </option>
                                    {countryListHandler()}
                                </select>
                            </div>
                            <div>
                                <label for="crud-form-2" className="form-label">What's the value of the card</label>
                                <input type="number" className="form-control w-full" placeholder="Card Value" value={cardValue} onChange={getRateHandler} />
                            </div>
                            </div>
                            <h3 style={{fontSize: "20px", fontWeight: "500"}}> Rate: <CurrencyFormatter value={rateValue} currencycode="NGN" /> </h3>
                            <div class="flex justify-end">
                                <div class="mr-auto flex items-center">
                                    <h3 style={{fontSize: "20px", fontWeight: "500"}}> Payout: <CurrencyFormatter value={getAmountHandler()}  currencycode="NGN" /></h3>
                                </div>
                                <button type="submit" class="btn btn-primary large mr-1 flex" onClick={() => setState({isPaneOpen:true})}> Confirm & Proceed</button>
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