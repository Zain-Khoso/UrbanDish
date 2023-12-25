// Components
import { StyledCard, Title, ImageWrapper, Text } from "./card.styled";
import LazyImage from "../../../../components/LazyImage/LazyImage";

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
