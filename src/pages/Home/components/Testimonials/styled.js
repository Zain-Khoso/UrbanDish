// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import { CardsWrapper } from "../components.styled";

// Styles
export const TestimonialWrapper = styled(CardsWrapper)`
    gap: 3rem;
    margin-top: 2rem;
    overflow: visible;
`;

export const Testimonial = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 300px;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 1rem;
    padding-top: 3rem;
    border-radius: 0.5rem;
    overflow: visible;
    opacity: 0;
    translate: 0 70px;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
        }
    }
`;
