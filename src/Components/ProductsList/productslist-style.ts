import styled from "styled-components";

interface ContainerProps {
    showCart: boolean;
}


export const Container = styled.main<ContainerProps>`
    max-width: 90vw;
    margin: 4rem auto;
    padding: 0 100px;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 1rem;
    margin-right: ${({ showCart }) => (showCart ? '350px' : 'auto')};

    & > *{
        flex: 1 200px;
    }
`