import { useState } from "react";
import Transactions from "./transactions"
import SlidingPane from "react-sliding-pane";
import Subscription from "./Subscription";

const bills =[ 
    {
        key:"airtime",
        name: 'Airtime',
        image: 'dist/images/airtime.jpeg'
    },
    {
        key:"data",
        name: 'Data',
        image: 'dist/images/data.png'
    },
    {
        key:"tv",
        name: 'TV',
        image: 'dist/images/cable.png'
    },
    {
        key:"electricity",
        name: 'Electricity',
        image: 'dist/images/electricity.jpg'
    }
]


const UtilityBills = () => {

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });

    const [subscriptionType, setSubscriptionType] = useState('')

    const openPane = (type) => {
        setState({ isPaneOpen: true })
        setSubscriptionType(type)
    }

    return(
        <>
            <div className="grid grid-cols-12 gap-2 mt-5">
                {bills.map((bill) => (
                    <div className="col-span-3 sm:col-span-3 md-col-span-2 l:col-span-2 xl:col-span-2" onClick={() => openPane(bill.name)}>
                        <div className="intro-y">
                            <div className="box px-4 py-4 mb-3  items-center zoom-in" style={{height:"130px"}}>
                                <center>
                                    <img alt="MyTrade" src={bill.image} width="50%"/>
                                    <div className="font-medium" style={{fontSize:"17px", marginTop:'10px'}}>{bill.name}</div>
                                </center>
                            </div>
                        </div>
                    </div>
                ))
                   
                }


                {/* Transaction pane */}
                <SlidingPane 
                  isOpen={state.isPaneOpen}
                  title="Utility Payment"
                  width='30rem'
                  onRequestClose={() => {
                   setState({ isPaneOpen: false });
                  }}
                > 
                    <Subscription subscriptionType = {subscriptionType} />
                </SlidingPane>
                {/* End of transaction pane */}
                <Transactions />
            </div>
        </>
    )
}

export default UtilityBills