// Utils
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "../../components/Footer";
import RestoreScroll from "../../components/RestoreScroll";

export default function Home() {
    useDocTitle("Home");

    return (
        <>
            <RestoreScroll />

            <Header />

            <Main />

            <Footer />
        </>
    );
}
