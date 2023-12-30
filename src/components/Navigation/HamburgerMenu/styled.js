// Utils
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles
export const Wrapper = styled("div")`
    position: absolute;
    top: ${({ theme, $hamburgerVisible }) =>
        $hamburgerVisible ? theme.Heights.navbarHeight : "-100vh"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 100%;
    background-color: ${({ theme }) => theme.Themes.Theme};
    padding: 1rem 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.Colors.contrastOpacity};
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    transition: top 300ms ease-out;
    z-index: ${({ $hamburgerVisible }) => ($hamburgerVisible ? 12 : 2)};

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            top: ${({ theme }) => theme.Heights.navbarHeight};
            right: ${({ $hamburgerVisible }) =>
                $hamburgerVisible ? 0 : "-100vw"};
            justify-content: flex-start;

            width: 80%;
            max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
            height: calc(100dvh - ${({ theme }) => theme.Heights.navbarHeight});
            border: 2px solid ${({ theme }) => theme.Colors.contrastOpacity};
            border-right: 0;
            border-radius: 0;
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            transition: right 300ms ease-out;
        }
    }
`;

export const Head = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: auto;
    overflow: visible;
`;

export const Navigation = styled("ul")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
`;

export const NavItem = styled("li")`
    width: 100%;
    padding-block: 0.5rem;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    border-radius: 0.5rem;
    transition: all 200ms ease-out;

    &:hover,
    &:focus-within {
        cursor: pointer;
        background-color: ${({ theme }) => theme.Colors.primaryOpacity};
    }
`;

export const StyledLink = styled(Link)`
    display: block;

    width: 100%;
    text-transform: uppercase;
`;
