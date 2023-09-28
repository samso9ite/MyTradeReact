import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

export const fetchPendingTransactions = createAsyncThunk('pending/fetchPendingTransactions', async () => {
    const response = await Api.axios_instance.get(Api.baseUrl+'/admin/transactions/pending')
    console.log(response.data.data);
    return response?.data.data
})

export const fetchApprovedTransactions = createAsyncThunk('approved/fetchApprovedTransactions', async () => {
    const response = await Api.axios_instance.get(Api.baseUrl+'/admin/transactions/approved')
    return response?.data.data
})

export const fetchPaidTransactions = createAsyncThunk('paid/fetchPaidTransactions', async () => {
    const response = await Api.axios_instance.get(Api.baseUrl+'/admin/transactions/paid')
    return response?.data.data
})


const allTransactionSlice = createSlice({
    name:'allTransactions',
    initialState: {pending:[], paid:[], approved:[]},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPendingTransactions.fulfilled, (state, action) => {
            state.pending = action.payload
        })
        .addCase(fetchApprovedTransactions.fulfilled, (state, action) => {
            state.approved = action.payload
        })
        .addCase(fetchPaidTransactions.fulfilled, (state, action) => {
            state.paid = action.payload
        })
    }
})


export const allTransactionActions = allTransactionSlice.actions
export default allTransactionSlice;