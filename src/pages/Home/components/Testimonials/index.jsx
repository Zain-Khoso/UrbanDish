// Utils
import { useRef } from "react";

// Assets
import Placeholder1 from "../../assets/testimonials/placeholder1.jpg";
import Placeholder2 from "../../assets/testimonials/placeholder2.jpg";
import Placeholder3 from "../../assets/testimonials/placeholder3.jpg";
import Image1 from "../../assets/testimonials/1.jpg";
import Image2 from "../../assets/testimonials/2.jpg";
import Image3 from "../../assets/testimonials/3.jpg";

// Components
import { TestimonialWrapper, Testimonial } from "./styled";
import ClickableImage from "../ClickableImage";

export default function Testimonials() {
    const testimonials = useRef([
        {
            id: 1,
            image: Image1,
            placeholder: Placeholder1,
            text: "“ Global dining perfection! Every visit to Belly Brains restaurants is a journey of flavors. A culinary passport to delight! “",
        },
        {
            id: 2,
            image: Image2,
            placeholder: Placeholder2,
            text: "“ From Tokyo to NYC, Belly Brains restaurants never disappoint. Each bite is a world tour of taste. Consistently superb worldwide! “",
        },
        {
            id: 3,
            image: Image3,
            placeholder: Placeholder3,
            text: "“ No matter the city, Belly Brains restaurants deliver an international feast. A global culinary adventure—always a treat! “",
        },
    ]);

    return (
        <TestimonialWrapper>
            {testimonials.current.map((item) => (
                <Testimonial key={item.id}>
                    <ClickableImage
                        id={item.id}
                        image={item.image}
                        placeholder={item.placeholder}
                    />
                    <p>{item.text}</p>
                </Testimonial>
            ))}
        </TestimonialWrapper>
    );
}
