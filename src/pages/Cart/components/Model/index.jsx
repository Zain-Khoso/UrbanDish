// Utils
import { XSquare } from "react-feather";

// Components
import DisplayBlanket from "../../../../components/DisplayBlanket/styled";
import { StyledModel, CloseButton, ImageWrapper, Bullet } from "./styled";

export default function Model({ dish, setModelVisiblity }) {
    return (
        <>
            <DisplayBlanket onClick={() => setModelVisiblity(false)} />

            <StyledModel>
                <CloseButton onClick={() => setModelVisiblity(false)}>
                    <XSquare />
                </CloseButton>

                <ImageWrapper>
                    <img src={dish.image} alt="Image of the selected dish" />
                </ImageWrapper>

                <Bullet>
                    <b>Name: </b> &nbsp;{dish.title}
                </Bullet>
                <Bullet>
                    <b>Type: </b> &nbsp;{dish.dishType}
                </Bullet>
                <Bullet>
                    <b>Price: </b> &nbsp;{Math.round(dish.price)}
                </Bullet>
            </StyledModel>
        </>
    );
}
