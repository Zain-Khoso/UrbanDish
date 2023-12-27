// Components
import { StyledMain, Container, Title } from "./styled";
import EmailForm from "../EmailForm";

export default function Main() {
    return (
        <StyledMain>
            <Container>
                <Title>Contact Us</Title>
                <EmailForm />
            </Container>
        </StyledMain>
    );
}
