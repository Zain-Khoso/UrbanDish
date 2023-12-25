// Utils
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default function Menu() {
    useDocTitle("Menu");

    return (
        <>
            <Header />

            <Main />
        </>
    );
}
