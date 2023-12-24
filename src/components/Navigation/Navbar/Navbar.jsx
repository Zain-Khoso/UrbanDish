// Utils
import { useState } from "react";
import AuthMessageContext from "../../../contexts/authMessage";

// Assets
import logo from "../../../assets/favicon.png";

// Components
import { Wrapper, StyledNavbar, StyledLink } from "./navbar.styled";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { DisplayBlanket } from "../../DisplayBlanket/displayBlanket.styled";
import Notifcation from "../../Notification/Notifcation";

export default function Navbar() {
    // UI States
    const [hamburgerVisible, setHamburgerVisible] = useState(false);
    const [notiVisible, setNotiVisible] = useState(false);
    const [notiMsg, setNotiMsg] = useState("");

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

                <AuthMessageContext.Provider
                    value={{
                        setNotiMsg,
                        notiVisible,
                        setNotiVisible,
                    }}>
                    <HamburgerMenu hamburgerVisible={hamburgerVisible} />
                </AuthMessageContext.Provider>

                <Notifcation
                    text={notiMsg}
                    toggle={notiVisible}
                    setToggle={setNotiVisible}
                />
            </Wrapper>

            {hamburgerVisible && (
                <DisplayBlanket onClick={() => setHamburgerVisible(false)} />
            )}
        </>
    );
}
