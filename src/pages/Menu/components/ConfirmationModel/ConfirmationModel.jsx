// Utils
import { CheckCircle } from "react-feather";

// Components
import { Model } from "./confirmationModel.styled";
import { DisplayBlanket } from "../../../../components/DisplayBlanket/displayBlanket.styled";
import { ButtonPrimary } from "../../../../components/Button/Button";

export default function ConfirmationModel({ setModelVisiblity }) {
    return (
        <>
            <DisplayBlanket />
            <Model>
                <p>
                    You will recieve your order <br /> in about 20 - 30 minutes.
                </p>
                <ButtonPrimary
                    text="Place Order"
                    svg={<CheckCircle />}
                    handleClick={() => setModelVisiblity(false)}
                />
            </Model>
        </>
    );
}
