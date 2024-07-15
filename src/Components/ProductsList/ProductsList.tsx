import { ProductCard } from '../ProductsCard/ProductsCard'
import * as S from './productslist-style'
import { Products } from '../../Data/products'


export const ProductsList: React.FC = () => {
    //pode-se utilizar UseEffect para puxar os dados da API de produtos
    
    return(
        <S.Container>
            { Products.map((producto) => (
                <ProductCard key={producto.id} product={producto}/>
            ))}
        </S.Container>
    )
}