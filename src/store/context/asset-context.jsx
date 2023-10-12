import React, { createContext, useEffect, useState } from 'react'
import Api from '../../Api'

const AssetContext = createContext({
    asset: []
})

export const AssetContextProvider = (props) => {
    const [asset, setAsset] = useState([])
    useEffect(() => {
        Api.axios_instance.get(Api.baseUrl+'card/all')
        .then(res => {
            setAsset(res.data.data)
        })
    }, []);

    return  (
        <AssetContext.Provider value={{asset:asset}}>
            {props.children}
        </AssetContext.Provider>);
}

export default AssetContext