// Utils
import styled from "styled-components";

// Styles
export const ServiceCard = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    width: 80%;
    max-width: 300px;
`;

export const ServiceImgWrapper = styled("div")`
    width: 100%;
    aspect-ratio: 16/12;
    border-radius: 0.5rem;

    & img {
        width: auto;
        height: 100%;
    }
`;

export const ServiceText = styled("p")`
    width: 25ch;
`;
