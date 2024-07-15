import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Components/Header/Header';
import { ProductCard } from './Components/ProductsCard/ProductsCard';
import { ProductsList } from './Components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';




// componente funcional
function App() {
  return (
    <Provider store={store}>    
    <GlobalStyles></GlobalStyles>
    
    <Header></Header>

    <ProductsList></ProductsList>
    </Provider>
    
  );
}

export default App;
