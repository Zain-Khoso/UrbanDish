// Utils
import PropTypes from "prop-types";

// Components
import { StyledButtonPrimary } from "./button.styled";

export function ButtonPrimary({ text, svg }) {
    return (
        <StyledButtonPrimary>
            <span>{text}</span>
            <div className="svg-wrapper">{svg}</div>
        </StyledButtonPrimary>
    );
}

ButtonPrimary.defaultProps = {
    text: "",
    svg: "",
};

ButtonPrimary.propTypes = {
    text: PropTypes.string,
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
