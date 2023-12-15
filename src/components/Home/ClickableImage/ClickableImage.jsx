// Utils
import { useState } from "react";

// Components
import { PersonImgWrapper } from "./clickableImage.styled";
import { DisplayBlanket } from "../../Global/DisplayBlanket/displayBlanket.styled";

export default function ClickableImage({ id, image }) {
    const [inlarge, setInLarge] = useState(false);

    return (
        <>
            {inlarge && <DisplayBlanket onClick={() => setInLarge(!inlarge)} />}
            <PersonImgWrapper
                $inlarge={inlarge}
                onClick={() => setInLarge(!inlarge)}>
                <img src={image} alt={`Testimonial ${id}`} />
            </PersonImgWrapper>
        </>
    );
}
