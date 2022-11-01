import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartItem : []
    },

    reducers : {
        addToCart : (state, action) => {
          state.cartItem.push({
            ...action.payload.item,
            count : action.payload.count,
           totalPrice : action.payload.count * action.payload.item.price
          })
        },

        changeCount : (state, action) => {
            let newCart = [];
            state.cartItem.forEach(elem => {
                if(elem.id === action.payload.item.id) {
                    let newCount =  elem.count + action.payload.count;
                    let newPrice = elem.price * newCount;
                    let changeCart = {
                        ...elem,
                        count : newCount,
                        totalPrice : newPrice
                    }
                    newCart.push(changeCart)
                }
                else newCart.push(elem)
            });
            state.cartItem = newCart;
        },


        deleteCart : (state, action) => {
            state.cartItem = state.cartItem.filter(
                cartItem => cartItem.id !== action.payload.cartItem.id
        )}
       
    }
})


export const { addToCart, changeCount, deleteCart} = cartSlice.actions;
export const selectCart = state => state.cart.cartItem;
export default cartSlice.reducer;