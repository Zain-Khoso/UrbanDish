// Utils
import styled from "styled-components";

// Styles
export const CardsWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    width: 100%;
    padding: 1rem;
    margin-inline: auto;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            flex-direction: row;
            flex-wrap: wrap;

            max-width: calc(
                ${({ theme }) => theme.Breakpoints.desktop} - 200px
            );
            column-gap: 8rem;
        }
    }
`;
