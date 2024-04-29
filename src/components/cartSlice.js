import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "anyname",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        // If the item is already in the cart, increase its quantity.
        itemInCart.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1.
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity > 1) {
          // If the item's quantity is more than 1, decrease it.
          itemInCart.quantity -= 1;
        } else {
          // If the item's quantity is 1, remove it from the cart.
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;