import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices";
import cartSlice from "./cart-slice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice
    }
})

// export default productSlice.reducer;
