// Utils
import styled from "styled-components";

// Styles
export const Container = styled("div")`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100dvw;
    height: 100dvh;
`;

export const Expression = styled("h1")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    color: ${({ theme }) => theme.Colors.primary};
`;

export const Message = styled("p")`
    width: 35ch;
`;

export const ButtonGroup = styled("div")`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
`;

export const PrevLink = styled("button")`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const Text = styled("span")`
    color: ${({ theme }) => theme.Colors.primary};
`;

export const SVGWrapper = styled("div")`
    width: 1.5rem;

    & svg {
        stroke: ${({ theme }) => theme.Colors.primary};
    }
`;
