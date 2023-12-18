// Utils
import { useRef, useEffect } from "react";

export default function LazyImage({ alt, placeholderSrc, src }) {
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
            style={{ width: "auto", height: "100%", filter: "blur(5px)" }}
            alt={alt}
            src={placeholderSrc}
        />
    );
}
