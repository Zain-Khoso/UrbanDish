// Utils
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { User } from "react-feather";

// Components
import {
    Wrapper,
    Head,
    Navigation,
    NavItem,
    StyledLink,
} from "./hamburgerMenu.styled";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import { ButtonPrimary, ButtonRedOutline } from "../../Button/Button";

export default function HamburgerMenu({ hamburgerVisible }) {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    // Logout function.
    const handleLogout = () =>
        logout({ logoutParams: { returnTo: window.location.origin } });

    return (
        <Wrapper $hamburgerVisible={hamburgerVisible}>
            <Head>
                <ThemeToggleButton />

                {isAuthenticated ? (
                    <ButtonRedOutline
                        text="Sign Out"
                        svg={<User />}
                        handleClick={handleLogout}
                    />
                ) : (
                    <ButtonPrimary
                        text="Sign In"
                        svg={<User />}
                        handleClick={loginWithRedirect}
                    />
                )}
            </Head>
            <Navigation>
                <NavItem>
                    <StyledLink to="/profile">Prolife</StyledLink>
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
