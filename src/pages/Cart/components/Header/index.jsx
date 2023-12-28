// Utils
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../config/firebase";

// Components
import { StyledHeader, Head, ImageWrapper, Username } from "./styled";
import Navbar from "../../../../components/Navigation/Navbar";

export default function Header() {
    const [user] = useAuthState(auth);

    return (
        <StyledHeader>
            <Navbar />
            <Head>
                <ImageWrapper>
                    <img src={user.photoURL} alt="User Profile picture" />
                </ImageWrapper>
                <Username>{user.displayName}</Username>
            </Head>
        </StyledHeader>
    );
}
