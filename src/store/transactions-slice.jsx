import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {transactions: []},
    reducers:{ 
        storeTransactions(state, actions){
            state.transactions = actions.payload
        }
    }
})

export const transactionsAction = transactionsSlice.actions

export default transactionsSlice