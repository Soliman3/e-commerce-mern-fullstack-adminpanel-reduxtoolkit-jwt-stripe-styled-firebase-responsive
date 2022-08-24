import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error:false,
    },
    reducers:{
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.currentUser = action.payload;
        },
        loginFailer: (state) => {
            state.loading = false
            state.error = true
        },
        logOut: (state) => {
            state.currentUser = null
            state.loading = false
            state.error = false
        },
       
    },
})

export const { loginStart, loginSuccess, loginFailer, logOut  } = userSlice.actions;
export default userSlice.reducer;