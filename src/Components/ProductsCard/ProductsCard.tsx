import { Product } from "../../Data/products"
import * as S from "./styles-productCard"
import {FiShoppingCart} from 'react-icons/fi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { RootState } from "../../redux/store";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";


interface ProductCardProps{
    product: Product;

}



export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    
    const dispatch = useDispatch()
    
    const cart = useSelector((state: RootState) => state.cart.cart)
    
    //variavel q informa se o produto esta no carrinho
    const isProductOnCart = cart.find((productOnCart: Product) => product.id === productOnCart.id) !== undefined

    function handleAddProductToCard(){
        
        //metodo antigo:
        //despachar a action de adicionar o produto ao carrinho
        /*dispatch ({
             type: 'cart/add-product',
             payload: product,
         }) */

        dispatch(addProduct(product));
    }

    function handleRemoveProductOnCart(){
        dispatch(removeProduct(product))

        //metodo antigo:
        /*dispatch ({
            type: 'cart/remove-product',
            payload: product,
        }) */ 
    }
    return(
       <S.Card>
        <S.ProductImage src={product.image} alt=""
        />

        <S.ProductTitle>{product.title}</S.ProductTitle>
        
        <S.ReviewPriceContainer>
            <S.Review>
                { Array.from({ length: 5}).map((_, index) => 
                    index < Math.round(product.rating.rate) ?  
                    (<AiFillStar key={index}/> ) : (<AiOutlineStar key={index} />) )}

                <p>({product.rating.rate})</p>
                
                </S.Review>
            <S.Price>${product.price}</S.Price>
        </S.ReviewPriceContainer>
        { isProductOnCart ? (<S.RemoveButton onClick={handleRemoveProductOnCart}>
            Remover do carrinho <FiShoppingCart/>
        </S.RemoveButton>) : (<S.AddButton onClick={handleAddProductToCard}>
            Adicionar ao carrinho <FiShoppingCart/>
       </S.AddButton>)}
       
        
            

       </S.Card> 
    )
}