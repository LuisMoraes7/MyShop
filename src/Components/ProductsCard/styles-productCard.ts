import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 1rem 2rem;
    box-shadow: 2px 2px 18px #0000006b;
    margin: 0 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const ProductImage = styled.img`
    width: 250px;
    height: 250px;

    object-fit: contain;

`

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.1rem;
    height: 3rem;
    margin-top: 1rem;
`

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`

export const Review = styled.span`
    display: flex;
    gap: 1px;
    font-size: 0.75rem;
    align-items: center;
    svg{
        
        font-size: 0.9;
    }

    p{
        margin-left: 4px;
    }
`

export const Price = styled.strong`

`

export const AddButton = styled.button`
        border: none;
        border-radius: 5px;
        height: 30px;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 0.75rem;
        margin-top: 1rem;
        width: 100%;
        background: blue;
        color: white;
        font-weight: 500;

        &:hover{
            background-color: darkblue;
        }
`

