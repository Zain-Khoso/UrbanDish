// Utils
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.Colors.light};
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
        background-color: ${({ theme }) => theme.Themes.Dark};
        overflow-y: auto;
        z-index: -10;
    }
    
`;

export const theme = {
    Themes: {
        Dark: "rgb(30, 30, 30)",
        Light: "rgb(210, 210, 210)",
    },

    Colors: {
        primary: "rgb(108, 248, 84)",
        primaryOpacity: "rgba(108, 248, 84, 0.6)",
        link: "rgba(11, 110, 165, 1)",
        linkOpacity: "rgba(11, 110, 165, 0.6)",
        dark: "rgb(0, 0, 0)",
        darkOpacity: "rgba(0, 0, 0, 0.25)",
        light: "rgb(255, 255, 255)",
        lightOpacity: "rgba(255, 255, 255, 0.6)",
        green: "green",
        orange: "orange",
        red: "rgb(255, 0, 0)",
        redOpacity: "rgba(255, 0, 0, 0.6)",
    },

    Fonts: {
        primary: `"Mochiy Pop One", sans-serif;`,
        secondary: `"Roboto", sans-serif;`,
    },

    FontSizes: {
        lg: "2rem",
        md: "1rem",
    },

    Heights: {
        navbarHeight: "3rem",
    },
};
