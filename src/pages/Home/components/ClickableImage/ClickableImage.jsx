// Utils
import { useState } from "react";
import PropTypes from "prop-types";

// Components
import { PersonImgWrapper } from "./clickableImage.styled";
import { DisplayBlanket } from "../../../../components/DisplayBlanket/displayBlanket.styled";
import LazyImage from "../../../../components/LazyImage/LazyImage";

export default function ClickableImage({ id, image, placeholder }) {
    const [inlarge, setInLarge] = useState(false);

    return (
        <>
            {inlarge && <DisplayBlanket onClick={() => setInLarge(!inlarge)} />}
            <PersonImgWrapper
                $inlarge={inlarge}
                onClick={() => setInLarge(!inlarge)}>
                <LazyImage
                    alt={`Testimonial ${id}`}
                    src={image}
                    placeholderSrc={placeholder}
                    sizePriority="h"
                />
            </PersonImgWrapper>
        </>
    );
}

ClickableImage.defaultProps = {
    id: Math.ceil(Math.random() * 1000),
};

ClickableImage.propTypes = {
    id: PropTypes.number,
    placeholder: PropTypes.any,
    image: PropTypes.any,
};
