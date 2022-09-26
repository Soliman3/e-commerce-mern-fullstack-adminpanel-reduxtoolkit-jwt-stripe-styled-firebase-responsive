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
        },
        // ##############################
        // update products...
        // starting...
        updateProductStart: (state) => {
            state.loading = true
            state.error = false
        },
        // when update success...
        updateProductSuccess: (state, action) => {
            state.products[state.products.findIndex((item)=> item._id === action.payload.id)] = action.payload.product
            state.loading = false
        },
        // when update fail...
        updateProductFailure: (state) => {
            state.loading = false
            state.error = true
        },
        // ##############################
        // add products...
        // starting...
        addProductStart: (state) => {
            state.loading = true
            state.error = false
        },
        // when add success...
        addProductSuccess: (state, action) => {
            state.products.push(action.payload)
            state.loading = false
        },
        // when add fail...
        addProductFailure: (state) => {
            state.loading = false
            state.error = true
        },
        deleteAll: (state) => {
            state.products = []
            state.loading = false
            state.error = false
        },
    },
});

export const { getProductStart, getProductSuccess, getProductFailure,
                deleteProductStart, deleteProductSuccess, deleteProductFailure,
                updateProductStart, updateProductSuccess, updateProductFailure,
                addProductStart, addProductSuccess, addProductFailure, deleteAll
            } = productSlice.actions;
export default productSlice.reducer;