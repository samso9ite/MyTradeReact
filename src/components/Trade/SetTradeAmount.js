import { useContext, useEffect, useState } from "react";
import AssetContext from "../../store/context/asset-context"; 
import { useParams } from "react-router-dom";
import rawCountries from '../../util/countries.json'

const SetTradeAmount = () => {
const assetCtx = useContext(AssetContext)
const [card, setCard] = useState('')
const {id} = useParams()
const [rateValue, setRateValue] = useState(0)
const [cardTypes, setCardTypes] = useState([])
const [countries, setCountries] = useState([])
const [cardValue, setCardValue] = useState('')

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
    let cardArr = []
    let countryArr = []
    assetDetail.rates.forEach(rate => {
        const currency = findCountryCurrency(rate.country)
        rate.currency = currency;
        if(!cardArr.includes(rate.cardType)){
            console.log('RAte.Country');
            cardArr.push(rate.cardType)
        }
        countryArr.push({country:rate.country, currency})
    });
    countryArr = getUniqueCountries(countryArr)
    setCardTypes(prevState => [...prevState, ...cardArr])
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

    return (
        <>
            <div class="col-span-12 lg:col-span-8 2xl:col-span-8 flex lg:block flex-col-reverse">
                <div class="intro-y box lg:mt-5">
                    {/* <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 class="font-medium text-base mr-auto">
                            Set Trade Amount
                        </h2>
                    </div> */}
                    <div class="p-5">
                        <center> 
                            <img alt="Profile Image"  style={{width: '250px', marginBottom:'20px'}} src={card.image} />  
                            <h2 style={{fontSize:'25px', fontWeight:'500'}}>{card.name}</h2>
                        </center><br />
                        <hr />
                        <form encType="multpart/form-data"> 
                            <div class="grid grid-cols-1 gap-6 mb-5">
                            <div className="mt-5">
                                <label for="crud-form-2" className="form-label mt-5">Card Type</label>
                                <select className="form-select form-select-lg sm:mr-2" aria-label=".form-select-lg example">
                                    <option value="">-- Choose card type -- </option>
                                    {cardTypesHandler()}
                                </select>   
                            </div>
                            <div>
                                <label for="crud-form-2" className="form-label ">Select Country/Currency</label>
                                <select className="form-select form-select-lg sm:mr-2" aria-label=".form-select-lg example">
                                    {countryListHandler()}
                                </select>
                            </div>
                            <div>
                                <label for="crud-form-2" className="form-label">What's the value of the card</label>
                                <input type="number" className="form-control w-full" placeholder="Card Value"  />
                            </div>
                            <div>
                                  
                            <span style={{fontSize:'21px', fontWeight:500}}> You Get: #123,0000</span>
                                <button class="btn btn-primary large mr-1 mt-10" style={{float:'right'}}> Confirm & Proceed</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default SetTradeAmount;