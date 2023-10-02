import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {cards: {}},
    reducers: {
        storeCards(state, action){
            state.cards = action.payload
        }
    }
})

export const cardsAction = cardSlice.actions
export default cardSlice