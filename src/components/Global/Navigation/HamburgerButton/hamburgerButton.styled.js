// Utils
import styled from "styled-components";

// Styled
export const Wrapper = styled("button")`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 2rem;
    aspect-ratio: 1/1;
`;

export const Line = styled("span")`
    width: 100%;
    height: 15%;
    background-color: ${({ theme }) => theme.Colors.primary};
    border-radius: 0.2rem;
    transition: all 300ms ease-out;

    &:nth-child(odd) {
        position: ${({ $hamburgerVisible }) => $hamburgerVisible && "absolute"};
        top: ${({ $hamburgerVisible }) => $hamburgerVisible && "50%"};
        left: ${({ $hamburgerVisible }) => $hamburgerVisible && "50%"};

        translate: ${({ $hamburgerVisible }) =>
            $hamburgerVisible && "-50% -50%"};
    }

    &:nth-child(1) {
        rotate: ${({ $hamburgerVisible }) =>
            $hamburgerVisible ? "45deg" : "0deg"};
    }

    &:nth-child(2) {
        transform-origin: right;
        width: ${({ $hamburgerVisible }) =>
            $hamburgerVisible ? "0%" : "100%"};
    }

    &:nth-child(3) {
        rotate: ${({ $hamburgerVisible }) =>
            $hamburgerVisible ? "-45deg" : "0deg"};
    }
`;
