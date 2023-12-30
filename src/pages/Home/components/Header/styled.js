// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
export const StyledHeader = styled("header")`
    position: relative;

    width: 100%;
    height: 100dvh;
`;

export const Hero = styled(motion.section)`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 100%;
    max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
    height: 100%;
    padding: 1rem;
    margin-inline: auto;
    opacity: 0;
    translate: 0 100px;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: ${({ theme }) => theme.Breakpoints.tablet};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            flex-direction: row-reverse;
            gap: 5rem;

            max-width: ${({ theme }) => theme.Breakpoints.desktop};
            padding-top: ${({ theme }) => theme.Heights.navbarHeight};
        }
    }
`;

export const Context = styled(motion.section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            align-items: flex-start;

            max-width: 40%;
        }
    }
`;

export const Slogon = styled("h1")`
    min-height: 3lh;
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    color: ${({ theme }) => theme.Colors.primary};

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: 16ch;
            min-height: 2lh;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            text-align: left;
        }
    }
`;

export const SubText = styled("p")`
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.contrastOpacity};

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            text-align: left;
        }
    }
`;
