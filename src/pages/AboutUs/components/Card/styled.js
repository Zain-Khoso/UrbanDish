// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
export const StyledCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 0.5rem;

    width: 100%;
    max-width: 70ch;
    height: fit-content;
    margin-inline: auto;
    opacity: 0;
    translate: 0 70px;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            flex-direction: row;
            gap: 1rem;
        }
    }
`;

export const Visuals = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 0.5rem;

    width: 100%;
    min-width: 50%;
    height: fit-content;
`;

export const Title = styled("h3")`
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-align: left;
    text-transform: uppercase;
    color: ${({ theme }) => theme.Colors.primary};
`;

export const ImageWrapper = styled("div")`
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 1rem;

    & img {
        border-radius: 1rem;
    }
`;

export const Text = styled("p")`
    text-align: left;

    & span {
        color: ${({ theme }) => theme.Colors.primary};
    }

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            padding-top: calc(1lh + 0.5rem);
        }
    }
`;
