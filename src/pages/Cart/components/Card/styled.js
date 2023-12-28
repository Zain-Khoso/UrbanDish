// Utils
import styled from "styled-components";

// Styles
export const StyledCard = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 5rem;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 0.5rem;
    border-radius: 0.5rem;
`;

export const Content = styled("div")`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    height: 100%;
`;

export const ImageWrapper = styled("div")`
    height: 100%;
    aspect-ratio: 16/9;
    border-radius: 0.3rem;
`;

export const Details = styled("div")`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    height: 100%;
`;

export const Bullet = styled("span")`
    width: fit-content;
    text-align: left;
    line-height: 1;
`;

export const Checkbox = styled("button")`
    width: 1.5rem;
    aspect-ratio: 1/1;

    & svg {
        stroke: ${({ theme, $selected }) =>
            $selected ? theme.Colors.primary : theme.Colors.primaryOpacity};
    }
`;
