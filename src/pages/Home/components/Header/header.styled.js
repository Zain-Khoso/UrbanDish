// Utils
import styled from "styled-components";

// Styles
export const StyledHeader = styled("header")`
    position: relative;

    width: 100%;
    height: 100dvh;
`;

export const StyledHero = styled("section")`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    height: 100%;
    padding: 1rem;
`;

export const HeroImgContainer = styled("div")`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60%;
    aspect-ratio: 1/1;
    overflow: visible;

    & img {
        border-radius: 50%;
        box-shadow: 90px -30px 200px -70px
            ${({ theme }) => theme.Colors.primary};
    }
`;

export const Slogon = styled("h1")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    color: ${({ theme }) => theme.Colors.primary};
`;

export const SubText = styled("p")`
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.contrastOpacity};
`;
