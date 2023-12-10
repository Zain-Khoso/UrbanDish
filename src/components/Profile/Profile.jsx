// Utils
import { useAuth0 } from "@auth0/auth0-react";

// Assets
import styles from "./styles/profile.module.css";

// Components
import Navbar from "../Global/Navbar";
import UnAuthenticated from "../Global/UnAuthenticated";
import Accordion from "../Global/Accordion";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const format = function (text) {
        const fomatedText = text
            .split("_")
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(" ");

        return fomatedText;
    };

    const getFormatedUser = function () {
        return Object.keys(user)
            .map(function (item) {
                if (["picture", "updated_at", "sub"].includes(item)) return;
                if (typeof user[item] !== "string") return;

                const formatedItem = format(item);
                const returnValue = [formatedItem, user[item]];
                return returnValue;
            })
            .filter((item) => item !== undefined);
    };

    if (!isAuthenticated) return <UnAuthenticated />;

    return (
        <>
            <Navbar />

            {isLoading ? (
                <div className={`${styles.loading_text}`}>Loading...</div>
            ) : (
                <section className={styles.container}>
                    <div className={styles.heading}>
                        <span>Profile</span>
                    </div>

                    <div className={styles.profile_wrapper}>
                        <div className={styles.profile_head}>
                            <div className={styles.pfp_wrapper}>
                                <img src={user.picture} alt="User Profile" />
                            </div>
                            <h2 className={styles.user_name}>
                                {user.nickname}
                            </h2>
                        </div>
                        <div className={styles.profile_body}>
                            {user &&
                                getFormatedUser().map((item, index) => (
                                    <Accordion
                                        key={index}
                                        type="dark"
                                        visibleText={item[0]}
                                        hiddenText={item[1]}
                                    />
                                ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
