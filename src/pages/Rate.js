import GetRate from "../components/layout/GetRate";
import MainLayout from "../components/layout/MainLayout";
import RateCalculator from "../components/RateCalculator";
import AssetContext, { AssetContextProvider } from "../store/context/asset-context";
import { useContext } from "react";

const RatePage = () => {
    const assetCtx = useContext(AssetContext)
    return ( 
        <AssetContextProvider>
            <MainLayout>
                <div class="content">
                    <div class="intro-y flex items-center mt-8">
                        <h2 class="text-lg font-medium mr-auto">
                            Rates {assetCtx.asset}
                        </h2>
                    </div>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                        <RateCalculator/> <GetRate />
                    </div>
                </div>
            </MainLayout>
        </AssetContextProvider>
     );
}
 
export default RatePage
