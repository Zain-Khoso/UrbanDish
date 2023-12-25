// Utils
import styled from "styled-components";

// Components
import { StyledButtonPrimary } from "../../../../components/Button/button.styled";

// Styles
export const Form = styled("form")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 100%;
    height: 80%;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 1rem;
    border-radius: 1rem;
`;

export const Entry = styled("div")`
    display: flex;
    justify-content: center;
    gap: 1rem;

    width: 100%;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    border-bottom: 2px solid ${({ theme }) => theme.Colors.primaryOpacity};
    border-radius: 0.5rem;

    &:focus-within {
        border-color: ${({ theme }) => theme.Colors.primary};

        & svg {
            stroke: ${({ theme }) => theme.Colors.primary};
        }
    }
`;

export const SVGWrapper = styled("div")`
    width: calc(${({ theme }) => theme.FontSizes.md} + 0.5rem);
    aspect-ratio: 1/1;

    svg {
        stroke: ${({ theme }) => theme.Colors.primaryOpacity};
    }
`;

export const Label = styled("label")`
    position: fixed;
    left: -999999px;
`;

export const Input = styled("input")`
    flex: 1;
    text-align: left;
    letter-spacing: 1px;
    word-spacing: 2px;

    &::placeholder {
        color: ${({ theme }) => theme.Colors.contrastOpacity};
    }
`;

export const Message = styled("textarea")`
    flex: 1;
    text-align: left;
    resize: none;
    letter-spacing: 1px;
    word-spacing: 2px;

    &::placeholder {
        color: ${({ theme }) => theme.Colors.contrastOpacity};
    }
`;

export const Button = styled(StyledButtonPrimary)`
    min-width: 100%;
`;
