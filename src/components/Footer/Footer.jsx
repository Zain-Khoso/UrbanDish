// Utils
import { Facebook, Instagram, Linkedin, X } from "react-feather";

// Assets
import logo from "../../assets/favicon.png";

// Components
import {
    StyledFooter,
    Branding,
    LogoWrapper,
    BrandName,
    SocialsWrapper,
    SVGLink,
} from "./footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Branding>
                <LogoWrapper to="/">
                    <img src={logo} alt="Brand Logo" />
                </LogoWrapper>
                <BrandName>Belly Brains</BrandName>
            </Branding>
            <SocialsWrapper>
                <SVGLink to="https://facebook.com/ZAIN1KHOSO" target="_black">
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

                <SVGLink to="https://twitter.com/SphereOfZain" target="_black">
                    <X />
                </SVGLink>
            </SocialsWrapper>
        </StyledFooter>
    );
}
