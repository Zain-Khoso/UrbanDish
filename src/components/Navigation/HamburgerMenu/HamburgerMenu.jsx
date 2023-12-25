// Utils
import PropTypes from "prop-types";

// Components
import {
    Wrapper,
    Head,
    Navigation,
    NavItem,
    StyledLink,
} from "./hamburgerMenu.styled";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import AuthButton from "../AuthButton/AuthButton";

export default function HamburgerMenu({ hamburgerVisible }) {
    return (
        <Wrapper $hamburgerVisible={hamburgerVisible}>
            <Head>
                <ThemeToggleButton />
                <AuthButton />
            </Head>
            <Navigation>
                <NavItem>
                    <StyledLink to="/about-us">About Us</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/menu">Menu</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/contact-us">Contact Us</StyledLink>
                </NavItem>
            </Navigation>
        </Wrapper>
    );
}

HamburgerMenu.defaultProps = {
    hamburgerVisible: false,
};

HamburgerMenu.propTypes = {
    hamburgerVisible: PropTypes.bool,
};
