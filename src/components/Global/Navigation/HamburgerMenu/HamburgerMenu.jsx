// Utils
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { User, Sunrise } from "react-feather";

// Components
import {
    Wrapper,
    Head,
    ThemeToggleWrapper,
    ThemeToggleButton,
    Navigation,
    NavItem,
    StyledLink,
} from "./hamburgerMenu.styled";
import { ButtonPrimary } from "../../Button/Button";

export default function HamburgerMenu({ hamburgerVisible }) {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    // Logout function.
    const handleLogout = () =>
        logout({ logoutParams: { returnTo: window.location.origin } });

    return (
        <Wrapper $hamburgerVisible={hamburgerVisible}>
            <Head>
                <ThemeToggleWrapper>
                    <ThemeToggleButton>
                        <Sunrise />
                    </ThemeToggleButton>
                </ThemeToggleWrapper>

                <ButtonPrimary text="Sign In" svg={<User />} />
            </Head>
            <Navigation>
                <NavItem>
                    <StyledLink to="/account">Account</StyledLink>
                </NavItem>
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
