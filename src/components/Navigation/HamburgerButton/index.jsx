// Components
import { Wrapper, Line } from "./styled";

export default function HamburgerButton({ hamburgerVisible, handleClick }) {
    return (
        <Wrapper
            $hamburgerVisible={hamburgerVisible}
            onClick={() => handleClick(!hamburgerVisible)}>
            <Line $hamburgerVisible={hamburgerVisible} />
            <Line $hamburgerVisible={hamburgerVisible} />
            <Line $hamburgerVisible={hamburgerVisible} />
        </Wrapper>
    );
}
