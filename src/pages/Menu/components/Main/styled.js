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
    max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
    padding: 1rem;
    margin-inline: auto;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: ${({ theme }) => theme.Breakpoints.tablet};
        }
    }
`;

export const ErrorMessage = styled("p")`
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.orange};
`;
