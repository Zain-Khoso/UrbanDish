// Utils
import PropTypes from "prop-types";

// Components
import { Container, Title, SocialsWrapper, SVGLink } from "./socialBar.styled";

export default function SocialBar({ title, links, newTab }) {
    return (
        <Container>
            <Title>{title}</Title>

            <SocialsWrapper>
                {links?.map((item, index) => (
                    <SVGLink
                        key={index}
                        to={item.link}
                        target={newTab ? "_blank" : ""}>
                        {item.svg}
                    </SVGLink>
                ))}
            </SocialsWrapper>
        </Container>
    );
}

SocialBar.defaultProps = {
    newTab: true,
};

SocialBar.propTypes = {
    title: PropTypes.string,
    links: PropTypes.array,
    newTab: PropTypes.bool,
};
