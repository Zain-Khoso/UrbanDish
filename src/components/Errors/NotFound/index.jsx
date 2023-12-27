// Utils
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

// Components
import { Container, Expression, PrevLink, Text, SVGWrapper } from "./styled";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Container>
            <Expression>Oops!</Expression>
            <p>Sorry, an unexpected error occured.</p>
            <PrevLink onClick={() => navigate(-1)}>
                <SVGWrapper>
                    <ArrowLeft />
                </SVGWrapper>
                <Text>Go back</Text>
            </PrevLink>
        </Container>
    );
}
