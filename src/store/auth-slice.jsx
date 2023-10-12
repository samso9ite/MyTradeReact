import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {userDetails: {}},
    reducers: {
        storeUserDetails(state, actions){
            state.userDetails = actions.payload
        }
    }
})

export const authActions = authSlice.actions
export default authSlice;