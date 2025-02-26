import { createSlice } from '@reduxjs/toolkit'
import data from '../assets/data'

const menuSlice = createSlice({
    name : 'menu',
    initialState : data.menu,
    reducers : {

    }
})

const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart(state, actions) {},
        removeFromCart(state, actions) {}
    }
})

