// Utils
import { useState } from "react";

// Assets
import logo from "../../../assets/favicon.png";

// Contexts & Components
import { Wrapper, StyledNavbar, StyledLink } from "./navbar.styled";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { DisplayBlanket } from "../../DisplayBlanket/displayBlanket.styled";

export default function Navbar() {
    const [hamburgerVisible, setHamburgerVisible] = useState(false);

    return (
        <>
            <Wrapper $hamburgerVisible={hamburgerVisible}>
                <StyledNavbar $hamburgerVisible={hamburgerVisible}>
                    <StyledLink to="/">
                        <img src={logo} alt="Brand Logo" />
                    </StyledLink>

                    <HamburgerButton
                        hamburgerVisible={hamburgerVisible}
                        handleClick={setHamburgerVisible}
                    />
                </StyledNavbar>
                <HamburgerMenu hamburgerVisible={hamburgerVisible} />
            </Wrapper>

            {hamburgerVisible && (
                <DisplayBlanket onClick={() => setHamburgerVisible(false)} />
            )}
        </>
    );
}
