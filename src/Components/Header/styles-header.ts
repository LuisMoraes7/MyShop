import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: navy;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 90vw;
    margin: 0 auto;
    padding: 0 2rem;
    height: 70px;
`

export const HeaderTitle = styled.h1`
    color: white;

`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    button{
        border: none;
        border-radius: 5px;
        height: 30px;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.75rem;
    }
`
interface AuthButtonProps{
    isLogged: boolean,
}
export const AuthButton = styled.button<AuthButtonProps>`
    background-color: ${(props) => props.isLogged ? 'red' : 'green' };
    color: white;
    
`

export const CartButton = styled.button`
    background-color: violet;
    color: black;
`