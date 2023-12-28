// Utils
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircle } from "react-feather";
import { selectCart, addSelected, removeSelected } from "../../contexts/slice";

// Components
import {
    StyledCard,
    Content,
    ImageWrapper,
    Details,
    Bullet,
    Checkbox,
} from "./styled";
import Model from "../Model";

export default function Card({ dish }) {
    const dispatch = useDispatch();
    const { selected } = useSelector(selectCart);
    const [modelVisiblity, setModelVisiblity] = useState(false);

    return (
        <>
            <StyledCard>
                <Content onClick={() => setModelVisiblity(true)}>
                    <ImageWrapper>
                        <img src={dish.image} alt="Image of this cart item." />
                    </ImageWrapper>

                    <Details>
                        <Bullet>
                            {dish.title.length >= 13
                                ? dish.title.slice(0, 13) + "..."
                                : dish.title}
                        </Bullet>
                        <Bullet>{dish.dishType}</Bullet>
                        <Bullet>${Math.round(dish.price)}</Bullet>
                    </Details>
                </Content>

                <Checkbox
                    $selected={selected.includes(dish)}
                    onClick={() =>
                        selected.includes(dish)
                            ? dispatch(removeSelected(dish))
                            : dispatch(addSelected(dish))
                    }>
                    <CheckCircle />
                </Checkbox>
            </StyledCard>

            {modelVisiblity && (
                <Model setModelVisiblity={setModelVisiblity} dish={dish} />
            )}
        </>
    );
}
