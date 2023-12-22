// Utils
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, selectMenu, setIsLoading } from "../../contexts/slice";
import { ShoppingCart } from "react-feather";

// Components
import {
    StyledMain,
    Card,
    ImageWrapper,
    Bullets,
    Bullet,
    ButtonBar,
    Button,
    ButtonCart,
} from "./main.styled";

export default function Main() {
    const isMounted = useRef(true);

    const dispatch = useDispatch();
    const { isLoading, error, dishes } = useSelector(selectMenu);

    useEffect(() => {
        const fetchData = function () {
            dispatch(setIsLoading());
            dispatch(fetchMenu());
        };

        isMounted.current && fetchData();

        return () => (isMounted.current = false);
    }, []);

    if (isLoading) return <h2 style={{ color: "green" }}>Loading...</h2>;

    if (error) return <h2 style={{ color: "red" }}>Error</h2>;

    return (
        <StyledMain>
            {dishes?.map((dish, index) => (
                <Card key={index}>
                    <ImageWrapper>
                        <img src={dish.image} alt="Image" />
                    </ImageWrapper>

                    <Bullets>
                        <Bullet>Name:&nbsp; {dish.title}</Bullet>
                        <Bullet>For:&nbsp; {dish.dishTypes[0]}</Bullet>
                        <Bullet>
                            Price:&nbsp; ${Math.round(dish.pricePerServing)}
                        </Bullet>
                    </Bullets>

                    <ButtonBar>
                        <Button>
                            <span>Order Now</span>
                        </Button>

                        <ButtonCart>
                            <div className="svg-wrapper">
                                <ShoppingCart />
                            </div>
                        </ButtonCart>
                    </ButtonBar>
                </Card>
            ))}
        </StyledMain>
    );
}
