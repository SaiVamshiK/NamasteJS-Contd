import { createSlice } from "@reduxjs/toolkit";
// creating slice is the core job of redux toolkit.
const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : []
    },
    reducers: {
        // mapping between dispatch actions and reducer functions
        // (state,action) => {
        //   
        // } : is the reducer function, addItem is the action when that reducer function is called.
        // state is the initial state and action is the data that is coming in.
        addItem: (state,action) => {
            state.items.push(action.payload);
        }
    }
});
// Reducer functions are used to modify the cart slice
export default CartSlice;