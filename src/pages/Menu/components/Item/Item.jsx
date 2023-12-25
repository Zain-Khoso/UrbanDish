// Utils
import PropTypes from "prop-types";
import { ShoppingCart } from "react-feather";

// Components
import {
    Card,
    ImageWrapper,
    Bullets,
    Bullet,
    ButtonBar,
    Button,
    ButtonCart,
} from "./item.styled";

export default function Item({ dish, confirmMessage, setConfirmOrder }) {
    return (
        <Card>
            <ImageWrapper>
                <img src={dish.image} alt="A beatiful image of the dish" />
            </ImageWrapper>

            <Bullets>
                <Bullet>Name:&nbsp; {dish.title}</Bullet>
                <Bullet>For:&nbsp; {dish.dishTypes[0]}</Bullet>
                <Bullet>
                    Price:&nbsp; ${Math.round(dish.pricePerServing)}
                </Bullet>
            </Bullets>

            <ButtonBar>
                <Button
                    disabled={confirmMessage}
                    onClick={() => setConfirmOrder(true)}>
                    <span>Order Now</span>
                </Button>

                <ButtonCart>
                    <div className="svg-wrapper">
                        <ShoppingCart />
                    </div>
                </ButtonCart>
            </ButtonBar>
        </Card>
    );
}

Item.propTypes = {
    dish: PropTypes.object,
};
