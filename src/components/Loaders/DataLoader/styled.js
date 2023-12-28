// Utils
import styled from "styled-components";
import {
    Dot1Animation,
    Dot2Animation,
    Dot3Animation,
} from "../animations.styled";

// Styles
export const Wrapper = styled("div")`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 2rem;
`;

const Dot = styled("div")`
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.Colors.primary};
    border-radius: 50%;
`;
export const Dot1 = styled(Dot)`
    animation: ${Dot1Animation} 1s ease-in infinite;
`;

export const Dot2 = styled(Dot)`
    animation: ${Dot2Animation} 1s ease-in infinite;
`;

export const Dot3 = styled(Dot)`
    animation: ${Dot3Animation} 1s ease-in infinite;
`;
