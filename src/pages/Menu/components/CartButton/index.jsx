// Utils
import { useState, useContext } from "react";
import { addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { ShoppingCart } from "react-feather";
import PropTypes from "prop-types";
import { auth } from "../../../../config/firebase";
import useCart from "../../../../hooks/useCart";
import { NotificationContext } from "../../../../contexts";

// Components
import { ButtonCart } from "./styled";
import { PrimaryBtnIconWrapper } from "../../../../components/Button/styled";
import { ContainedSpinner } from "../../../../components/Loaders/spinner.styled";

export default function CartButton({ dish }) {
    // States & Contexts
    const [isLoading, setIsLoading] = useState(false);
    const [timmer, setTimmer] = useState(null);
    const [user] = useAuthState(auth);
    const { notifDispatch } = useContext(NotificationContext);

    const addToCart = async function () {
        setIsLoading(true);
        const { cart, empty, data } = await useCart(user.uid);

        // Checking if the clicked item is already present in user's cart.
        if (!empty) {
            const isPresent = !data.every(
                (item) => Number(item.dishId) !== dish.id
            );

            if (isPresent) {
                setTimeout(() => {
                    notifDispatch({
                        type: "failure",
                        message: "Already preset in Cart.",
                    });

                    clearTimeout(timmer);
                    const timmerId = setTimeout(() => {
                        notifDispatch({ type: "hide" });
                    }, 3000);

                    setTimmer(timmerId);
                }, 500);

                setIsLoading(false);

                return;
            }
        }

        await addDoc(cart, {
            uid: user.uid,
            dishId: dish.id,
            title: dish.title,
            image: dish.image,
            dishType: dish.dishTypes[0] || "surprise",
            price: dish.pricePerServing,
        });

        notifDispatch({ type: "hide" });

        setTimeout(() => {
            notifDispatch({
                type: "success",
                message: "Added to Cart.",
            });

            clearTimeout(timmer);
            const timmerId = setTimeout(() => {
                notifDispatch({ type: "hide" });
            }, 3000);

            setTimmer(timmerId);
        }, 500);

        setIsLoading(false);
    };
    return (
        <ButtonCart onClick={addToCart}>
            <PrimaryBtnIconWrapper>
                {isLoading ? <ContainedSpinner /> : <ShoppingCart />}
            </PrimaryBtnIconWrapper>
        </ButtonCart>
    );
}

CartButton.defaultProps = {
    dish: {},
};

CartButton.propTypes = {
    dish: PropTypes.object,
};
