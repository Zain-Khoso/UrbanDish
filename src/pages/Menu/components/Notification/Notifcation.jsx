// Utils
import { X } from "react-feather";

// Components
import {
    StyledNotification,
    Title,
    SVGWrapper,
    ProgressBar,
} from "./notification.styled";

export default function Notifcation({ toggle, setToggle }) {
    return (
        <StyledNotification $isOpen={toggle}>
            <Title>Order Placed Successfully.</Title>
            <SVGWrapper onClick={() => setToggle(false)}>
                <X />
            </SVGWrapper>
            <ProgressBar $isOpen={toggle} />
        </StyledNotification>
    );
}
