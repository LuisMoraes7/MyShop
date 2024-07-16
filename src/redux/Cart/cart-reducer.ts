
import { Product } from "../../Data/products";

export interface CartState{
    cart: Product[];
}

const initialCartState: CartState = {
    cart: [],
}

interface CartAction {
    type: string,
    payload: Product;
}

export function CartReducer(state= initialCartState, action: CartAction): CartState {
    switch (action.type){
        case 'cart/add-product': 
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload, //payload é o produto que se deseja adicionar
                ],
            } 
        case 'cart/remove-product':
            const productToRemove = action.payload
            const newCart = state.cart.filter(product => product.id !== productToRemove.id)
            return {
                ...state,
                cart: newCart,
            }
        default:
            return state
    }
}