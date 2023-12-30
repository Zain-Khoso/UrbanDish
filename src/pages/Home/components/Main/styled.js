// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
export const StyledMain = styled("main")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 100%;
    min-height: 100dvh;
    margin-block: 1rem;
`;

export const Section = styled("section")`
    width: 100%;
`;

export const SectionTitle = styled(motion.h2)`
    font-family: ${({ theme }) => theme.Fonts.primary};
    text-align: left;
    text-transform: uppercase;
    color: ${({ theme }) => theme.Colors.primary};
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    opacity: 0;
    translate: 0 70px;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            padding-left: 2rem;
            margin-bottom: 2rem;
        }
    }
`;

export const CTA = styled(motion.section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 1rem;
    opacity: 0;
    translate: 0 70px;

    & p {
        font-family: ${({ theme }) => theme.Fonts.primary};
    }

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            flex-direction: row;
            gap: 5rem;
        }

        && p {
            font-size: ${({ theme }) => theme.FontSizes.lg};
            width: 20ch;
            line-height: 2.5;
        }
    }
`;

export const TextPrimary = styled("span")`
    font-family: inherit;
    color: ${({ theme }) => theme.Colors.primary};

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            font-size: ${({ theme }) => theme.FontSizes.lg};
        }
    }
`;
