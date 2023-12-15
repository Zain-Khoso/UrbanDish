// Utils
import styled from "styled-components";

// Components
import HamburgerButton from "./HamburgerButton";

// Styled
export const StyledHambugerButton = styled(HamburgerButton)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 2rem;
    height: 2rem;

    & .line {
        width: 90%;
        height: 15%;
        background-color: ${({ theme }) => theme.Colors.primary};
        border-radius: 0.2rem;
    }
`;
