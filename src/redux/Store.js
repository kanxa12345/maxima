import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/redux/Cartslice';
import wishlistReducer from '@/redux/Wishlistslice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => ([logger])
});


export const persistor = persistStore(store);