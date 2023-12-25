// Components
import { StyledMain, Container, Title } from "./main.styled";
import EmailForm from "../EmailForm/EmailForm";

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
