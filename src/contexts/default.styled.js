// Utils
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.Colors.contrast};
        font-size: ${({ theme }) => theme.FontSizes.md};
        font-family: ${({ theme }) => theme.Fonts.secondary};
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        line-height: 1.5;
        background-color: transparent;
        padding: 0;
        border: none;
        outline: none;
        margin: 0;
        overflow: hidden;
        scroll-behavior: smooth;
    }
    
    ol,
    ul,
    dl {
        list-style: none;
    }
    
    img,
    svg {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
    }
    
    body {
        position: absolute;
        inset: 0;

        width: 100dvw;
        height: 100dvh;
        z-index: -11;
    }
    
    #root {
        position: absolute;
        inset: 0;
        
        width: 100dvw;
        height: 100dvh;
        background-color: ${({ theme }) => theme.Themes.Theme};
        overflow-y: auto;
        z-index: -10;
    }
`;
