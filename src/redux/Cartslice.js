import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        decreaseCart: (state, action) => {
            state.splice(action.payload, 1)
        }
    },
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;