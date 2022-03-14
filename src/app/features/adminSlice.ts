import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin } from "../../interfaces";


const initialState: Admin = {
    token: "",
    isLogged: false,
};

export const adminSlice = createSlice({
    name: "admins",
    initialState,
    reducers: {
        setAdminData: (state, action: PayloadAction<Admin>) => {
            state.isLogged = action.payload.isLogged;
            state.token = action.payload.token;
        },
        clearAdminData: (state) => {
            state.isLogged = false;
            state.token = '';

        }
    }
})

export const { setAdminData, clearAdminData } = adminSlice.actions

export default adminSlice.reducer
