import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart(state, action) {
            state.push(action.payload)
        },
        removeCart(state, action) {
            state.pop(action.payload)
        },
        addWishlist(state, action) {
            state.push(action.payload)
        },
        removeWishlist(state, action) {
            state.pop(action.payload)
        },
    }
})

export const { addCart, removeCart, addWishlist, removeWishlist } = Cartslice.actions;
export default Cartslice.reducer;