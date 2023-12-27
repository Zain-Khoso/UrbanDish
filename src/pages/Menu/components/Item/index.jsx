// Utils
import PropTypes from "prop-types";

// Components
import {
    Card,
    ImageWrapper,
    Bullets,
    Bullet,
    ButtonBar,
    Button,
} from "./styled";
import CartButton from "../CartButton";
import { PrimaryBtnText } from "../../../../components/Button/styled";

export default function Item({ dish, confirmMessage, setConfirmOrder }) {
    return (
        <Card>
            <ImageWrapper>
                <img src={dish.image} alt="A beatiful image of the dish" />
            </ImageWrapper>

            <Bullets>
                <Bullet>Name:&nbsp; {dish.title}</Bullet>
                <Bullet>For:&nbsp; {dish.dishTypes[0] || "surprise"}</Bullet>
                <Bullet>
                    Price:&nbsp; ${Math.round(dish.pricePerServing)}
                </Bullet>
            </Bullets>

            <ButtonBar>
                <Button
                    disabled={confirmMessage}
                    onClick={() => setConfirmOrder(true)}>
                    <PrimaryBtnText>Order Now</PrimaryBtnText>
                </Button>
                <CartButton dish={dish} />
            </ButtonBar>
        </Card>
    );
}

Item.propTypes = {
    dish: PropTypes.object,
    confirmMessage: PropTypes.bool,
    setConfirmMessage: PropTypes.func,
};
