import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/redux/Cartslice'
const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export default store;