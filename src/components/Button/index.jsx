// Utils
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import {
    StyledButtonPrimary,
    PrimaryBtnText,
    PrimaryBtnIconWrapper,
    StyledButtonRedOutline,
    RedOutlineBtnText,
    RedOutlineBtnIconWrapper,
} from "./styled";

export const ButtonPrimary = memo(function ({ text, svg, handleClick }) {
    return (
        <StyledButtonPrimary onClick={handleClick}>
            {text && <PrimaryBtnText>{text}</PrimaryBtnText>}
            {svg && <PrimaryBtnIconWrapper>{svg}</PrimaryBtnIconWrapper>}
        </StyledButtonPrimary>
    );
});

export const ButtonRedOutline = memo(function ({ text, svg, handleClick }) {
    return (
        <StyledButtonRedOutline onClick={handleClick}>
            {text && <RedOutlineBtnText>{text}</RedOutlineBtnText>}
            {svg && <RedOutlineBtnIconWrapper>{svg}</RedOutlineBtnIconWrapper>}
        </StyledButtonRedOutline>
    );
});

const defaultProps = {
    text: "",
    svg: "",
    handleClick: () => {},
};

const propTypes = {
    text: PropTypes.string,
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    handleClick: PropTypes.func,
};

ButtonPrimary.defaultProps = defaultProps;
ButtonPrimary.propTypes = propTypes;
ButtonRedOutline.defaultProps = defaultProps;
ButtonRedOutline.propTypes = propTypes;
