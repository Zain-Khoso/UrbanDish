// Utils
import { useSpoonacular } from "../../hooks/useSpoonacular";
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
    const {
        isLoading,
        error,
        data: dishes,
    } = useSpoonacular(
        (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
            ? `https://api.spoonacular.com/recipes/random?number=20&apiKey=${
                  import.meta.env.VITE_SPOONACULAR_API_KEY
              }`
            : "http://localhost:3000/recipes"
    );

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
