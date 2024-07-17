import { useDispatch } from 'react-redux';
import * as S from './styles-cart'
import { Product } from '../../Data/products';
import { AiFillDelete } from 'react-icons/ai'
import { removeProduct } from '../../redux/Cart/cart-slice';


interface CartProps{
    showCart: boolean,
    cart: Product[]
}

export const Cart: React.FC<CartProps> = ({ showCart, cart  }) => {
    
    const total = cart.reduce((totalCart: number, product: Product) => {
        return totalCart + product.price
    }, 0)
    const dispatch = useDispatch()

    
    return(
        <S.Container showCart={showCart}>
            <S.Title>Carrinho</S.Title>

            <S.CartList>
                { cart.map((product: Product) => (
                    <S.CartProductItem key={product.id} >
                        {product.title} :  <strong>${product.price}</strong>
                        <S.ButtonToRemove 
                        onClick={() => {
                            dispatch(removeProduct(product))
                            //metodo antigo:
                            //() => dispatch({
                                //type: 'cart/remove-product',
                                //payload: product,
                        }}>Remover <AiFillDelete/></S.ButtonToRemove>
                        </S.CartProductItem>
                    
                )) } 
            </S.CartList>
            <S.CartTotal data-testid="total ">Total: ${total}</S.CartTotal>
        </S.Container>
    )
}