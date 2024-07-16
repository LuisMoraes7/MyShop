import { ProductCard } from '../ProductsCard/ProductsCard'
import * as S from './productslist-style'
import { Products } from '../../Data/products'


interface ProductsListProps {
    showCart: boolean;
}

export const ProductsList: React.FC<ProductsListProps> = ( {showCart} ) => {
    //pode-se utilizar UseEffect para puxar os dados da API de produtos
    
    return(
        <S.Container showCart={showCart}>
            { Products.map((producto) => (
                <ProductCard key={producto.id} product={producto}/>
            ))}
        </S.Container>
    )
}