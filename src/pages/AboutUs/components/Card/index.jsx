// Utils
import PropTypes from "prop-types";

// Components
import { StyledCard, Title, ImageWrapper, Text } from "./styled";
import LazyImage from "../../../../components/LazyImage";

export default function Card({
    title,
    alt,
    placeholderImage,
    image,
    text,
    imageSizePriority,
}) {
    return (
        <StyledCard>
            <Title>{title}</Title>
            <ImageWrapper>
                <LazyImage
                    alt={alt}
                    placeholderSrc={placeholderImage}
                    src={image}
                    sizePriority={imageSizePriority || "w"}
                />
            </ImageWrapper>
            <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
        </StyledCard>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string,
    placeholderImage: PropTypes.any,
    image: PropTypes.any,
    text: PropTypes.string,
    imageSizePriority: PropTypes.string,
};
