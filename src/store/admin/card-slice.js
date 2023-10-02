import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

    export const fetchCards = createAsyncThunk('cardsData/fetchCardsData', async () => {
        const response = await Api.axios_instance.get(Api.baseUrl+'/card/all')
        console.log(response.data.data);
        return response?.data.data
    })

    const cardSlice = createSlice({
        name: 'cards',
        initialState:{cards:[]},
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchCards.fulfilled, (state, action) => {
                state.cards = action.payload
            })
        }
    })

    export const cardsAction = cardSlice.actions
    export default cardSlice