// Utils
import { lazy, Suspense } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X, Compass } from "react-feather";

// Components
import DataLoader from "../../../../components/Loaders/DataLoader";

import { StyledMain, Section, SectionTitle, CTA, TextPrimary } from "./styled";
const SocialBar = lazy(() => import("../../../../components/SocialsBar"));
const Services = lazy(() => import("../Services"));
const Testimonials = lazy(() => import("../Testimonials"));
import { ButtonPrimary } from "../../../../components/Button";

export default function Main() {
    const SocialData = useRef([
        { link: "https://facebook.com/ZAIN1KHOSO", svg: <Facebook /> },
        { link: "https://instagram.com/sphere_of_zain/", svg: <Instagram /> },
        { link: "https://linkedin.com/in/zain-khoso", svg: <Linkedin /> },
        { link: "https://twitter.com/SphereOfZain", svg: <X /> },
    ]);

    return (
        <StyledMain>
            <Suspense fallback={<DataLoader />}>
                <SocialBar
                    title="you can find us on"
                    links={SocialData.current}
                />

                <Section>
                    <SectionTitle
                        whileInView={{ opacity: 1, translateY: -70 }}
                        viewport={{ once: true }}>
                        why choose us.
                    </SectionTitle>
                    <Services />
                </Section>

                <CTA
                    whileInView={{ opacity: 1, translateY: -70 }}
                    viewport={{ once: true }}>
                    <p>
                        Try out our rich taste and flavor&nbsp;
                        <TextPrimary>Today.</TextPrimary>
                    </p>
                    <Link to="/menu">
                        <ButtonPrimary
                            text="Explore Our Menu"
                            svg={<Compass />}
                        />
                    </Link>
                </CTA>

                <Section>
                    <SectionTitle
                        whileInView={{ opacity: 1, translateY: -70 }}
                        viewport={{ once: true }}>
                        thoughts about us.
                    </SectionTitle>
                    <Testimonials />
                </Section>
            </Suspense>
        </StyledMain>
    );
}
