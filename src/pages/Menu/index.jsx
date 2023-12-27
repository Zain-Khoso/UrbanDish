// Utils
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Header from "./components/Header";
import Main from "./components/Main";

export default function Menu() {
    useDocTitle("Menu");

    return (
        <>
            <Header />

            <Main />
        </>
    );
}
