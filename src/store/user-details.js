import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import Api from "../Api"

export const fetchDetails = createAsyncThunk("accntDetails/fetchAccntDetails", async () => {
    const response = await Api.axios_instance.get(Api.baseUrl+'/user/get_info')
    console.log(response.data);
    return response?.data
})
const userDetailSlice = createSlice({
    name: 'accountInfo',
    initialState: {accountDetails: null},
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.accountDetails=action.payload
        })
    }
}
)

export const userInfoActions = userDetailSlice.actions
export default userDetailSlice;