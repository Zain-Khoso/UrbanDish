// Utils
import { useContext } from "react";
import { X } from "react-feather";
import { NotificationContext } from "../../../contexts";

// Components
import {
    Container,
    TextSuccess,
    TextFailure,
    SVGWrapper,
    ProgressBarSuccess,
    ProgressBarFailure,
} from "./styled";

export default function Notification() {
    const { notifState, notifDispatch } = useContext(NotificationContext);

    return (
        <Container $isOpen={notifState.visiblity}>
            {notifState.success ? (
                <TextSuccess>{notifState.message}</TextSuccess>
            ) : (
                <TextFailure>{notifState.message}</TextFailure>
            )}
            <SVGWrapper onClick={() => notifDispatch({ type: "hide" })}>
                <X />
            </SVGWrapper>
            {notifState.success ? (
                <ProgressBarSuccess $isOpen={notifState.visiblity} />
            ) : (
                <ProgressBarFailure $isOpen={notifState.visiblity} />
            )}
        </Container>
    );
}
