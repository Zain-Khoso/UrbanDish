// Utils
import { keyframes } from "styled-components";

// Stlyes
export const SpinnerAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Dot1Animation = keyframes`
    0%, 75%, 100% {
        scale: 1;
    }
    25% {
        scale: 1.5;
    }
    50% {
        scale: 0.67;
    }
`;

export const Dot2Animation = keyframes`
    0%, 25%, 100% {
      scale: 1;
    }
    50% {
      scale: 1.5;
    }
    75% {
      scale: 0.67;
    }
`;

export const Dot3Animation = keyframes`
    0%, 25%, 50% {
      scale: 1;
    }
    75% {
      scale: 1.5;
    }
    100% {
      scale: 0.67;
    }
`;
