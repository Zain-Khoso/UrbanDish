// Utils
import PropTypes from "prop-types";

// Components
import { StyledButtonPrimary, StyledButtonRedOutline } from "./button.styled";

export function ButtonPrimary({ text, svg, handleClick }) {
    return (
        <StyledButtonPrimary onClick={handleClick}>
            <span>{text}</span>
            <div className="svg-wrapper">{svg}</div>
        </StyledButtonPrimary>
    );
}

ButtonPrimary.defaultProps = {
    text: "",
    svg: "",
    handleClick: () => {},
};

ButtonPrimary.propTypes = {
    text: PropTypes.string,
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    handleClick: PropTypes.func,
};

export function ButtonRedOutline({ text, svg, handleClick }) {
    return (
        <StyledButtonRedOutline onClick={handleClick}>
            <span>{text}</span>
            <div className="svg-wrapper">{svg}</div>
        </StyledButtonRedOutline>
    );
}

ButtonRedOutline.defaultProps = {
    text: "",
    svg: "",
    handleClick: () => {},
};

ButtonRedOutline.propTypes = {
    text: PropTypes.string,
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    handleClick: PropTypes.func,
};
