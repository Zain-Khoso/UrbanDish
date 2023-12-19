// Utils
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function LazyImage({ alt, placeholderSrc, src, sizePriority }) {
    const isMounted = useRef(true);
    const imageElem = useRef(null);

    useEffect(() => {
        if (!isMounted.current) return;

        const observerOptions = {
            root: null,
            rootMargin: "200px",
            threshold: "0",
        };

        const loadOrgImage = function (entries) {
            const [entry] = entries;

            if (!entry.isIntersecting) return;

            entry.target.src = src;

            entry.target.onload = function () {
                entry.target.style.filter = "blur(0px)";

                observer.unobserve(entry.target);
            };
        };

        const observer = new IntersectionObserver(
            loadOrgImage,
            observerOptions
        );

        const cleanUp = () => (isMounted.current = false);

        observer.observe(imageElem.current);

        return cleanUp;
    }, []);

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
