// Utils
import styled from "styled-components";

// Components
import { CardsWrapper } from "../Local.styled";

// Styles
export const TestimonialWrapper = styled(CardsWrapper)`
    gap: 3rem;
    margin-top: 2rem;
    overflow: visible;
`;

export const Testimonial = styled("div")`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    max-width: 300px;
    background-color: ${({ theme }) => theme.Colors.darkOpacity};
    padding: 1rem;
    padding-top: 3rem;
    border-radius: 0.5rem;
    overflow: visible;
`;
