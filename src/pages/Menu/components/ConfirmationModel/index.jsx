// Utils
import PropTypes from "prop-types";
import { CheckCircle } from "react-feather";

// Components
import { Model } from "./styled";
import DisplayBlanket from "../../../../components/DisplayBlanket/styled";
import { ButtonPrimary } from "../../../../components/Button";

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

ConfirmationModel.propTypes = {
    setModelVisiblity: PropTypes.func,
};
