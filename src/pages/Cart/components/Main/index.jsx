// Utils
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { fetchCart, selectCart } from "../../contexts/slice";
import { auth } from "../../../../config/firebase";

// Components
import { StyledMain, Title } from "./styled";
import Card from "../Card";
import Controller from "../Controller";
import DataLoader from "../../../../components/Loaders/DataLoader";

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
                <h2>There is nothing in your cart :(</h2>
            ) : (
                cart.map((item, index) => <Card key={index} dish={item} />)
            )}
            <Controller />
        </StyledMain>
    );
}
