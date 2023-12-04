// Utils
import { useAuth0 } from "@auth0/auth0-react";

// Assets
import styles from "./profile.module.css";

// Components
import { Navbar } from "../Global/Navigation/Navbar/Navbar";
import UnAuthenticated from "../Global/Errors/UnAuthenticated/UnAuthenticated";
import Accordion from "../Global/Accordion/Accordion";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (!isAuthenticated) return <UnAuthenticated />;

    return (
        <>
            <Navbar />

            {isLoading ? (
                <div className={`${styles.loading_text}`}>Loading...</div>
            ) : (
                <section className={styles.container}>
                    <h1 className={styles.heading}>
                        <span>Profile</span>
                    </h1>

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
                            <Accordion
                                type="dark"
                                visibleText="Email"
                                hiddenText={
                                    user.email ? user.email : "Not Provided"
                                }
                            />

                            <Accordion
                                type="dark"
                                visibleText="Username"
                                hiddenText={
                                    user.nickname
                                        ? user.nickname
                                        : "Not Provided"
                                }
                            />

                            <Accordion
                                type="dark"
                                visibleText="Name"
                                hiddenText={
                                    user.given_name
                                        ? user.given_name
                                        : "Not Provided"
                                }
                            />

                            <Accordion
                                type="dark"
                                visibleText="Full Name"
                                hiddenText={
                                    user.name ? user.name : "Not Provided"
                                }
                            />

                            <Accordion
                                type="dark"
                                visibleText="Locale"
                                hiddenText={
                                    user.locale ? user.locale : "Not Provided"
                                }
                            />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
