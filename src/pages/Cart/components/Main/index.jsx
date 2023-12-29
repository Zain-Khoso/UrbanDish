// Utils
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { fetchCart, selectCart } from "../../contexts/slice";
import { auth } from "../../../../config/firebase";

// Assets
import EmptyCartDark from "../../assets/svgs/empty-cart-dark.svg";
import EmptyCartLight from "../../assets/svgs/empty-cart-light.svg";

// Components
import { StyledMain, Title } from "./styled";
import Card from "../Card";
import Controller from "../Controller";
import DataLoader from "../../../../components/Loaders/DataLoader";
import Illustration from "../../../../components/Illustration";

export default function Main() {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const { isLoading, error, empty, cart } = useSelector(selectCart);

    useEffect(() => {
        dispatch(fetchCart(user.uid));
    }, []);

    return (
        <StyledMain>
            <Title>Cart</Title>
            {isLoading ? (
                <DataLoader />
            ) : error ? (
                <h2>Unable to load the cart, right now.</h2>
            ) : empty ? (
                <>
                    <h2>There is nothing in your cart :(</h2>
                    <Illustration
                        scale={60}
                        light={EmptyCartLight}
                        dark={EmptyCartDark}
                        altText="Illustration which sshows that the cart is empty"
                    />
                </>
            ) : (
                cart.map((item, index) => <Card key={index} dish={item} />)
            )}
            <Controller />
        </StyledMain>
    );
}
