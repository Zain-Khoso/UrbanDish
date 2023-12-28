// Utils
import { memo, useState } from "react";

// Assets
import logo from "../../../assets/favicon.png";

// Components
import { Wrapper, StyledNavbar, StyledLink } from "./styled";
import HamburgerButton from "../HamburgerButton";
import HamburgerMenu from "../HamburgerMenu";
import DisplayBlanket from "../../DisplayBlanket/styled";
import Notification from "../Notification";

export default memo(function Navbar() {
    // UI States
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

                <Notification />
            </Wrapper>

            {hamburgerVisible && (
                <DisplayBlanket onClick={() => setHamburgerVisible(false)} />
            )}
        </>
    );
});
