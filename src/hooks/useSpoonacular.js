// Utils
import { useState, useEffect } from "react";
import axios from "axios";

export function useSpoonacular(URL) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(URL)
            .then((response) => {
                setData(response.data["results"] || response.data);
                setError(null);
            })
            .catch((err) => {
                setError(err.statusText);
                setData(null);
            })
            .finally(() => setIsLoading(false));
    }, [URL]);

    const addMoreData = function () {
        setIsLoading(true);
        axios
            .get(URL)
            .then((response) => {
                setData(
                    data?.concat(response.data["results"] || response.data)
                );
                setError(null);
            })
            .catch((err) => setError(err.statusText))
            .finally(() => setIsLoading(false));
    };

    const fetchNewData = function (newURL) {
        setIsLoading(true);
        axios
            .get(newURL)
            .then((response) => {
                setData(response.data["results"] || response.data);
                setError(null);
            })
            .catch((err) => {
                setError(err.statusText);
                setData(null);
            })
            .finally(() => setIsLoading(false));
    };

    return { data, error, isLoading, addMoreData, fetchNewData };
}
