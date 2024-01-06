import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../Api";

export const fetchAllBills = createAsyncThunk("utiltityBills/fetchUtilityBills", async () => {
    const response = await Api.axios_instance.get(Api.baseUrl+'bills/payable_bills')
    return response?.data
}) 

const utiltityBillsSlice = createSlice({
    name: 'utilityBills',
    initialState:{utilities: []},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllBills.fulfilled, (state, action) => {
            state.utilities = action.payload
        })
    }
})

export const utiltityBillsActions = utiltityBillsSlice.actions
export default utiltityBillsSlice