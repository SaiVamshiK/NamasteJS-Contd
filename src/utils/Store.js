import { configureStore } from "@reduxjs/toolkit";

// configureStore comes from the core redux library.
const Store = configureStore({
    
});
// The store will have slices
export default Store;
// The store is different and the React App is different.
// We need to connect it to our App. -> Provider is used for it.