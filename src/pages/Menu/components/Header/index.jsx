// Components
import { StyledHeader, Title } from "./styled";
import Navbar from "../../../../components/Navigation/Navbar";
import SearchField from "../SearchForm";

export default function Header() {
    return (
        <StyledHeader>
            <Navbar />

            <Title>Menu</Title>

            <SearchField />
        </StyledHeader>
    );
}
