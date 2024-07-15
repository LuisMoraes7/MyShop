import { Product } from "../../Data/products"
import * as S from "./styles-productCard"
import {FiShoppingCart} from 'react-icons/fi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


interface ProductCardProps{
    product: Product;

}



export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
            <S.AddButton>
                Adicionar ao carrinho 
                <FiShoppingCart></FiShoppingCart>
            </S.AddButton>
       </S.Card> 
    )
}