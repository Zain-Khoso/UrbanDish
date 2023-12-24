// Utils
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMenu } from "../../contexts/slice";

// Components
import { StyledMain, ErrorMessage } from "./main.styled";
import Item from "../Item/Item";
import DataLoader from "../../../../components/Loaders/DataLoader/DataLoader";
import EndListener from "../EndListener/EndListener";
import ConfirmationModel from "../ConfirmationModel/ConfirmationModel";
import Notifcation from "../../../../components/Notification/Notifcation";

export default function Main() {
    // UI States
    const [modelVisible, setModelVisible] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState(false);

    // Data States
    const { isLoading, error, dishes, searchMode } = useSelector(selectMenu);

    // Functions
    const confirmOrder = function () {
        setTimeout(() => {
            setConfirmMessage(true);

            setTimeout(() => {
                setConfirmMessage(false);
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
                    confirmMessage={confirmMessage}
                    setConfirmOrder={setModelVisible}
                />
            ))}

            <Notifcation
                text="Order Placed Successfully."
                toggle={confirmMessage}
                setToggle={setConfirmMessage}
            />

            {modelVisible && (
                <ConfirmationModel setModelVisiblity={confirmOrder} />
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            {isLoading && <DataLoader />}

            {!isLoading && !searchMode && <EndListener />}
        </StyledMain>
    );
}
