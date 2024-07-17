import { useDispatch, useSelector } from "react-redux"
import * as S from "./styles-header"
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi"
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { RootState } from "../../redux/store";
import { ProductsList } from "../ProductsList/ProductsList";    
import { login, logout, userSlice } from "../../redux/User/user-slice";

interface HeaderProps{
    showCart: boolean,
    setShowCart: (show: boolean) => void;

}
export const Header: React.FC<HeaderProps> = ({ showCart, setShowCart }) => {
    
    const cart = useSelector((state: RootState) => state.cart.cart)
    const user = useSelector((state: RootState) => state.user.user);
    const isLogged = user !== null;
    const dispatch = useDispatch()

    function handleUserAuth(){
        //usuario nao logado    
        if (user === null){
            dispatch(
                login({
                name: 'joca',
                email: 'joca@gmail.com'
            }));
            
            
            //forma antiga:
            //despachar a action
            //dispatch({
                //type: 'user/login',
                //payload: {
                //name: 'Joca',
                //email: 'joca@gmail.com'
                 //}
             //})
        } else  {
            dispatch(logout({}))


            //forma antiga:
            // dispatch({
            //     type: 'user/logout'

            // })
        }
    }
    

    return(
        <S.StyledHeader>
            <S.Wrapper>
              <S.HeaderTitle> MyShop. </S.HeaderTitle>

                <S.ButtonWrapper>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
                        {isLogged ? "Logout" : "Login"}
                        {isLogged? <FiLogOut/> : <FiLogIn/>}
                        </S.AuthButton>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                        <FiShoppingCart></FiShoppingCart>
                    </S.CartButton>
                 </S.ButtonWrapper>  
            </S.Wrapper>
            
        <Cart cart={cart} showCart={showCart}></Cart>
        </S.StyledHeader>
    )
}