// Utils
import { useRef, useLayoutEffect } from "react";

export default function useLazyImage(imageElem, orgImage) {
    const isMounted = useRef(true);

    useLayoutEffect(() => {
        if (!isMounted.current) return;

        const observerOptions = {
            root: null,
            rootMargin: "200px",
            threshold: "0",
        };

        const loadOrgImage = function (entries) {
            const [entry] = entries;

            if (!entry.isIntersecting) return;

            entry.target.src = orgImage;

            entry.target.onload = function () {
                entry.target.style.filter = "blur(0px)";

                observer.unobserve(entry.target);
            };
        };

        const observer = new IntersectionObserver(
            loadOrgImage,
            observerOptions
        );

        observer.observe(imageElem.current);

        return () => (isMounted.current = false);
    }, []);

    return;
}
