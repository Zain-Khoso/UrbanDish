// Assets
import ServicePlaceholder1 from "../assets/services/placeholder1.jpg";
import ServicePlaceholder2 from "../assets/services/placeholder2.jpg";
import ServicePlaceholder3 from "../assets/services/placeholder3.jpg";
import ServicePlaceholder4 from "../assets/services/placeholder4.jpg";
import ServiceImage1 from "../assets/services/1.jpg";
import ServiceImage2 from "../assets/services/2.jpg";
import ServiceImage3 from "../assets/services/3.jpg";
import ServiceImage4 from "../assets/services/4.jpg";
import TestimonialPlaceholder1 from "../assets/testimonials/placeholder1.jpg";
import TestimonialPlaceholder2 from "../assets/testimonials/placeholder2.jpg";
import TestimonialPlaceholder3 from "../assets/testimonials/placeholder3.jpg";
import TestimonialImage1 from "../assets/testimonials/1.jpg";
import TestimonialImage2 from "../assets/testimonials/2.jpg";
import TestimonialImage3 from "../assets/testimonials/3.jpg";

export default function useStaticData() {
    const services = [
        {
            id: 1,
            image: ServiceImage1,
            placeholder: ServicePlaceholder1,
            text: "Each dish epitomizes culinary perfection at its finest.",
        },
        {
            id: 2,
            image: ServiceImage2,
            placeholder: ServicePlaceholder2,
            text: "Perfection in every dish we create.",
        },
        {
            id: 3,
            image: ServiceImage3,
            placeholder: ServicePlaceholder3,
            text: "Heavenly delights in every bite.",
        },
        {
            id: 4,
            image: ServiceImage4,
            placeholder: ServicePlaceholder4,
            text: "1.5 billion spicy & sweet dishes served with pride.",
        },
    ];

    const testimonials = [
        {
            id: 1,
            image: TestimonialImage1,
            placeholder: TestimonialPlaceholder1,
            text: "“ Global dining perfection! Every visit to Belly Brains restaurants is a journey of flavors. A culinary passport to delight! “",
        },
        {
            id: 2,
            image: TestimonialImage2,
            placeholder: TestimonialPlaceholder2,
            text: "“ From Tokyo to NYC, Belly Brains restaurants never disappoint. Each bite is a world tour of taste. Consistently superb worldwide! “",
        },
        {
            id: 3,
            image: TestimonialImage3,
            placeholder: TestimonialPlaceholder3,
            text: "“ No matter the city, Belly Brains restaurants deliver an international feast. A global culinary adventure—always a treat! “",
        },
    ];

    return { services, testimonials };
}
