import { createSlice } from "@reduxjs/toolkit";
import {} from "../firebase/utils";

const habitsSlice = createSlice({
    name: "habits",
    initialState: {
        data: {}
    },
    reducers: {
        update(state, action) {
            console.log("payload", "||", action.payload);
            state.data = action.payload;
        },
        reset(state) {
            state.data = {};
        }
    }
});

export const {update, reset} = habitsSlice.actions;

export default habitsSlice.reducer;
