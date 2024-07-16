import styled from "styled-components";

interface ContainerProps{
    showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`

    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart ? '0' : '-350px')};
    width: 350px;
    background-color: white;
    height: 100vh;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    transition: right 1s;

    
`

export const Title = styled.h1`

`

export const CartList = styled.ul`
    padding: 2rem 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CartProductItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
        strong{
            margin-left: 5px;
        }
`

export const CartTotal = styled.strong`
`

export const ButtonToRemove = styled.button`
    margin-left: 5px;
    background: transparent;
    border: none;
    color: red;
    padding: 5px;
    display: flex;
    align-items: center;
    
`

