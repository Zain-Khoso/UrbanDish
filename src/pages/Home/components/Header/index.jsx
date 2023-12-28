// Utils
import { memo } from "react";
import { Link } from "react-router-dom";
import { Compass } from "react-feather";

// Assets
import logo from "../../../../assets/favicon.png";

// Components
import Navbar from "../../../../components/Navigation/Navbar";
import {
    StyledHeader,
    StyledHero,
    HeroImgContainer,
    Slogon,
    SubText,
} from "./styled";
import { ButtonPrimary } from "../../../../components/Button";

export default memo(function Header() {
    return (
        <StyledHeader>
            <Navbar />

            <StyledHero>
                <HeroImgContainer>
                    <img src={logo} alt="Brand Logo" />
                </HeroImgContainer>

                <Slogon>Savor the brew, Delight in the chew.</Slogon>

                <SubText>
                    Indulge in culinary artistry at Belly Brains. Where passion
                    fuels flavor and every bite is a story. Join us for
                    extraordinary dining.
                </SubText>

                <Link to="/menu">
                    <ButtonPrimary text="Explore Our Menu" svg={<Compass />} />
                </Link>
            </StyledHero>
        </StyledHeader>
    );
});
