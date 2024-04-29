import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "anyname",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (!itemInCart) {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (product) => product.id !== action.payload.id
            );
        },
    },
    });

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;