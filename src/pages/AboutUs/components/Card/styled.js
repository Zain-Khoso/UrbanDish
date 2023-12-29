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
    height: fit-content;
    opacity: 0;
    translate: 0 70px;
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
`;
