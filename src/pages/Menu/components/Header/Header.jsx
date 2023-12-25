// Components
import { StyledHeader, Title } from "./header.styled";
import Navbar from "../../../../components/Navigation/Navbar/Navbar";
import SearchField from "../SearchForm/SearchForm";

export default function Header() {
    return (
        <StyledHeader>
            <Navbar />

            <Title>Menu</Title>

            <SearchField />
        </StyledHeader>
    );
}
