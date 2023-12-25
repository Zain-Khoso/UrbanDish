// Utils
import styled from "styled-components";

// Styles
export const PersonImgWrapper = styled("div")`
    position: ${({ $inlarge }) => ($inlarge ? "fixed" : "absolute")};
    top: ${({ $inlarge }) => ($inlarge ? "50%" : "0")};
    left: 50%;

    width: ${({ $inlarge }) => ($inlarge ? "40%" : "4rem")};
    aspect-ratio: 1/1;
    border-radius: 50%;
    translate: -50% -50%;
    z-index: ${({ $inlarge }) => $inlarge && 10};
`;
