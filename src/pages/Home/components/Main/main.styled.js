// Utils
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles
export const StyledMain = styled("main")`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    min-height: 100dvh;
    margin-block: 1rem;
`;

export const Section = styled("section")`
    width: 100%;
`;

export const SectionTitle = styled("h2")`
    font-family: ${({ theme }) => theme.Fonts.primary};
    text-align: left;
    text-transform: uppercase;
    color: ${({ theme }) => theme.Colors.primary};
    padding-left: 1rem;
    margin-bottom: 0.5rem;
`;

export const CTA = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.Colors.darkOpacity};
    padding: 1rem;

    & p {
        font-family: ${({ theme }) => theme.Fonts.primary};
    }
`;

export const TextPrimary = styled("span")`
    font-family: inherit;
    color: ${({ theme }) => theme.Colors.primary};
`;
