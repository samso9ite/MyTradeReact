import { useContext } from "react";
import AssetContext  from "../store/context/asset-context";

const GiftcardBox = () => {
    const assetCtx = useContext(AssetContext)
    const cardsHandler = () => {
        return assetCtx.asset?.map((asset) => {
            if(asset.status === 'Available'){
                return <div class="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                     <div class="box" onClick={() => selectCardHandler(asset.id)}>
                         <div class="p-5">
                             <div class="h-40 2xl:h-56 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10">
                                 <img alt="Giftcard" class="rounded-md" src={asset.image} />
                                 <div class="absolute bottom-0 text-white px-5 pb-6 z-10"> <a href="" class="block font-medium text-base">{asset.name}</a> </div>
                             </div>
                         </div>
                     </div>
                 </div>
             }
         })
    }

    const selectCardHandler = () => {
        
    }
    return ( 
        <>
           {cardsHandler ()}
        </>
     );
}
 
export default GiftcardBox