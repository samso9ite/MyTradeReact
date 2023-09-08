import { useContext, useEffect, useState } from "react";
import AssetContext from "../../store/context/asset-context"; 
import { useParams } from "react-router-dom";

const SetTradeAmount = () => {
const assetCtx = useContext(AssetContext)
const [card, setCard] = useState('')
const {id} = useParams()

// Find card through it's ID

useEffect(() => {
    console.log(id);
    let assetDetail = assetCtx.asset.find((asset) => asset._id === id)
    console.log(assetDetail);
    setCard(assetDetail)
    console.log(card);
   }, [])

    return (
        <>
               
            <div class="col-span-12 lg:col-span-8 2xl:col-span-8 flex lg:block flex-col-reverse">
                <div class="intro-y box lg:mt-5">
                    <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 class="font-medium text-base mr-auto">
                            Set Trade Amount
                        </h2>
                    </div>
                    <div class="p-5">
                        <center> <img alt="Profile Image" class="rounded-full mb-5"  style={{width: '100px', marginBotton:'20px'}} src={process.env.PUBLIC_URL + '/dist/images/avatar.png'} />  </center> 
                       <form encType="multpart/form-data"> 
                        <input type="file" className="form-control w-full mb-10" placeholder="Upload Image"  />
                            <div class="grid grid-cols-2 gap-6">
                                <input type="text" className="form-control w-full" placeholder="Full name" />
                                <input type="text" className="form-control w-full" placeholder="Username" />
                                <input type="email" className="form-control w-full" placeholder="Email"/>
                                <input type="number" className="form-control w-full" placeholder="Phone"  />
                                
                            </div>
                        </form>
                    </div>
                    <center><button type="submit" class="btn btn-primary large mr-1 mb-10 mt-10"> Confirm & Proceed</button></center>
                </div>
            </div>  
        </>
    )
}

export default SetTradeAmount;