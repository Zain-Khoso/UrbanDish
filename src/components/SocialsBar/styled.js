// Utils
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
export const Container = styled(motion.section)`
    width: 100%;
    opacity: 0;
    translate: 0 70px;
`;

export const Title = styled("h2")`
    font-family: ${({ theme }) => theme.Fonts.primary};
    text-align: left;
    text-transform: uppercase;
    color: ${({ theme }) => theme.Colors.primary};
    padding-left: 1rem;
    margin-bottom: 0.5rem;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            padding-left: 2rem;
        }
    }
`;

export const SocialsWrapper = styled("div")`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            justify-content: space-evenly;
        }
    }
`;

export const SVGLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    aspect-ratio: 1/1;

    & svg {
        stroke: ${({ theme }) => theme.Colors.contrastOpacity};
        fill: none;
    }
`;
