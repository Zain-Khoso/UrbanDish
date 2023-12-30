// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
export const ServiceCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    width: 80%;
    max-width: 300px;
    opacity: 0;
    translate: 0 70px;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            max-width: none;
            flex-grow: 1;
            flex-basis: 40%;
        }
    }
`;

export const ServiceImgWrapper = styled("div")`
    width: 100%;
    aspect-ratio: 16/12;
    border-radius: 0.5rem;

    & img {
        width: auto;
        height: 100%;
    }
`;

export const ServiceText = styled("p")`
    width: 25ch;
`;
