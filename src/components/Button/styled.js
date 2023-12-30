// Utils
import styled from "styled-components";

// Styles
export const Button = styled("button")`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem 1.5rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;
`;

export const BtnText = styled("span")`
    font-weight: 600;
`;

export const BtnIconWrapper = styled("div")`
    width: 1.2rem;
    aspect-ratio: 1/1;
`;

export const StyledButtonPrimary = styled(Button)`
    background-color: ${({ theme }) => theme.Colors.primary};

    &:hover,
    &:focus {
        cursor: pointer;
        box-shadow: 0 0 0.3rem ${({ theme }) => theme.Colors.primaryOpacity};
    }
`;

export const PrimaryBtnText = styled(BtnText)`
    color: ${({ theme }) => theme.Colors.theme};
`;

export const PrimaryBtnIconWrapper = styled(BtnIconWrapper)`
    & svg {
        stroke: ${({ theme }) => theme.Colors.theme};
    }
`;

export const StyledButtonRedOutline = styled(Button)`
    border-color: ${({ theme }) => theme.Colors.red};

    &:hover,
    &:focus {
        cursor: pointer;
        box-shadow: 0 0 0.3rem ${({ theme }) => theme.Colors.red};
    }
`;

export const RedOutlineBtnText = styled(BtnText)`
    color: ${({ theme }) => theme.Colors.red};
`;

export const RedOutlineBtnIconWrapper = styled(BtnIconWrapper)`
    & svg {
        stroke: ${({ theme }) => theme.Colors.red};
    }
`;
