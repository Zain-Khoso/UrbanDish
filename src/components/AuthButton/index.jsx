// Utils
import { useContext, useCallback, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../../config/firebase";
import { User } from "react-feather";
import { NotificationContext } from "../../contexts";

// Components
import { ButtonPrimary, ButtonRedOutline } from "../Button";
import DataLoader from "../Loaders/DataLoader";

export default function AuthButton() {
    // UI States
    const [timmer, setTimmer] = useState(null);
    const { notifDispatch } = useContext(NotificationContext);

    // Data States
    const [user, loading, error] = useAuthState(auth);

    // Functoins
    const handleSignIn = useCallback(async function () {
        try {
            await signInWithPopup(auth, googleProvider);

            notifDispatch({ type: "hide" });

            setTimeout(() => {
                notifDispatch({
                    type: "success",
                    message: "Sign In Successful",
                });

                clearTimeout(timmer);
                const timmerId = setTimeout(() => {
                    notifDispatch({ type: "hide" });
                }, 3000);

                setTimmer(timmerId);
            }, 500);
        } catch (err) {
            notifDispatch({ type: "hide" });

            setTimeout(() => {
                notifDispatch({
                    type: "failure",
                    message: "Unable to Sign In",
                });

                clearTimeout(timmer);
                const timmerId = setTimeout(() => {
                    notifDispatch({ type: "hide" });
                }, 3000);

                setTimmer(timmerId);
            }, 500);
        }
    }, []);

    const handleSignOut = useCallback(async function () {
        try {
            await signOut(auth);

            notifDispatch({ type: "success", message: "Sign Out Successful" });

            setTimeout(() => {
                notifDispatch({ type: "hide" });
            }, 3000);
        } catch (err) {
            notifDispatch({ type: "failure", message: "Unable to Sign Out" });

            setTimeout(() => {
                notifDispatch({ type: "hide" });
            }, 3000);
        }
    }, []);

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
