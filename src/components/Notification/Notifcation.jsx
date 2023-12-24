// Utils
import { X } from "react-feather";

// Components
import {
    StyledNotification,
    Title,
    SVGWrapper,
    ProgressBar,
} from "./notification.styled";

export default function Notifcation({ text, toggle, setToggle }) {
    return (
        <StyledNotification $isOpen={toggle}>
            <Title>{text}</Title>
            <SVGWrapper onClick={() => setToggle(false)}>
                <X />
            </SVGWrapper>
            <ProgressBar $isOpen={toggle} />
        </StyledNotification>
    );
}
