import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        stripeData: null,
        userId: null,
        products: [],
        cartQuantity: 0,
        total: 0,
        directCost: 0,
    },
    reducers:{
        addProductToCart: (state, action) => {
           
                state.userId = action.payload
                state.cartQuantity += 1
                state.products.push(action.payload)
                state.total += action.payload.price * action.payload.orderedQuantity
                state.directCost += action.payload.directCost * action.payload.orderedQuantity
            
        },
        removeProductFromCart: (state, action) => {
            if (state.cartQuantity > 0) {
                state.cartQuantity -= 1
                state.total -= action.payload.price * action.payload.orderedQuantity
                state.directCost -= action.payload.directCost * action.payload.orderedQuantity
                state.products.pop(action.payload)
            } 
        },
        removeOnlySelectedProduct: (state, action) => {
                state.products.pop(action.payload)
        },
        emtyProductCart: (state) => {
            state.stripeData= null
            state.cartQuantity = 0
            state.products = []
            state.total = 0
            state.directCost = 0
        },
        getStripeData: (state, action) => {
            state.stripeData = action.payload
        }
    },
})

export const { addProductToCart, removeProductFromCart, emtyProductCart, getStripeData, removeOnlySelectedProduct } = cartSlice.actions;
export default cartSlice.reducer;