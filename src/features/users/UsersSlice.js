import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Ismail' },
    { id: '1', name: 'Kim Young' },
    { id: '2', name: 'Dave Gray' }
]

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default UsersSlice.reducer;