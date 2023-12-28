// Utils
import styled from "styled-components";

// Styles
export const Container = styled("footer")`
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100dvw;
    height: 10rem;
    padding-block: 1rem;
    background-color: ${({ theme }) => theme.Themes.Theme};
    box-shadow: 0 -0.01rem 0.1rem ${({ theme }) => theme.Colors.conrastOpacity};
    z-index: 5;
`;

export const TotalPrice = styled("h4")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
`;

export const ButtonGroup = styled("div")`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    overflow: visible;
`;

export const Model = styled("div")`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    width: 80%;
    background-color: ${({ theme }) => theme.Themes.Theme};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.2rem ${({ theme }) => theme.Colors.contrastOpacity};
    translate: -50% -50%;
    z-index: 11;
`;
