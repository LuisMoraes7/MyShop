import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { CartReducer } from "./Cart/cart-reducer";
import { RootState } from "./store";

export const rootReducer = combineReducers<RootState>({
    user: userReducer,
    cart: CartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>