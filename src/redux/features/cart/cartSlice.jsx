import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.products.push(action.payload)
        },
        removeCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        incrementAmount: (state, action) => {
            const productFound = state.products.findIndex(product => product.id === action.payload.id);
            if (productFound >= 0) {
                state.products[productFound].amount += action.payload.amount;
                state.products[productFound].price_cart += state.products[productFound].price * action.payload.amount;
            }
        },
        updateAmount: (state, action) => {
            const productFound = state.products.findIndex(product => product.id === action.payload.id);

            state.products[productFound].amount = 1;
            if (productFound >= 0) {
                state.products[productFound].amount = action.payload.amount;


                state.products[productFound].amount = action.payload.amount;
                state.products[productFound].price_cart = state.products[productFound].price * action.payload.amount;

            }
        }
    },
});

export const { addCart, removeCart, incrementAmount, updateAmount } = cartSlice.actions;

export default cartSlice.reducer;
