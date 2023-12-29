// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import { Link } from "react-router-dom";

// Styles
export const Wrapper = styled(motion.div)`
    position: fixed;
    inset: 0;

    width: 100%;
    height: ${({ theme }) => theme.Heights.navbarHeight};
    z-index: ${({ $hamburgerVisible }) => ($hamburgerVisible ? 11 : 1)};
    overflow: visible;
    opacity: 0;
    translate: 0 -${({ theme }) => theme.Heights.navbarHeight};
`;

export const StyledNavbar = styled("nav")`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: ${({ theme }) => theme.Heights.navbarHeight};
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    backdrop-filter: blur(5px);
    padding: 0 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.Colors.primary};
    z-index: ${({ $hamburgerVisible }) => ($hamburgerVisible ? 13 : 3)};
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ theme }) => theme.Heights.navbarHeight};
    aspect-ratio: 1/1;
    scale: 80%;
`;
