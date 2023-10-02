import { useEffect, useState } from "react"
import MainLayout from "../../components/layout/admin/MainLayout"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Rates = (props) => {
    const [rates, setRates] = useState([])
    const [cardName, setCardName] = useState('')
    const {cards} = useSelector(state => state.cards.cards)
    const {id} = useParams()
    

    useEffect(() => {
        const card = cards.find(card => card._id === id)
        setRates(card.rates)
        console.log(card.rates);
        setCardName(card.name)
    }, [])

    return(
        <MainLayout>
              <div class="content">
                    <h2 class="intro-y text-lg font-medium mt-10">
                        {cardName}
                    </h2>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                       
                        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                            <table class="table table-report -mt-2">
                                <thead>
                                    <tr>
                                        <th class="whitespace-nowrap">Card Type</th>
                                        <th class="whitespace-nowrap">Country</th>
                                        <th class="whitespace-nowrap">Denomination</th>
                                        <th class="whitespace-nowrap">Rate</th>
                                        <th class="whitespace-nowrap">Active</th>
                                        <th class="whitespace-nowrap">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rates?.map((rate) => (
                                        <tr class="intro-x">
                                            <td class="w-40">
                                                <p>{rate.cardType}</p>
                                            </td>
                                            <td>
                                                <p>{rate.country}</p>
                                            </td>
                                            <td>
                                                <p>{rate.denomination}</p>
                                            </td>
                                            <td>
                                                <p>{rate.rate}</p>
                                            </td>
                                            <td>
                                                {rate.isDisabled ? 'Rate Active' : 'Rate Disabled'}
                                            </td>
                                            <td>
                                            <i class="fa fa-pencil-square-o" aria-hidden="true" style={{paddingRight:"10px"}} ></i>
                                            </td>
                                        </tr>
                                    ))
                                    } 
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            {/* <ToastContainer /> */}
        </MainLayout>
    )
}
export default Rates 