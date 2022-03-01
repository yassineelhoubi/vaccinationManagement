import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ManagerState } from "../../interfaces";


const initialState: ManagerState = {
    value: {}
};

export const userSlice = createSlice({
    name: "managers",
    initialState,
    reducers: {
        managerData: (state, action: PayloadAction<ManagerState>) => {
            state.value = action.payload.value;
        },
        clearData: (state) => {
            state.value = {};
        }
    }
})

export const { managerData, clearData } = userSlice.actions

export default userSlice.reducer
