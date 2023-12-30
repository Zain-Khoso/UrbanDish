// Utils
import { useTheme } from "styled-components";
import useWindowDimension from "../../../../hooks/useWindowDimension";

// Assets
import AboutUsDark from "../../assets/svgs/about-us-dark.svg";
import AboutUsLight from "../../assets/svgs/about-us-light.svg";
import PlaceholderFounder from "../../assets/placeholderFounder.jpg";
import Founder from "../../assets/founder.jpg";

// Components
import {
    StyledHeader,
    PageIntro,
    IntroTitle,
    IntroText,
    CardWrapper,
} from "./styled";
import Navbar from "../../../../components/Navigation/Navbar";
import Card from "../Card";
import Illustration from "../../../../components/Illustration";

export default function Header() {
    const theme = useTheme();
    const { width } = useWindowDimension();

    return (
        <StyledHeader>
            <Navbar />

            <PageIntro
                whileInView={{ opacity: 1, translateY: -70 }}
                viewport={{ once: true }}>
                <IntroTitle>What is Belly Brains?</IntroTitle>

                <Illustration
                    scale={
                        width >= Number(theme.Breakpoints.tablet.slice(0, -2))
                            ? 20
                            : 40
                    }
                    light={AboutUsLight}
                    dark={AboutUsDark}
                    altText="Illustration of the about us page"
                />

                <IntroText>
                    A culinary haven where passion meets plate. Established on
                    July 9th, 1969, in Sukkur, we have been crafting
                    extraordinary dining experiences for over five decades. Join
                    us in savoring the art of flavors and the joy of timeless
                    moments. Your journey into exceptional food and coffee
                    begins here.
                </IntroText>
            </PageIntro>

            <CardWrapper>
                <Card
                    title="Founder"
                    alt="Marco Savoni"
                    placeholderImage={PlaceholderFounder}
                    image={Founder}
                    text="<span>Chef Marco</span>, the visionary behind Belly Brains, devoted his life to culinary excellence. From Sukkur to global kitchens, his passion and expertise shaped our extraordinary menu. Every dish at Belly Brains reflects the legacy of a lifetime dedicated to the art of food."
                    imageSizePriority={"h"}
                />
            </CardWrapper>
        </StyledHeader>
    );
}
