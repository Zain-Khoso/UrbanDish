// Utils
import styled from "styled-components";

// Components
import { StyledButtonPrimary } from "../../../../components/Button/button.styled";

// Styles
export const Form = styled("form")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    width: 100%;
    aspect-ratio: 6/1;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
`;

export const Input = styled("input")`
    flex: 1;
    text-align: left;
`;

export const Button = styled(StyledButtonPrimary)`
    padding: 0.5rem;
`;
