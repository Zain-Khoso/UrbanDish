// Utils
import { useSelector } from "react-redux";
import { selectMenu } from "../../contexts/slice";

// Components
import { StyledMain, ErrorMessage } from "./main.styled";
import Item from "../Item/Item";
import DataLoader from "../../../../components/Loaders/DataLoader/DataLoader";
import EndListener from "../EndListener/EndListener";

export default function Main() {
    const { isLoading, error, dishes } = useSelector(selectMenu);

    return (
        <StyledMain>
            {dishes?.map((dish, index) => (
                <Item key={index} dish={dish} />
            ))}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            {isLoading && <DataLoader />}

            <EndListener />
        </StyledMain>
    );
}
