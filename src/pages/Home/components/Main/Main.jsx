// Utils
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X, Compass } from "react-feather";

// Components
import {
    StyledMain,
    Section,
    SectionTitle,
    CTA,
    TextPrimary,
} from "./main.styled";
import SocialBar from "../../../../components/SocialsBar/SocialBar";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import { ButtonPrimary } from "../../../../components/Button/Button";

export default function Main() {
    const SocialData = useRef([
        { link: "https://facebook.com/ZAIN1KHOSO", svg: <Facebook /> },
        { link: "https://instagram.com/sphere_of_zain/", svg: <Instagram /> },
        { link: "https://linkedin.com/in/zain-khoso", svg: <Linkedin /> },
        { link: "https://twitter.com/SphereOfZain", svg: <X /> },
    ]);

    return (
        <StyledMain>
            <SocialBar title="you can find us on" links={SocialData.current} />

            <Section>
                <SectionTitle>why choose us.</SectionTitle>
                <Services />
            </Section>

            <CTA>
                <p>
                    Try out our rich taste and flavor&nbsp;
                    <TextPrimary>Today.</TextPrimary>
                </p>
                <Link to="/menu">
                    <ButtonPrimary text="Explore Our Menu" svg={<Compass />} />
                </Link>
            </CTA>

            <Section>
                <SectionTitle>thoughts about us.</SectionTitle>
                <Testimonials />
            </Section>
        </StyledMain>
    );
}
