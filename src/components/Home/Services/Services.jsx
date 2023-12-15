// Utils
import { useRef } from "react";

// Assets
import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.jpg";
import service3 from "../../../assets/service3.jpg";
import service4 from "../../../assets/service4.jpg";

// Component
import { ServiceCard, ServiceImgWrapper, ServiceText } from "./services.styled";
import { CardsWrapper as ServicesWrapper } from "../Local.styled";

export default function Services() {
    const servicesData = useRef([
        {
            id: 1,
            image: service1,
            text: "Each dish epitomizes culinary perfection at its finest.",
        },
        {
            id: 2,
            image: service2,
            text: "Perfection in every dish we create.",
        },
        {
            id: 3,
            image: service3,
            text: "Heavenly delights in every bite.",
        },
        {
            id: 4,
            image: service4,
            text: "1.5 billion spicy & sweet dishes served with pride.",
        },
    ]);

    return (
        <ServicesWrapper>
            {servicesData.current.map((item) => (
                <ServiceCard key={item.id}>
                    <ServiceImgWrapper>
                        <img src={item.image} alt={`Service ${item.id}`} />
                    </ServiceImgWrapper>
                    <ServiceText>{item.text}</ServiceText>
                </ServiceCard>
            ))}
        </ServicesWrapper>
    );
}
