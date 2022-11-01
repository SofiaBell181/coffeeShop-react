import { createSlice } from '@reduxjs/toolkit';
import goodsData from '../goods.json';

export const goodsSlice = createSlice({
    name: 'coffee',
    initialState: {
        selectedCategory: 'все',
        goods : goodsData
    },
    reducers: {
        filterCategory: (state, data) => {
            state.selectedCategory = data.payload
        }
    }
})

export const getSelectedCategory = state => state.coffee.selectedCategory;
export const selectGoods = state => state.coffee.goods;
export const { filterCategory } = goodsSlice.actions
export default goodsSlice.reducer