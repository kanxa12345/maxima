import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            state.pop(action.payload)
        },
    }
})

export const { add, remove } = Cartslice.actions;
export default Cartslice.reducer;