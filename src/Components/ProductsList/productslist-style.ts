import styled from "styled-components";

export const Container = styled.main`
    max-width: 90vw;
    margin: 4rem auto;
    padding: 0 3.38rem;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;
    
    & > *{
        flex: 1 100px;
    }
`