import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import transactionsSlice from './transactions-slice';
import countriesSlice from './countries-slice';
import userDetailSlice from './user-details';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import tradeSlice from './trade-slice';
import usersSlice from './admin/users-slice';
import allTransactionSlice from './admin/transactions-base-slice';
import cardSlice from './admin/card-slice';


const reducers = combineReducers({
    auth: authSlice.reducer, 
    transactions: transactionsSlice.reducer,
    countries: countriesSlice.reducer,
    accountInfo: userDetailSlice.reducer,
    trade: tradeSlice.reducer,
    users:usersSlice.reducer,
    allTransactions:allTransactionSlice.reducer,
    cards: cardSlice.reducer
})

const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: [thunk]
})

export default store