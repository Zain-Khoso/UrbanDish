// Utils
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "react-feather";

// Assets
import styles from "./unAuthenticated.module.css";

// Components
import { ButtonPrimaryOutline } from "../../Buttons/Buttons";

export default function UnAuthenticated() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className={styles.authentication_error}>
            <h1 className={`${styles.expression}`}>Oops</h1>
            <p className={styles.context}>
                You must be loged in to visit this page.
                <ButtonPrimaryOutline
                    text="LOGIN"
                    svg={<User />}
                    colorFill={true}
                    colorStroke={true}
                    onClick={loginWithRedirect}
                />
            </p>
        </div>
    );
}
