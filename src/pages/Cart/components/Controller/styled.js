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
    min-height: 10rem;
    padding-block: 1rem;
    background-color: ${({ theme }) => theme.Themes.Theme};
    box-shadow: 0 -0.01rem 0.1rem ${({ theme }) => theme.Colors.conrastOpacity};
    z-index: 5;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            flex-direction: row;
            justify-content: space-between;

            min-height: 6rem;
            padding-inline: 2rem;
        }
    }
`;

export const TotalPrice = styled("h4")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
`;

export const ButtonGroup = styled("div")`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
    overflow: visible;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            flex-direction: row;
            gap: 2rem;

            width: fit-content;
        }
    }
`;

export const Model = styled("div")`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    width: 80%;
    max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
    background-color: ${({ theme }) => theme.Themes.Theme};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.2rem ${({ theme }) => theme.Colors.contrastOpacity};
    translate: -50% -50%;
    z-index: 11;
`;
