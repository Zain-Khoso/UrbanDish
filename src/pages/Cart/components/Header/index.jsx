// Utils
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../config/firebase";

// Components
import { StyledHeader, Head, ImageWrapper, Image, Username } from "./styled";
import Navbar from "../../../../components/Navigation/Navbar";
import DisplayBlanket from "../../../../components/DisplayBlanket/styled";

export default function Header() {
    const [isLarge, setIsLarge] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <StyledHeader>
            <Navbar />
            <Head>
                <ImageWrapper
                    animate={{
                        scale: [1, 1.5, 1.5, 1],
                        borderRadius: ["0%", "0%", "50%", "50%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 0.8, 1],
                    }}>
                    <Image
                        src={user.photoURL}
                        alt="User Profile picture"
                        $isLarge={isLarge}
                        onClick={() => setIsLarge(!isLarge)}
                    />
                </ImageWrapper>
                {isLarge && (
                    <DisplayBlanket onClick={() => setIsLarge(false)} />
                )}
                <Username>{user.displayName}</Username>
            </Head>
        </StyledHeader>
    );
}
