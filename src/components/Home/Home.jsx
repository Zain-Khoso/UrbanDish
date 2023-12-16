// Utils
import useDocTitle from "../../hooks/useDocTitle";

// Components
import { StyledHeader } from "./Header/header.styled";
import { StyledMain } from "./Main/main.styled";
import Footer from "../Global/Footer/Footer";

export default function Home() {
    useDocTitle("Home");

    return (
        <>
            <StyledHeader />

            <StyledMain />

            <Footer />
        </>
    );
}
