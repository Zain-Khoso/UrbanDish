// Utils
import styled from "styled-components";

// Styles
export default styled("div")`
    position: fixed;
    inset: 0;

    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    z-index: 10;
`;
