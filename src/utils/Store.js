import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

// configureStore comes from the core redux library.
const Store = configureStore({
    reducer: {
        cart: CartSlice
    }
});
// The store will have slices
export default Store;
// The store is different and the React App is different.
// We need to connect it to our App. -> Provider is used for it.
// REVISE:
// created Store : configureStore({}) API is used . (imported from RTK)
// created the Provider : to provide the store to the app. <Provider stote = {Store}/> component was used. (imported from react redux)
// created a slice : createSlice() API . (imported from RTK)
// export default CartSlice.reducer : exported reducer
// export {action1,action2} CartSlice.actions : exported actions.
// Put that Slice in store.
