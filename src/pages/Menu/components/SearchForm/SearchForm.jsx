// Utils
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    setSearchMode,
    setIsLoading,
    search,
    emptyData,
} from "../../contexts/slice";
import { Filter, X } from "react-feather";

// Components
import { Form, Input, Button } from "./searchForm.styled";

export default function SearchField() {
    // Data Slice Login
    const dispatch = useDispatch();

    // UI States
    const [query, setQuery] = useState("");
    const [debounce, setDebounce] = useState(null);

    // Effect Efficiency
    const isMounted = useRef(true);

    // JSX Elements
    const form = useRef(null);
    const cancelQueryBtn = useRef(null);

    // Function.
    const handleSearchCancel = function (event) {
        event.preventDefault();
        setQuery("");
        dispatch(emptyData());
        cancelQueryBtn.current.style.display = "none";
    };

    // Effects
    useEffect(() => {
        const setLayout = function () {
            cancelQueryBtn.current.style.display = "none";
        };

        isMounted.current && setLayout();

        return () => (isMounted.current = false);
    }, []);

    useEffect(() => {
        const runSearch = function () {
            cancelQueryBtn.current.style.display = "block";

            debounce && clearTimeout(debounce);

            const timeoutID = setTimeout(() => {
                dispatch(setIsLoading());
                dispatch(setSearchMode());
                dispatch(search(query));
            }, 2000);

            setDebounce(timeoutID);
        };

        query !== "" && runSearch();
    }, [query]);

    return (
        <Form ref={form}>
            <Input
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <Button ref={cancelQueryBtn} onClick={handleSearchCancel}>
                <div className="svg-wrapper">
                    <X />
                </div>
            </Button>
        </Form>
    );
}
