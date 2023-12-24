// Utils
import styled from "styled-components";

// Styles
export const StyledNotification = styled("div")`
    position: fixed;
    top: 1rem;
    right: ${({ $isOpen }) => ($isOpen ? "1rem" : "-100vw")};
    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.Themes.Theme};
    padding: 0.8rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.Colors.contrastOpacity};
    border-radius: 0.8rem;
    z-index: 2;
    transition: all 200ms;
`;

export const Title = styled("span")`
    text-transform: capitalize;
    color: ${({ theme }) => theme.Colors.primary};
`;

export const SVGWrapper = styled("button")`
    width: 1.5rem;
    aspect-ratio: 1/1;

    & svg {
        stroke: ${({ theme }) => theme.Colors.red};
    }
`;

export const ProgressBar = styled("div")`
    position: absolute;
    left: 0;
    bottom: 0;

    align-self: flex-start;
    width: ${({ $isOpen }) => ($isOpen ? "0%" : "100%")};
    height: 0.3rem;
    background-color: ${({ theme }) => theme.Colors.primaryOpacity};
    transition: all 3s 200ms;
`;
