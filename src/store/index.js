import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import transactionsSlice from './transactions-slice';
import countriesSlice from './countries-slice';
import userDetailsSlice from './user-details';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer, 
        transactions: transactionsSlice.reducer,
        countries: countriesSlice.reducer,
        accountInfo: userDetailsSlice.reducer
    }
})

export default store