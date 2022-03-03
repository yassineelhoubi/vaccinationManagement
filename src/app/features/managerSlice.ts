import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Manager } from "../../interfaces";


const initialState: Manager = {
    token: "",
    email: "",
    lName: "",
    fName: "",
    area: "",
    isLogged: false,
};

export const managerSlice = createSlice({
    name: "managers",
    initialState,
    reducers: {
        managerData: (state, action: PayloadAction<Manager>) => {
            state.isLogged = action.payload.isLogged;
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.lName = action.payload.lName;
            state.fName = action.payload.fName;
            state.area = action.payload.area;
        },
        clearData: (state) => {
            state.isLogged = false
            state.token = '';
            state.email = '';
            state.lName = '';
            state.fName = '';
            state.area = '';
        }
    }
})

export const { managerData, clearData } = managerSlice.actions

export default managerSlice.reducer
