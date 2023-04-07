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
        },
        removeItem: (state,action) => {
            console.log("Action: ",action.payload);
            state.items.splice(action.payload,1);
        },
        clearCart: (state) => {
            state.items = []
        }
        // we do not have action in clearCart since when we dispatch the clearCart action then we do not send any data
    }
});
// Reducer functions are used to modify the cart slice
export const {addItem,removeItem,clearCart} = CartSlice.actions;
export default CartSlice.reducer;
// BTS:
// CartSlice is an object now:
// {
//     actions: {
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer: 
// }