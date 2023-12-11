// Utils
import { useState, useEffect } from "react";
import axios from "axios";

export function useCoffee() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("https://coffee.alexflipnote.dev/random", {
                responseType: "blob",
            })
            .then((response) => {
                setData(new File(response.data, "coffee_img.jpg"));
                setError(null);
            })
            .catch((err) => {
                setError(err.statusText);
                setData(null);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return { data, error, isLoading };
}
