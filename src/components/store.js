// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    kuchbhi: cartSlice,
  },
});

export default store;