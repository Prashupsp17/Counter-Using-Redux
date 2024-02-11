import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";

const appStore = configureStore({
    reducer: {
        counter: countReducer
    }
});

export default appStore;
