// Utils
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X, Compass } from "react-feather";

// Components
import {
    Section,
    SectionTitle,
    SocialsWrapper,
    SVGLink,
    CTA,
    TextPrimary,
} from "./main.styled";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import { ButtonPrimary } from "../../Global/Button/Button";

export default function Main({ className }) {
    return (
        <main className={className}>
            <Section>
                <SectionTitle>you can find us on.</SectionTitle>

                <SocialsWrapper>
                    <SVGLink
                        to="https://facebook.com/ZAIN1KHOSO"
                        target="_black">
                        <Facebook />
                    </SVGLink>

                    <SVGLink
                        to="https://instagram.com/sphere_of_zain/"
                        target="_black">
                        <Instagram />
                    </SVGLink>

                    <SVGLink
                        to="https://linkedin.com/in/zain-khoso"
                        target="_black">
                        <Linkedin />
                    </SVGLink>

                    <SVGLink
                        to="https://twitter.com/SphereOfZain"
                        target="_black">
                        <X />
                    </SVGLink>
                </SocialsWrapper>
            </Section>

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
        </main>
    );
}
