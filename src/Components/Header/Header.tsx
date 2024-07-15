import { useDispatch, useSelector } from "react-redux"
import * as S from "./styles-header"
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi"
import { RootReducer } from "../../redux/root-reducer";
import { useState } from "react";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
    const [showCart, setShowCart] = useState(false)
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
    const isLogged = user !== null;
    const dispatch = useDispatch()
    function handleUserAuth(){
        //usuario nao logado    
        if (user === null){
            //despachar a action
            dispatch({
                type: 'user/login',
                payload: {
                    name: 'Joca',
                    email: 'joca@gmail.com'
                }
            })
        } else  {
            dispatch({
                type: 'user/logout'

            })
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
            
        <Cart showCart={showCart}></Cart>
        </S.StyledHeader>
    )
}