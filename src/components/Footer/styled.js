// Utils
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles
export const StyledFooter = styled("footer")`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: ${({ theme }) => theme.Heights.navbarHeight};
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 1rem;
`;

export const Branding = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoWrapper = styled(Link)`
    width: ${({ theme }) => theme.Heights.navbarHeight};
    aspect-ratio: 1/1;
    border-radius: 50%;
    scale: 60%;
`;

export const BrandName = styled("h3")`
    font-family: ${({ theme }) => theme.Fonts.primary};
`;

export const SocialsWrapper = styled("div")`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            gap: 3rem;
        }
    }
`;

export const SVGLink = styled(Link)`
    width: calc(${({ theme }) => theme.Heights.navbarHeight} - 1.8rem);
    aspect-ratio: 1/1;

    & svg {
        stroke: ${({ theme }) => theme.Colors.contrastOpacity};
        fill: none;
    }

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            width: calc(${({ theme }) => theme.Heights.navbarHeight} - 3rem);
        }
    }
`;
