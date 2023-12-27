// Utils
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { selectMenu } from "../../contexts/slice";
import { NotificationContext } from "../../../../contexts";

// Components
import { StyledMain, ErrorMessage } from "./styled";
import Item from "../Item";
import DataLoader from "../../../../components/Loaders/DataLoader";
import EndListener from "../EndListener/EndListener";
import ConfirmationModel from "../ConfirmationModel";

export default function Main() {
    // UI States
    const [modelVisible, setModelVisible] = useState(false);
    const { notifState, notifDispatch } = useContext(NotificationContext);

    // Data States
    const { isLoading, error, dishes, searchMode } = useSelector(selectMenu);

    // Functions
    const confirmOrder = function () {
        setTimeout(() => {
            notifDispatch({
                type: "success",
                message: "Order Placed Successfully",
            });

            setTimeout(() => {
                notifDispatch({ type: "hide" });
            }, 3000);
        }, 500);

        setModelVisible(false);
    };

    return (
        <StyledMain>
            {dishes?.map((dish, index) => (
                <Item
                    key={index}
                    dish={dish}
                    confirmMessage={notifState.visiblity}
                    setConfirmOrder={setModelVisible}
                />
            ))}

            {modelVisible && (
                <ConfirmationModel setModelVisiblity={confirmOrder} />
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            {isLoading && <DataLoader />}

            {!isLoading && !searchMode && <EndListener />}
        </StyledMain>
    );
}
