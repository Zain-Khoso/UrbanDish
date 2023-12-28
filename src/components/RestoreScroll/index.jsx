// Utils
import { useRef, useLayoutEffect } from "react";

export default function index() {
    const isMounted = useRef(true);
    const elem = useRef(null);

    useLayoutEffect(() => {
        isMounted.current && elem.current.scrollIntoView();

        return () => (isMounted.current = false);
    }, []);

    return <div ref={elem}></div>;
}
