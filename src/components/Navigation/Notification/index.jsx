// Utils
import { useContext } from "react";
import { X } from "react-feather";
import { NotificationContext } from "../../../contexts";

// Components
import { Container, Text, SVGWrapper, ProgressBar } from "./styled";

export default function Notification() {
    const { notifState, notifDispatch } = useContext(NotificationContext);

    return (
        <Container $isOpen={notifState.visiblity}>
            <Text $success={notifState.success}>{notifState.message}</Text>

            <SVGWrapper onClick={() => notifDispatch({ type: "hide" })}>
                <X />
            </SVGWrapper>

            <ProgressBar
                $isOpen={notifState.visiblity}
                $success={notifState.success}
            />
        </Container>
    );
}
