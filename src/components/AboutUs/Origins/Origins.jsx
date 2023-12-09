// Utils
import { useRef } from "react";

// Assets
import styles from "./origins.module.css";
import originImg from "../../../assets/origin.jpg";

// Components
import Accordion from "../../Global/Accordion/Accordion";

export default function Origins() {
    const originData = useRef([
        [
            "The Birth of Flavorful Dreams",
            "Established on July 9th, 1969, in the vibrant city of Sukkur, Belly Brains began as a humble eatery with a passion for crafting culinary delights. Founded by the visionary chef, Marco Savori, the restaurant quickly gained fame for its innovative approach to food and commitment to excellence.",
        ],
        [
            "Crafting Legacy at Belly Brains",
            "From the outset, Belly Brains aimed to transcend traditional dining experiences, blending flavors that delighted the palate and sparked culinary curiosity. Chef Marco's dedication to sourcing the finest ingredients and pushing the boundaries of taste set the restaurant apart, creating a haven for food enthusiasts.",
        ],
        [
            "Chef Marco's Vision Lives On",
            "Over the decades, Belly Brains has evolved into a culinary institution, a place where every dish tells a story and every sip of coffee is a journey. The restaurant's commitment to creativity, community, and the celebration of life's simple pleasures has made it a cherished destination for generations.",
        ],
        [
            "Your Story with Belly Brains",
            "Today, as we continue Chef Marco's legacy, Belly Brains invites you to join us in savoring the extraordinary. Whether you're a loyal patron from the early days or a newcomer exploring our menu for the first time, we welcome you to experience the magic that began on that summer day in Sukkur over five decades ago. Cheers to the timeless flavors and the journey ahead!",
        ],
    ]);

    return (
        <section className={styles.origin}>
            <div className={styles.img_wrapper}>
                <img src={originImg} alt="A photo that triggers memories." />
            </div>

            <div className={styles.body}>
                <h2 className={styles.heading}>Our Origins</h2>
                {originData.current.map(([title, context], index) => (
                    <Accordion
                        key={index}
                        open={index === 0 ? true : false}
                        type="primary_darker"
                        visibleText={title}
                        hiddenText={context}
                    />
                ))}
            </div>
        </section>
    );
}
