// Assets
import MenuDark from "../../assets/svgs/menu-dark.svg";
import MenuLight from "../../assets/svgs/menu-light.svg";

// Components
import { StyledHeader, Title } from "./styled";
import Navbar from "../../../../components/Navigation/Navbar";
import SearchField from "../SearchForm";
import Illustration from "../../../../components/Illustration";

export default function Header() {
    return (
        <StyledHeader>
            <Navbar />

            <Title>Menu</Title>

            <Illustration
                scale={50}
                light={MenuLight}
                dark={MenuDark}
                altText="Illustration for the menu page"
            />

            <SearchField />
        </StyledHeader>
    );
}
