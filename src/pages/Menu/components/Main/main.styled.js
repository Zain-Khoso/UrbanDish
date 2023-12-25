// Utils
import styled from "styled-components";

// Styles
export const StyledMain = styled("main")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 1rem;
`;

export const ErrorMessage = styled("p")`
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.orange};
`;
