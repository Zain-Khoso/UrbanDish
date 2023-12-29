// Utils
import { memo } from "react";
import { Link } from "react-router-dom";
import { Compass } from "react-feather";
import { useTypewriter } from "react-simple-typewriter";

// Assets
import HeroDark from "../../assets/svgs/hero-dark.svg";
import HeroLight from "../../assets/svgs/hero-light.svg";

// Components
import Navbar from "../../../../components/Navigation/Navbar";
import { StyledHeader, Hero, Slogon, SubText } from "./styled";
import { ButtonPrimary } from "../../../../components/Button";
import Illustration from "../../../../components/Illustration";

export default memo(function Header() {
    const [typewriter] = useTypewriter({
        words: ["Savor the brew, Delight in the chew."],
        loop: 1,
    });

    return (
        <StyledHeader>
            <Navbar />

            <Hero
                animate={{
                    opacity: [null, 1],
                    translateY: [null, -100],
                }}>
                <Illustration
                    scale={80}
                    light={HeroLight}
                    dark={HeroDark}
                    altText="Illustration of two people sitting on a table"
                />

                <Slogon>{typewriter}</Slogon>

                <SubText>
                    Indulge in culinary artistry at Belly Brains. Where passion
                    fuels flavor and every bite is a story. Join us for
                    extraordinary dining.
                </SubText>

                <Link to="/menu">
                    <ButtonPrimary text="Explore Our Menu" svg={<Compass />} />
                </Link>
            </Hero>
        </StyledHeader>
    );
});
