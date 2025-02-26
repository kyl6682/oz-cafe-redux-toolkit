import { createSlice } from '@reduxjs/toolkit'
import data from '../assets/data'
import { configureStore } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name : 'menu',
    initialState : data.menu,
    reducers : {

    }
})

export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart(state, actions) {},
        removeFromCart(state, actions) {}
    }
})

export const store = configureStore({
    reducer: {
        menu : menuSlice.reducer,
        cart : cartSlice.reducer,
    }
})