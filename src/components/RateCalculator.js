import {useContext, useState } from "react";
import AssetContext, { AssetContextProvider } from "../store/context/asset-context";
import rawCountries from '../util/countries.json'
import CurrencyFormatter from './CurrencyFormatter'


const RateCalculator = () => {
    const assetCtx = useContext(AssetContext)
    const [cardRate, setCardRate] = useState([])
    const [rateSelected, setRateSelected] = useState({})
    const [countrySelected, setCountrySelected] = useState({})
    const [assetSelected, setAssetSelected] = useState({})
    const [rateValue, setRateValue] = useState(0)
    const [cardTypes, setCardTypes] = useState([])
    const [countries, setCountries] = useState([])
    const [selectedCardType, setSelectedCardType] = useState([])
    const [cardValue, setCardValue] = useState('')
    const [payout, setPayout] = useState(0)
    // const [isAvailable, setIsAvailable] = useState(false)
  
    // Mapping through Asset for select option
    const getAssetHandler =  () => {
        return assetCtx.asset?.map((asset) => {
            if(asset.status === 'Available'){
             return  <option key={asset._id} value={asset._id}>{asset.name}</option>}
            }
        )
    } 

    // Find Country Currency Handler
    const findCountryCurrency = (country) => {
        const countryCurrency = rawCountries.find(c => c.name === country)
        return countryCurrency.currency
    }
    // Removing country duplicates
    const getDistinctCountries = (countryArr) => {
        const uniqueCountries = countryArr.filter((thing, index, self) => index ===
            self.findIndex(t=>t.country === thing.country && t.currency === thing.currency)
        )
        return uniqueCountries
    } 

    // This set a new value when a new digital asset is selected
    const assetChangeHandler = (event) => {
        setRateValue(0)
        const selected = event.target.value
        // Find the selected object from the options array
        const selectedObject = assetCtx.asset.find((option) => option._id === selected);
        setAssetSelected(selectedObject)
        setCardRate(selectedObject.rates)
        setCardTypes([])
        setCountrySelected([])
        setSelectedCardType([])
        setCardValue('')
        let cardArray = []
        let countryArr = []
        selectedObject.rates.forEach(rate => {
            const currency = findCountryCurrency(rate.country)
            rate.currency = currency;       
            if (!cardArray.includes(rate.cardType)) {
                cardArray.push(rate.cardType)
            }
            countryArr.push({ country: rate.country, currency });
        })
        countryArr = getDistinctCountries(countryArr)
        setCardTypes(prevState => [...prevState, ...cardArray])
        setCountries([])        
        setCountries(prevState => [...prevState, ...countryArr])
    }
  
    // Map through a list of rates for a selected digital asset
    const cardTypesHandler = () => {
        return cardTypes?.map((cardType) => {
            return <option  value={cardType}>{cardType}</option>
        })
    } 

    // Set cardType on user select
    const selectCardTypeHandler = (event) => {
        setSelectedCardType(event.target.value)
    }
    // Map through a list of rates for a selected digital asset
    const countryListHandler = () => {
        return countries?.map((country) => {
            return <option value={country.country}>{country.country}-{country.currency}</option>
        })
    } 
    // Set country on selected country
    const countryChangeHandler = (event) => {
        setCountrySelected(event.target.value)
    }

    /** The section calculates the rate of the value */     
    const between = (x, range) => {
        const [min, max] = range.split('-').map(val => parseInt(val))
        return x >= min && x <= max
    }

    const isRateAvailable = (amount) => {
        let isAvailable = false
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

 
    return ( 
        <AssetContextProvider>
            <div className="intro-y col-span-12 lg:col-span-6">     
                <div className="intro-y box p-5">
                    <h3 style={{fontSize: "25px", fontWeight: "600"}}> Rate Calculator</h3><br/>
                    <h4 style={{fontSize: "20px"}}>Get card currency equivalent in naira</h4><br/><br/>
                    
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Select Digital Asset</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={assetSelected._id} onChange={assetChangeHandler}>
                            <option value="">-- Choose an asset -- </option>
                            {getAssetHandler()}
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="crud-form-2" className="form-label">Card Type</label>
                        <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={selectedCardType} onChange={selectCardTypeHandler}>
                            <option value="">-- Choose card type -- </option>
                            {cardTypesHandler()}
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="crud-form-1" className="form-label">Select Country</label>
                          <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example" value={countrySelected} onChange={countryChangeHandler}>
                        <option value="">-- Select Country -- </option>
                            {countryListHandler()}
                        </select>
                    </div>      
                    <div className="mt-5">
                        <label for="crud-form-1" className="form-label">What's the value of the card</label>
                        <input id="crud-form-1" type="number" className="form-control w-full" placeholder="Card Value" value={cardValue} onChange={getRateHandler}/>
                    </div>
                    <br />
                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Rate: <CurrencyFormatter value={rateValue} currencycode="NGN" /> </h3><br/>
                    <h3 style={{fontSize: "20px", fontWeight: "400"}}> Payout: <CurrencyFormatter value={getAmountHandler()}  currencycode="NGN" /></h3>
                </div>
            </div>
        </AssetContextProvider>     
     );
}
 
export default RateCalculator

   
                          