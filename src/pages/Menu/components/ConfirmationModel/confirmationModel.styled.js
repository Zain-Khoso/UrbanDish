// Utils
import styled from "styled-components";

// Styles
export const Model = styled("div")`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    width: 300px;
    background-color: ${({ theme }) => theme.Themes.Theme};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.2rem ${({ theme }) => theme.Colors.contrastOpacity};
    translate: -50% -50%;
    z-index: 11;
`;
