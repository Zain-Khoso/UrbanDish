// Utils
import { useRef, useState, useEffect } from "react";
import useStaticData from "../../hooks/useStaticData";

// Components
import { TestimonialWrapper, Testimonial } from "./styled";
import ClickableImage from "../ClickableImage";

export default function Testimonials() {
    const isMounted = useRef(true);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const getTestimonials = function () {
            const { testimonials: data } = useStaticData();
            setTestimonials(data);
        };

        isMounted.current && getTestimonials();

        return () => (isMounted.current = false);
    }, []);

    return (
        <TestimonialWrapper>
            {testimonials.map((item) => (
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
