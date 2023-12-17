// Utils
import { useEffect, useRef } from "react";

export default function useDocTitle(title) {
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted.current) document.title = title;

        const cleanUp = () => (isMounted.current = false);

        return cleanUp;
    }, []);
}
