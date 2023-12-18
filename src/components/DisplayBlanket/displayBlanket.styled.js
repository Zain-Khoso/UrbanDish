// Utils
import styled from "styled-components";

// Styles
export const DisplayBlanket = styled("div")`
    position: fixed;
    inset: 0;

    background-color: ${({ theme }) => theme.Colors.darkOpacity};
    z-index: 10;
`;
