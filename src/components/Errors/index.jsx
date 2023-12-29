// Utils
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

// Components
import {
    Container,
    Expression,
    Message,
    ButtonGroup,
    PrevLink,
    Text,
    SVGWrapper,
} from "./styled";
import AuthButton from "../AuthButton";

export function ErrorPage() {
    const navigate = useNavigate();

    return (
        <Container>
            <Expression>Oops!</Expression>
            <Message>Sorry, an unexpected error occured.</Message>
            <PrevLink onClick={() => navigate(-1)}>
                <SVGWrapper>
                    <ArrowLeft />
                </SVGWrapper>
                <Text>Go back</Text>
            </PrevLink>
        </Container>
    );
}

export function AuthError() {
    const navigate = useNavigate();

    return (
        <Container>
            <Expression>Oops!</Expression>
            <Message>You must sign in to access this page.</Message>
            <ButtonGroup>
                <PrevLink onClick={() => navigate(-1)}>
                    <SVGWrapper>
                        <ArrowLeft />
                    </SVGWrapper>
                    <Text>Go back</Text>
                </PrevLink>
                <AuthButton />
            </ButtonGroup>
        </Container>
    );
}
