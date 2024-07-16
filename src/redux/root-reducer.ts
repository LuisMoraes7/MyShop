import { combineReducers } from "redux";
// import { userReducer } from "./User/reducer";
// import { CartReducer } from "./Cart/cart-reducer";
import { RootState } from "./store";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart-slice";

export const rootReducer = combineReducers<RootState>({
    user: userSlice.reducer,
    cart: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>