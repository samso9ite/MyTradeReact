import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import transactionsSlice from './transactions-slice';

const store = configureStore({
    reducer: {auth: authSlice.reducer, transactions: transactionsSlice.reducer}
})

export default store