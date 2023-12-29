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
    gap: 1rem;

    width: 100%;
    height: 100%;
    padding: 1rem;
    opacity: 0;
    translate: 0 100px;
`;

export const Slogon = styled("h1")`
    min-height: 3lh;
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    color: ${({ theme }) => theme.Colors.primary};
`;

export const SubText = styled("p")`
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.contrastOpacity};
`;
