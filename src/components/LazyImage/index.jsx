// Utils
import { useRef } from "react";
import PropTypes from "prop-types";
import useLazyImage from "../../hooks/useLazyImage";

export default function LazyImage({ alt, placeholderSrc, src, sizePriority }) {
    const imageElem = useRef(null);

    useLazyImage(imageElem, src);

    return (
        <img
            ref={imageElem}
            style={{
                width: `${sizePriority === "w" ? "100%" : "auto"}`,
                height: `${sizePriority === "h" ? "100%" : "auto"}`,
                filter: "blur(5px)",
            }}
            alt={alt}
            src={placeholderSrc}
        />
    );
}

LazyImage.defaultProps = { sizePriority: "w" };

LazyImage.propTypes = {
    alt: PropTypes.string,
    placeholderSrc: PropTypes.any,
    src: PropTypes.any,
    sizePriority: PropTypes.string,
};
