import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

export const fetchUsers = createAsyncThunk('usersData/fetchUsersData', async () => {
    const response = await Api.axios_instance.get(Api.baseUrl+'/user/all')
    console.log(response.data.data);
    return response?.data.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState:{usersList:[]},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.usersList = action.payload
        })
    }
})

export const userListActions = usersSlice.actions
export default usersSlice;