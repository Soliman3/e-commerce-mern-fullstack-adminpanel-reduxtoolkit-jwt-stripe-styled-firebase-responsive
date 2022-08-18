import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        cartQuantity: 0,
        total:0,
    },
    reducers:{
        addProductToCart: (state, action)=> {
                state.cartQuantity += 1
                state.products.push(action.payload)
                state.total += action.payload.price * action.payload.orderedQuantity  
        },
        removeProductFromCart: (state, action) => {
            if(state.cartQuantity>0){
            state.cartQuantity -= 1
            state.products.filter(cartItem=> cartItem.id !== action.payload.id)
            state.total -= action.payload.price * action.payload.orderedQuantity} 
        }
    },
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;