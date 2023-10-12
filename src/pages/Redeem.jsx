import MainLayout from "../components/layout/MainLayout";
import { AssetContextProvider } from "../store/context/asset-context";
import Cards from "../components/Trade/Cards";
import SetTradeAmount from "../components/Trade/SetTradeAmount";
import { useParams } from "react-router-dom";

const RedeemPage = () => {
    const {component_name} = useParams()
    console.log(component_name);
    return ( 
        <>
            <MainLayout >
                <AssetContextProvider>
                    <div className="content"> 
                        <div className="grid grid-cols-12 gap-6">   
                            {component_name === 'cards' && <Cards />}
                            {component_name === 'set-trade' && <SetTradeAmount />}
                        </div>
                   </div>
                </AssetContextProvider>
            </MainLayout>
        </>
     );
}
 
export default RedeemPage;