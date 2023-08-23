import {createSlice} from "@reduxjs/toolkit"

const userDetailSlice = createSlice({
    name: 'accountInfo',
    initialState: {accountDetails: null},
    reducers: {
        storeAccountInfo(state, actions){
        state.accountDetails = actions.payload
    }
}
})

export const userInfoActions = userDetailSlice.actions
export default userDetailSlice;