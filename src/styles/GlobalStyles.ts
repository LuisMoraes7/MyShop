// CSS in JS

import { create } from "domain";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #f7f7f7;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
        transition: filter 0.3s;
        &:hover{
            filter: brightness(1.2);
            transition: filter 0.4s;
        }
    }
`