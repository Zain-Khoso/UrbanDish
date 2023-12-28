// Utils
import styled from "styled-components";

// Styles
export const StyledModel = styled("div")`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;

    width: 90%;
    background-color: ${({ theme }) => theme.Themes.Theme};
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 0.3rem
        ${({ theme }) => theme.Colors.contrast.replace(")", ", 0.2)")};
    translate: -50% -50%;
    z-index: 11;
`;

export const CloseButton = styled("button")`
    width: 1.8rem;
    aspect-ratio: 1/1;

    & svg {
        stroke: ${({ theme }) => theme.Colors.red};
    }
`;

export const ImageWrapper = styled("div")`
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 0.5rem;
`;

export const Bullet = styled("span")`
    width: 100%;
    text-align: left;

    & b {
        font-weight: 500;
    }
`;
