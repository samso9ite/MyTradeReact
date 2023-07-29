import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import transactionsSlice from './transactions-slice';
import countriesSlice from './countries-slice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer, 
        transactions: transactionsSlice.reducer,
        countries: countriesSlice.reducer
    }
})

export default store