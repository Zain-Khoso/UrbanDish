// Utils
import PropTypes from "prop-types";
import { useTheme } from "styled-components";

// Components
import { Wrapper, Head, Navigation, NavItem, StyledLink } from "./styled";
import ThemeToggleButton from "../ThemeToggleButton";
import AuthButton from "../../AuthButton";

export default function HamburgerMenu({ hamburgerVisible }) {
    const theme = useTheme();

    return (
        <Wrapper
            $hamburgerVisible={hamburgerVisible}
            animate={{
                top: hamburgerVisible ? theme.Heights.navbarHeight : "-100vh",
            }}>
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
                    <StyledLink to="/cart">Cart</StyledLink>
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
