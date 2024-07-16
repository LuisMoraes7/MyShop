import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Data/products";

export interface CartState{
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
}


export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addProduct: (state, action) => {
            state.cart = [
                ...state.cart,
                action.payload,
            ]
        //metodo antigo:
        //     return {
        //         ...state,
        //         cart: [
        //             ...state.cart,
        //             action.payload, //payload é o produto que se deseja adicionar
        //         ],
        // },
    },
        removeProduct: (state, action) => {
            const productToRemove = action.payload
            const newCart = state.cart.filter(product => product.id !== productToRemove.id)
            state.cart = newCart;


            //metodo antigo:
            // const productToRemove = action.payload
            // const newCart = state.cart.filter(product => product.id !== productToRemove.id)
            // return {
            //     ...state,
            //     cart: newCart,
            // }
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions