// Utils
// import { useState } from "react";

// Assets
import logo from "../../../../assets/favicon.png";

// Components
import { Wrapper, StyledNavbar, StyledLink } from "./navbar.styled";
import { StyledHambugerButton } from "../HamburgerButton/hamburgerButton.styled";
// import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
    // const [hamburgerVisible, setHamburgerVisible] = useState(false);

    return (
        <Wrapper>
            <StyledNavbar>
                <StyledLink to="/">
                    <img src={logo} alt="Brand Logo" />
                </StyledLink>

                <StyledHambugerButton />
            </StyledNavbar>
        </Wrapper>
    );
}
