// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
export const StyledHeader = styled("header")`
    position: relative;

    width: 100%;
    max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
    padding-block: calc(${({ theme }) => theme.Heights.navbarHeight} + 2rem)
        2rem;
    padding-inline: 1rem;
    margin-inline: auto;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: ${({ theme }) => theme.Breakpoints.tablet};
        }
    }
`;

export const Head = styled("section")`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
    overflow: visible;
`;

export const ImageWrapper = styled(motion.div)`
    position: relative;

    min-width: 4rem;
    max-width: 4rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
`;

export const Image = styled("img")`
    position: ${({ $isLarge }) => ($isLarge ? "fixed" : "absolute")};
    top: 50%;
    left: 50%;

    width: ${({ $isLarge }) => ($isLarge ? "40%" : "100%")};
    max-width: 10rem;
    border-radius: ${({ $isLarge }) => ($isLarge ? "50%" : "0")};
    translate: -50% -50%;
    z-index: ${({ $isLarge }) => ($isLarge ? 11 : 1)};
`;

export const Username = styled("h1")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    color: ${({ theme }) => theme.Colors.primary};
`;
