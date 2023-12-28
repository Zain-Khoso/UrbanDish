// Utils
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Navbar from "../../components/Navigation/Navbar";
import Main from "./components/Main";

export default function ContactUs() {
    useDocTitle("Contact Us");

    return (
        <>
            <Navbar />

            <Main />
        </>
    );
}
