// Utils
import { useRef } from "react";

// Assets
import Placeholder1 from "../../assets/services/placeholder1.jpg";
import Placeholder2 from "../../assets/services/placeholder2.jpg";
import Placeholder3 from "../../assets/services/placeholder3.jpg";
import Placeholder4 from "../../assets/services/placeholder4.jpg";
import Image1 from "../../assets/services/1.jpg";
import Image2 from "../../assets/services/2.jpg";
import Image3 from "../../assets/services/3.jpg";
import Image4 from "../../assets/services/4.jpg";

// Component
import { ServiceCard, ServiceImgWrapper, ServiceText } from "./styled";
import { CardsWrapper as ServicesWrapper } from "../components.styled";
import LazyImage from "../../../../components/LazyImage";

export default function Services() {
    const servicesData = useRef([
        {
            id: 1,
            image: Image1,
            placeholder: Placeholder1,
            text: "Each dish epitomizes culinary perfection at its finest.",
        },
        {
            id: 2,
            image: Image2,
            placeholder: Placeholder2,
            text: "Perfection in every dish we create.",
        },
        {
            id: 3,
            image: Image3,
            placeholder: Placeholder3,
            text: "Heavenly delights in every bite.",
        },
        {
            id: 4,
            image: Image4,
            placeholder: Placeholder4,
            text: "1.5 billion spicy & sweet dishes served with pride.",
        },
    ]);

    return (
        <ServicesWrapper>
            {servicesData.current.map((item) => (
                <ServiceCard key={item.id}>
                    <ServiceImgWrapper>
                        <LazyImage
                            alt={`Service ${item.id}`}
                            placeholderSrc={item.placeholder}
                            src={item.image}
                            sizePriority="h"
                        />
                    </ServiceImgWrapper>
                    <ServiceText>{item.text}</ServiceText>
                </ServiceCard>
            ))}
        </ServicesWrapper>
    );
}
