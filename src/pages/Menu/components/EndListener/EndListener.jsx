// Utils
import { useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchMenu, setIsLoading } from "../../contexts/slice";

export default function EndListener() {
    const endElem = useRef(null);
    const isMounted = useRef(true);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        const fetchData = function () {
            const observerOptions = {
                root: null,
                rootMargin: "200px",
                threshold: "0",
            };

            const loadData = async function (entries) {
                const [entry] = entries;

                if (!entry.isIntersecting) return;

                observer.unobserve(entry.target);

                await (async () => {
                    dispatch(setIsLoading());
                    dispatch(fetchMenu());
                })();

                observer.observe(entry.target);
            };

            const observer = new IntersectionObserver(
                loadData,
                observerOptions
            );

            observer.observe(endElem.current);
        };

        isMounted.current && fetchData();

        return () => (isMounted.current = false);
    }, []);

    return <div ref={endElem}></div>;
}
