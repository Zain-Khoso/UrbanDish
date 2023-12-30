// Utils
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { selectMenu } from "../../contexts/slice";
import { NotificationContext } from "../../../../contexts";

// Components
import { StyledMain, ErrorMessage } from "./styled";
import Item from "../Item";
import DataLoader from "../../../../components/Loaders/DataLoader";
import EndListener from "../EndListener";
import ConfirmationModel from "../ConfirmationModel";

export default function Main() {
    // UI States
    const [modelVisible, setModelVisible] = useState(false);
    const [timmer, setTimmer] = useState(null);
    const { notifState, notifDispatch } = useContext(NotificationContext);

    // Data States
    const { isLoading, error, dishes, searchMode } = useSelector(selectMenu);

    // Functions
    const confirmOrder = function () {
        notifDispatch({ type: "hide" });

        setTimeout(() => {
            notifDispatch({
                type: "success",
                message: "Order Placed Successfully",
            });

            clearTimeout(timmer);
            const timmerId = setTimeout(() => {
                notifDispatch({ type: "hide" });
            }, 3000);

            setTimmer(timmerId);
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
