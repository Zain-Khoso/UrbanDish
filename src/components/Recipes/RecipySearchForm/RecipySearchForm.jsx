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

    const searchForm = useRef(null);
    const staticSearchQuery = useRef("");

    useEffect(() => {
        const dataFetcher = async function () {
            const res = await fetch(searchURL);
            const data = await res.json();
            setRecipes(data["results"]);

            // ** DEVELOPMENT ONLY **
            // const res = await fetch("/src/assets/foodData.json");
            // const data = await res.json();
            // setRecipes(data["results"].slice(0, 5));
        };

        if (staticSearchQuery !== "") dataFetcher();
    }, [searchURL]);

    const runSearch = function (event) {
        event.preventDefault();
        if (searchQuery === staticSearchQuery.current) return;

        staticSearchQuery.current = searchQuery;

        setSearchURL(
            `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=5&apiKey=${
                import.meta.env.VITE_SPOONACULAR_API_KEY
            }`
        );
    };

    return (
        <form
            ref={searchForm}
            onSubmit={runSearch}
            className={styles.search_bar}>
            <input
                type="text"
                placeholder="Lunch..."
                name="query"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className={styles.query}
            />
            <Button type="primary_darker" disabled={true} svg={<Filter />} />
            <Button type="primary_darker" svg={<Search />} />
        </form>
    );
}
