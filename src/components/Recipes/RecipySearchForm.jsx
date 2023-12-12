// Utils
import { useState, useRef, useContext } from "react";
import { Filter, Search } from "react-feather";

// Assets
import styles from "./styles/recipySearchForm.module.css";

// Contexts & Components
import { RecipesContext } from "../../Contexts";
import Button from "../Global/Button";

export default function RecipySearchForm() {
    const searchRecipes = useContext(RecipesContext);

    const [searchQuery, setSearchQuery] = useState("");

    const staticSearchQuery = useRef(null);
    const searchInput = useRef(null);

    const runSearch = function (event) {
        event.preventDefault();
        searchInput.current.focus();

        if (searchQuery === staticSearchQuery.current || searchQuery === "")
            return;

        staticSearchQuery.current = searchQuery;

        searchRecipes(
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
