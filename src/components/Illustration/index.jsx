// Utils
import { useContext } from "react";
import PropTypes from "prop-types";
import { ToggleThemeContext } from "../../contexts";

// Assets
import Dark from "../../assets/svgs/404-dark.svg";
import Light from "../../assets/svgs/404-light.svg";

export default function Illustration({ scale, light, dark, altText }) {
    const { isLight } = useContext(ToggleThemeContext);

    return (
        <div style={{ width: `${scale}%` }}>
            <img src={isLight ? light : dark} alt={altText} />
        </div>
    );
}

Illustration.defaultProps = {
    scale: 40,
    light: Light,
    dark: Dark,
    altText: "Illustration of a 404 error",
};

Illustration.propTypes = {
    scale: PropTypes.number,
    light: PropTypes.string,
    dark: PropTypes.string,
    altText: PropTypes.string,
};
