import { createSlice } from "@reduxjs/toolkit";
import Api from "../Api";

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {countries: []},
    reducers:{
       storeCountries(state){ Api.axios_instance.get('../dist/json/countries.json')
        .then(res => {
            state.countries = res.data
        })
    }}
})

export const countriesAction = countriesSlice.actions;
export default countriesSlice;

