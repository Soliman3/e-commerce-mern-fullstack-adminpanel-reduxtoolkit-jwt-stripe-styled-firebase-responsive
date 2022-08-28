import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: false,
    },
    reducers: {
        // fetching all products...
        // starting...
        getProductStart: (state) => {
            state.loading = true
            state.error = false
        },
        // when fetching success...
        getProductSuccess: (state, action) => {
            state.products = action.payload
            state.loading = false
        },
        // when fetching fail...
        getProductFailure: (state) => {
            state.loading = false
            state.error = true
        },
        // ##############################
        // Delete products...
        // starting...
        deleteProductStart: (state) => {
            state.loading = true
            state.error = false
        },
        // when delete success...
        deleteProductSuccess: (state, action) => {
            state.products.splice( state.products.findIndex((item)=> item._id === action.payload), 1)
            state.loading = false
        },
        // when delete fail...
        deleteProductFailure: (state) => {
            state.loading = false
            state.error = true
        }
    },
});

export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure } = productSlice.actions;
export default productSlice.reducer;