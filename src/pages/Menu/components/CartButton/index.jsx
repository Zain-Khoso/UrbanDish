// Utils
import { useContext } from "react";
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

export default function CartButton({ dish }) {
    // States & Contexts
    const [user] = useAuthState(auth);
    const { notifDispatch } = useContext(NotificationContext);

    const addToCart = async function () {
        const { cart, empty, data } = await useCart(user.uid);

        // Checking if the clicked item is already present in user's cart.
        if (!empty) {
            const isPresent = !data.every(
                (item) => Number(item.dishId) !== dish.id
            );

            if (isPresent) {
                notifDispatch({
                    type: "failure",
                    message: "Already preset in Cart.",
                });
                setTimeout(() => {
                    notifDispatch({
                        type: "hide",
                    });
                }, 3000);

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

        notifDispatch({
            type: "success",
            message: "Added to Cart.",
        });
        setTimeout(() => {
            notifDispatch({
                type: "hide",
            });
        }, 3000);
    };
    return (
        <ButtonCart onClick={addToCart}>
            <PrimaryBtnIconWrapper>
                <ShoppingCart />
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
