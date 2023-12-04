// Utils
import { Info } from "react-feather";
import { Link } from "react-router-dom";

// Assets
import styles from "./dishCard.module.css";

// Components
import Button from "../../Global/Buttons/Button";

export default function DishCard({ img, types, title, description }) {
    return (
        <div className={styles.card}>
            <div className={styles.img_wrapper}>
                <img src={img} alt="Picture of the dish" />
            </div>
            <div className={styles.context_wrapper}>
                <div className={styles.head}>
                    <h4 className={styles.types}>{types.join(", ")}</h4>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                        __html: description.slice(0, 500) + "...",
                    }}></p>
                <Link to="/">
                    <Button type="primary" text="More on this" svg={<Info />} />
                </Link>
            </div>
        </div>
    );
}
