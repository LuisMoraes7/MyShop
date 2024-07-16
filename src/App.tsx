import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Components/Header/Header';
import { ProductCard } from './Components/ProductsCard/ProductsCard';
import { ProductsList } from './Components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';




// componente funcional
function App() {
  const [showCart, setShowCart] = useState(false)
  return (
    <Provider store={store}>    
    <GlobalStyles></GlobalStyles>
    
    <Header showCart={showCart} setShowCart={setShowCart}></Header>

    <ProductsList showCart={showCart}></ProductsList>
    </Provider>
    
  );
}

export default App;
