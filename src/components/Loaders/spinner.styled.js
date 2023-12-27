// Utils
import styled from "styled-components";
import { SpinnerAnimation } from "./animations.styled";

// Styles
export default styled("div")`
    position: fixed;
    inset: 0;
    top: 50%;
    left: 50%;

    width: 20%;
    aspect-ratio: 1/1;
    border: 0.5rem solid ${({ theme }) => theme.Colors.themeOpacity};
    border-top: 0.5rem solid ${({ theme }) => theme.Colors.primary};
    border-radius: 50%;
    translate: -50% -50%;
    animation: ${SpinnerAnimation} 500ms linear infinite;
`;
