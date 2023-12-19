// Utils
import styled from "styled-components";

// Styles
export const StyledMain = styled("main")`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 2rem;

    width: 100%;
    min-height: 100dvh;
    margin-block: 2rem;
`;

export const ServicesWrapper = styled("section")`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: 100%;
    padding: 1rem;
`;

export const AboutBrand = styled("section")`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    padding-inline: 1rem;
`;

export const Wrapper = styled("div")`
    width: 100%;
`;

export const Title = styled("h4")`
    text-transform: uppercase;
    text-align: left;
    color: ${({ theme }) => theme.Colors.primary};
`;

export const Para = styled("p")`
    text-align: left;
`;
