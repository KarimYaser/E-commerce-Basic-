import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            //To increase Quantity not items
            const findProduct = state.find((product) => product.id === action.payload.id)
            // console.log(findProduct);
            if (findProduct) {
                findProduct.quantity += 1
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone)
            }
            // console.log(state.length)
        },
        deleteFromCart: (state, action) => {
            return state.filter((porduct) => porduct.id !== action.payload.id)
        },
        clear: (state, action) => {
            return []
        },

    }
})
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer