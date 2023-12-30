// Utils
import { useRef, useState, useEffect } from "react";
import useStaticData from "../../hooks/useStaticData";

// Component
import { ServiceCard, ServiceImgWrapper, ServiceText } from "./styled";
import { CardsWrapper as ServicesWrapper } from "../components.styled";
import LazyImage from "../../../../components/LazyImage";

export default function Services() {
    const isMounted = useRef(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const getServices = function () {
            const { services: data } = useStaticData();
            setServices(data);
        };

        isMounted.current && getServices();

        return () => (isMounted.current = false);
    }, []);

    return (
        <ServicesWrapper>
            {services.map((item) => (
                <ServiceCard
                    key={item.id}
                    whileInView={{ opacity: 1, translateY: -70 }}
                    viewport={{ once: true }}>
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
