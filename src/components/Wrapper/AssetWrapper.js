import {useContext} from "react"
import AssetContext, { AssetContextProvider } from "../../store/context/asset-context";
const AssetWrapper = (props) => {
    const assetCtx = useContext(AssetContext)

    return ( 
      <AssetContextProvider>
        {props.children}
      </AssetContextProvider>
     );
}
 
export default AssetWrapper;