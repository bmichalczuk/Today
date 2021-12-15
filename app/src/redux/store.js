import {configureStore} from "@reduxjs/toolkit";
import habitsReducer from "./habitsReducer";
export default configureStore({
    reducer: {
        habits: habitsReducer
    }
});