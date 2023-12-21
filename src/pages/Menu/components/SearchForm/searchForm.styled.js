// Utils
import styled from "styled-components";

// Components
import { StyledButtonPrimary } from "../../../../components/Button/button.styled";

// Styles
export const Form = styled("form")`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    aspect-ratio: 6/1;
    background-color: ${({ theme }) => theme.Colors.darkOpacity};
    padding: 0.5rem;
    border-radius: 1rem;
`;

export const Input = styled("input")`
    flex: 1;
    text-align: left;
    padding-inline: 1rem;
`;

export const Button = styled(StyledButtonPrimary)`
    padding: 0.5rem;
`;
