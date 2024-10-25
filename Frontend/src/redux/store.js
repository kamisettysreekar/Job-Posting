import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import companySlice from "./companySlice";

const store = configureStore({
    reducer:{
        auth:authSlice,
        company:companySlice
    }
});
export default store;