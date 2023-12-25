// Utils
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    useDocTitle("Home");

    return (
        <>
            <Header />

            <Main />

            <Footer />
        </>
    );
}
