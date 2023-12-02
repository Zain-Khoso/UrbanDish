// Utils
import { User } from "react-feather";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

// Assets
import styles from "./hamburgerMenu.module.css";

// Components
import { ButtonPrimaryOutline, ButtonDangerOutline } from "../Buttons/Buttons";

export default function HamburgerMenu({ hamburgerVisible }) {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    // Logout function.
    const handleLogout = () =>
        logout({ logoutParams: { returnTo: window.location.origin } });

    return (
        <div
            className={`${styles.hamburger_menu} ${
                hamburgerVisible && styles.open
            }`}>
            <div className={styles.menu_header}>
                <div className={`${styles.pfp_container}`}>
                    {isAuthenticated && (
                        <Link to="/profile">
                            <img src={user.picture} alt="Visit Profile" />
                        </Link>
                    )}
                </div>

                {isAuthenticated ? (
                    <ButtonDangerOutline
                        text="LOGOUT"
                        svg={<User />}
                        colorFill={true}
                        colorStroke={true}
                        onClick={handleLogout}
                    />
                ) : (
                    <ButtonPrimaryOutline
                        text="LOGIN"
                        svg={<User />}
                        colorFill={true}
                        colorStroke={true}
                        onClick={loginWithRedirect}
                    />
                )}
            </div>

            <ul className={styles.navigation}>
                <li>
                    <Link to="/" className={styles.link}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.link}>
                        Recipies
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.link}>
                        Ingrediants
                    </Link>
                </li>

                <li>
                    <Link to="/" className={styles.link}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    );
}
