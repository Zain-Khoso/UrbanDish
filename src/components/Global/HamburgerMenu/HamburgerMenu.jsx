// Assets
import styles from "./hamburgerMenu.module.css";
import { User } from "react-feather";

// Components
import { ButtonPrimaryOutline } from "../Buttons/Buttons";

export default function HamburgerMenu({ hamburgerVisible }) {
    return (
        <div
            className={`${styles.hamburger_menu} ${
                hamburgerVisible && styles.open
            }`}>
            <div className={styles.btn_wrapper}>
                <ButtonPrimaryOutline
                    text="LOGIN"
                    svg={<User />}
                    colorFill={true}
                    colorStroke={true}
                />
            </div>

            <ul className={styles.navigation}>
                <li>
                    <a href="#" className={styles.link}>
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        Recipies
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        Ingrediants
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        Stores
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );
}
