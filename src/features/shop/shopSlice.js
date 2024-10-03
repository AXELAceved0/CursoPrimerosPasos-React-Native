import { createSlice } from '@reduxjs/toolkit'
import categories from '../../data/categories.json'
import product from '../../data/product.json'
const initialState = {
    categories: categories,
    product:product,
    // categorySelected:"",
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
})

export const {} = shopSlice.actions

export default shopSlice.reducer