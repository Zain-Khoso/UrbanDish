// Utils
import { useState, useRef, useEffect } from "react";
import { Filter, Search } from "react-feather";

// Assets
import styles from "./recipySearchForm.module.css";

// Component
import Button from "../../Global/Buttons/Button";

export default function RecipySearchForm({ setRecipes }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchURL, setSearchURL] = useState("");

    const staticSearchQuery = useRef(null);
    const searchInput = useRef(null);

    useEffect(() => {
        const dataFetcher = async function () {
            const response = await fetch(searchURL);
            const data = await response.json();
            setRecipes(data["results"] || data);
        };

        staticSearchQuery && dataFetcher();
    }, [searchURL]);

    const runSearch = function (event) {
        event.preventDefault();
        searchInput.current.focus();

        if (searchQuery === staticSearchQuery.current) return;

        staticSearchQuery.current = searchQuery;

        setSearchURL(
            (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
                ? `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=5&apiKey=${
                      import.meta.env.VITE_SPOONACULAR_API_KEY
                  }`
                : "http://localhost:3000/recipes?_start=1&_end=6"
        );
    };

    return (
        <form onSubmit={runSearch} className={styles.search_bar}>
            <input
                type="text"
                placeholder="Lunch..."
                name="query"
                ref={searchInput}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className={styles.query}
            />
            <Button type="primary_darker" disabled={true} svg={<Filter />} />
            <Button type="primary_darker" svg={<Search />} />
        </form>
    );
}
