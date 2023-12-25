// Utils
import styled from "styled-components";

import { StyledButtonPrimary } from "../../../../components/Button/button.styled";

// Styles
export const Card = styled("main")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    width: 100%;
    min-width: 320px;
    min-height: 320px;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 1rem;
    border-radius: 1rem;
`;

export const ImageWrapper = styled("div")`
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 1rem;
`;

export const Bullets = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    width: 100%;

    h4 {
        text-align: left;
    }
`;

export const Bullet = styled("h4")`
    text-align: left;
    text-transform: capitalize;
`;

export const ButtonBar = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    width: 100%;
`;

export const Button = styled(StyledButtonPrimary)`
    flex: 1;
`;

export const ButtonCart = styled(StyledButtonPrimary)`
    padding: 0.5rem 0.8rem;
`;
