// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
export const StyledHeader = styled("header")`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    padding: 1rem;
    padding-top: ${({ theme }) => theme.Heights.navbarHeight};
    height: fit-content;
`;

export const PageIntro = styled(motion.section)`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    height: fit-content;
    opacity: 0;
    translate: 0 100px;
`;

export const IntroTitle = styled("h1")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    text-align: left;
    color: ${({ theme }) => theme.Colors.primary};
`;

export const CardWrapper = styled("div")`
    width: 100%;
`;
