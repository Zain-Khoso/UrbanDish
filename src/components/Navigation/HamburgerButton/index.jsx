// Components
import { Wrapper, Line } from "./styled";

export default function HamburgerButton({ hamburgerVisible, handleClick }) {
    const line1variants = {
        open: {
            top: "50%",
            rotate: 45,
        },
        close: {
            top: "25%",
            rotate: 0,
        },
    };
    const line2variants = {
        open: {
            opacity: 0,
        },
        close: {
            opacity: 1,
        },
    };
    const line3variants = {
        open: {
            top: "50%",
            rotate: -45,
        },
        close: {
            top: "75%",
            rotate: 0,
        },
    };

    return (
        <Wrapper onClick={() => handleClick(!hamburgerVisible)}>
            <Line
                variants={line1variants}
                animate={hamburgerVisible ? "open" : "close"}
                transition={{ duration: 0.3 }}
            />
            <Line
                variants={line2variants}
                animate={hamburgerVisible ? "open" : "close"}
                transition={{ duration: 0.3 }}
            />
            <Line
                variants={line3variants}
                animate={hamburgerVisible ? "open" : "close"}
                transition={{ duration: 0.3 }}
            />
        </Wrapper>
    );
}
