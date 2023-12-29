// Utils
import { motion } from "framer-motion";
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Navbar from "../../components/Navigation/Navbar";
import Main from "./components/Main";

export default function ContactUs() {
    useDocTitle("Contact Us");

    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}>
            <Navbar />

            <Main />
        </motion.div>
    );
}
