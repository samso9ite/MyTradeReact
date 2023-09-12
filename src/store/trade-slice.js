import { createSlice } from "@reduxjs/toolkit";

const tradeSlice = createSlice({
    name:'trade',
    initialState: {
        // card_type: '',
        // country:'',
        // card_value: 0,
        // price: 0
        trade: {}
    },
    reducers: {
        tradeDetails(state, action){
            state.trade = action.payload
            // state.card_type = action.payload.card_type
            // state.country = action.payload.country
            // state.card_value = action.payload.card_value
            // state.price = action.payload.price
        }
    }
})

export const tradeAction = tradeSlice.actions
export default tradeSlice