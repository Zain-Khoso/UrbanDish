// Utils
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export function useSpoonacular(URL) {
    const isMounted = useRef(true);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async function () {
            setIsLoading(true);

            try {
                const response = await axios.get(URL);
                setData(response.data["recipes"] || response.data);
                setError(null);
            } catch (error) {
                setData(null);
                setError(error.statusText);
            } finally {
                setIsLoading(false);
            }
        };

        const cleanUp = () => (isMounted.current = false);

        isMounted.current && fetchData();

        return cleanUp;
    }, []);

    return { isLoading, error, data };
}
