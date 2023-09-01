import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import Api from "../Api"

export const fetchDetails = createAsyncThunk("accntDetails/fetchAccntDetails", async () => {
    const response = await Api.axios_instance.get(Api.baseUrl+'/user/get_info')
    return response?.data
})

export const deleteBank = createAsyncThunk("deleteAccnt/deleteAccntDetails", async() => {
    const response =  await Api.axios_instance.delete(Api.baseUrl+'/user/account/delete/')
    return response?.data
})
const userDetailSlice = createSlice({
    name: 'accountInfo',
    initialState: {accountDetails: null},
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.accountDetails=action.payload
            console.log(state.accountDetails);
        })
    }
}
)

export const userInfoActions = userDetailSlice.actions
export default userDetailSlice;