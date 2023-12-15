// Utils
import styled, { keyframes } from "styled-components";

// Styles
const AnimationLoader = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

`;

export const PageLoader = styled("div")`
    position: fixed;
    inset: 0;
    top: 50%;
    left: 50%;

    width: 20%;
    aspect-ratio: 1/1;
    border: 0.5rem solid ${({ theme }) => theme.Colors.darkOpacity};
    border-top: 0.5rem solid ${({ theme }) => theme.Colors.primary};
    border-radius: 50%;
    translate: -50% -50%;
    animation: ${AnimationLoader} 2s linear infinite;
`;
