// Utils
import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { Truck, XSquare } from "react-feather";
import { auth } from "../../../../config/firebase";
import { selectCart, deleteItems } from "../../contexts/slice";
import { NotificationContext } from "../../../../contexts";

// Copmponents
import { Container, TotalPrice, ButtonGroup, Model } from "./styled";
import { ButtonPrimary, ButtonRedOutline } from "../../../../components/Button";
import DisplayBlanket from "../../../../components/DisplayBlanket/styled";

export default function Controller() {
    const { notifDispatch } = useContext(NotificationContext);
    const [showModel, setShowModel] = useState(false);
    const [orderModel, setOrderModel] = useState(true);
    const [timmer, setTimmer] = useState(null);

    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const { selected, selectedSum } = useSelector(selectCart);

    const showConfirmationModel = function (order) {
        if (selected.length === 0) return;
        setShowModel(true);
        setOrderModel(order);
    };

    const handleRemoveFromCart = async function (order) {
        setShowModel(false);

        const messages = [
            ["Order Placed Successfully", "Unable to place an order"],
            [
                `Item${selected.length > 1 ? "s" : ""} removed`,
                `Unable to remove ${
                    selected.length > 1 ? "these items" : "this item"
                }`,
            ],
        ];

        try {
            await (async () => {
                dispatch(deleteItems(selected, user.uid));
            })();

            notifDispatch({ type: "hide" });

            setTimeout(() => {
                notifDispatch({
                    type: "success",
                    message: order ? messages[0][0] : messages[1][0],
                });

                clearTimeout(timmer);
                const timmerId = setTimeout(() => {
                    notifDispatch({ type: "hide" });
                }, 3000);

                setTimmer(timmerId);
            }, 500);
        } catch {
            notifDispatch({ type: "hide" });

            setTimeout(() => {
                notifDispatch({
                    type: "failure",
                    message: order ? messages[0][1] : messages[1][1],
                });

                clearTimeout(timmer);
                const timmerId = setTimeout(() => {
                    notifDispatch({ type: "hide" });
                }, 3000);

                setTimmer(timmerId);
            }, 500);
        }
    };

    return (
        <>
            <Container>
                <TotalPrice>${selectedSum}</TotalPrice>
                <ButtonGroup>
                    <ButtonPrimary
                        text="Checkout"
                        svg={<Truck />}
                        handleClick={() => showConfirmationModel(true)}
                    />
                    <ButtonRedOutline
                        text="Remove"
                        svg={<XSquare />}
                        handleClick={() => showConfirmationModel(false)}
                    />
                </ButtonGroup>
            </Container>
            {showModel && (
                <>
                    <DisplayBlanket />
                    <Model>
                        <p>
                            {orderModel
                                ? `Total price of this package is $${
                                      selectedSum + 100
                                  }, Dilevery charges included.`
                                : `Are you sure you want to remove ${
                                      selected.length > 1
                                          ? "these items"
                                          : "this item"
                                  }`}
                        </p>
                        <ButtonGroup>
                            {orderModel ? (
                                <>
                                    <ButtonPrimary
                                        text="Place"
                                        handleClick={() =>
                                            handleRemoveFromCart(true)
                                        }
                                    />
                                    <ButtonRedOutline
                                        text="Wait"
                                        handleClick={() => setShowModel(false)}
                                    />
                                </>
                            ) : (
                                <>
                                    <ButtonRedOutline
                                        text="YES"
                                        handleClick={() =>
                                            handleRemoveFromCart(false)
                                        }
                                    />
                                    <ButtonPrimary
                                        text="NO"
                                        handleClick={() => setShowModel(false)}
                                    />
                                </>
                            )}
                        </ButtonGroup>
                    </Model>
                </>
            )}
        </>
    );
}
