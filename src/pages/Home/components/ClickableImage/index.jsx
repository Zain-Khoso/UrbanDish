// Utils
import PropTypes from "prop-types";

// Components
import { PersonImgWrapper } from "./styled";
import LazyImage from "../../../../components/LazyImage";

export default function ClickableImage({ id, image, placeholder }) {
    return (
        <PersonImgWrapper>
            <LazyImage
                alt={`Testimonial ${id}`}
                src={image}
                placeholderSrc={placeholder}
                sizePriority="h"
            />
        </PersonImgWrapper>
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
