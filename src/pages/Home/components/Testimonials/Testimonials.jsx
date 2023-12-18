// Utils
import { useRef } from "react";

// Assets
import testimonial1 from "../../assets/testimonials/testimonial1.jpg";
import testimonial2 from "../../assets/testimonials/testimonial2.jpg";
import testimonial3 from "../../assets/testimonials/testimonial3.jpg";

// Components
import { TestimonialWrapper, Testimonial } from "./testimonials.styled";
import ClickableImage from "../ClickableImage/ClickableImage";

export default function Testimonials() {
    const testimonials = useRef([
        {
            id: 1,
            image: testimonial1,
            text: "“ Global dining perfection! Every visit to Belly Brains restaurants is a journey of flavors. A culinary passport to delight! “",
        },
        {
            id: 2,
            image: testimonial2,
            text: "“ From Tokyo to NYC, Belly Brains restaurants never disappoint. Each bite is a world tour of taste. Consistently superb worldwide! “",
        },
        {
            id: 3,
            image: testimonial3,
            text: "“ No matter the city, Belly Brains restaurants deliver an international feast. A global culinary adventure—always a treat! “",
        },
    ]);

    return (
        <TestimonialWrapper>
            {testimonials.current.map((item) => (
                <Testimonial key={item.id}>
                    <ClickableImage
                        id={item.id}
                        image={item.image}></ClickableImage>
                    <p>{item.text}</p>
                </Testimonial>
            ))}
        </TestimonialWrapper>
    );
}
