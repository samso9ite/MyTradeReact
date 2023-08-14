import {createSlice} from "@reduxjs/toolkit"
import Api from "../Api"

const userDetailsSlice = createSlice({
    name: 'accountInfo',
    initialState: {accountInfo:{}},
    reducers: {storeAccountInfo(state, actions){
       Api.axios_instance.get(Api.baseUrl+'/user/get_info')
                            .then(res => {
                                // console.log(res);
                                state.accountInfo = res.data.data    
                                console.log(state.accountInfo);
                            })
    }
}
})

export const userInfoActions = userDetailsSlice.actions
export default userDetailsSlice;