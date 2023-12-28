// Utils
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import { ErrorPage, AuthError } from "../../components/Errors";
import { Spinner } from "../../components/Loaders/spinner.styled";
import RestoreScroll from "../../components/RestoreScroll";

export default function Menu() {
    useDocTitle("Menu");

    const [user, loading, error] = useAuthState(auth);

    if (loading) return <Spinner />;

    if (error) return <ErrorPage />;

    return user ? (
        <>
            <RestoreScroll />

            <Header />

            <Main />
        </>
    ) : (
        <AuthError />
    );
}
