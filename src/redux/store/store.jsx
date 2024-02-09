import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { REGISTER, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "../features/cart/cartSlice";

const reducers = combineReducers({
    cart: cartReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
