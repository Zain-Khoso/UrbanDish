// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled
export const Wrapper = styled("button")`
    position: relative;

    width: 2rem;
    aspect-ratio: 1/1;
`;

export const Line = styled(motion.span)`
    position: absolute;
    left: 50%;

    width: 100%;
    height: 12%;
    background-color: ${({ theme }) => theme.Colors.primary};
    border-radius: 0.2rem;
    translate: -50% -50%;
`;
