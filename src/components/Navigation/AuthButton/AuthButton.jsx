// Utils
import { useContext } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../../../config/firebase";
import { User } from "react-feather";
import AuthMessageContext from "../../../contexts/authMessage";

// Components
import { ButtonPrimary, ButtonRedOutline } from "../../Button/Button";
import DataLoader from "../../Loaders/DataLoader/DataLoader";

export default function AuthButton() {
    // UI States
    const { setNotiMsg, setNotiVisible } = useContext(AuthMessageContext);

    // Data States
    const [user, loading, error] = useAuthState(auth);

    // Functoins
    const handleSignIn = async function () {
        try {
            await signInWithPopup(auth, googleProvider);

            setNotiMsg("Sign In Successful");
            setNotiVisible(true);

            setTimeout(() => {
                setNotiVisible(false);
            }, 3000);
        } catch (err) {
            setNotiMsg("Unable To Sign In");
            setNotiVisible(true);

            setTimeout(() => {
                setNotiVisible(false);
            }, 3000);
        }
    };

    const handleSignOut = async function () {
        try {
            await signOut(auth);

            setNotiMsg("Sign Out Successful");
            setNotiVisible(true);

            setTimeout(() => {
                setNotiVisible(false);
            }, 3000);
        } catch (err) {
            setNotiMsg("Unable To Sign Out");
            setNotiVisible(true);

            setTimeout(() => {
                setNotiVisible(false);
            }, 3000);
        }
    };

    return (
        <>
            {loading || error ? (
                <DataLoader />
            ) : user ? (
                <ButtonRedOutline
                    text="Sign Out"
                    svg={<User />}
                    handleClick={handleSignOut}
                />
            ) : (
                <ButtonPrimary
                    text="Sign In"
                    svg={<User />}
                    handleClick={handleSignIn}
                />
            )}
        </>
    );
}
