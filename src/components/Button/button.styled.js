// Utils
import styled from "styled-components";

// Styles
const Button = styled("button")`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    min-width: 3rem;
    min-height: 1rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;

    & span {
        font-weight: 600;
    }

    & .svg-wrapper {
        width: 1.2rem;
        aspect-ratio: 1/1;
    }
`;

export const StyledButtonPrimary = styled(Button)`
    background-color: ${({ theme }) => theme.Colors.primary};

    & span {
        color: ${({ theme }) => theme.Colors.dark};
    }

    & .svg-wrapper svg {
        stroke: ${({ theme }) => theme.Colors.dark};
    }

    &:focus {
        box-shadow: 0 0 0.3rem ${({ theme }) => theme.Colors.primaryOpacity};
    }
`;

export const StyledButtonRedOutline = styled(Button)`
    border-color: ${({ theme }) => theme.Colors.red};

    & span {
        color: ${({ theme }) => theme.Colors.red};
    }

    & .svg-wrapper svg {
        stroke: ${({ theme }) => theme.Colors.red};
    }

    &:focus {
        box-shadow: 0 0 0.3rem ${({ theme }) => theme.Colors.red};
    }
`;
