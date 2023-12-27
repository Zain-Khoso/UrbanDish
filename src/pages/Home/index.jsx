// Utils
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "../../components/Footer";

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
