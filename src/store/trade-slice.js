import { createSlice } from "@reduxjs/toolkit";

const tradeSlice = createSlice({
    name:'trade',
    initialState: {
        trade: {}
    },
    reducers: {
        tradeDetails(state, action){
            state.trade = action.payload
        }
    }
})

export const tradeAction = tradeSlice.actions
export default tradeSlice