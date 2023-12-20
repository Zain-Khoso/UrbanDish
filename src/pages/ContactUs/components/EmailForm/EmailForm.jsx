// Utils
import { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import { User, Mail, MessageSquare, Send } from "react-feather";

// Components
import {
    Form,
    Entry,
    SVGWrapper,
    Label,
    Input,
    Message,
    Button,
} from "./emailForm.styled";

export default function EmailForm() {
    const form = useRef(null);

    const sendMail = function (event) {
        event.preventDefault();

        sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_FORM_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        form.current.reset();
    };

    return (
        <Form ref={form} onSubmit={sendMail}>
            <Entry>
                <SVGWrapper>
                    <User />
                </SVGWrapper>
                <Label>Your Name: </Label>
                <Input
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    required
                />
            </Entry>

            <Entry>
                <SVGWrapper>
                    <Mail />
                </SVGWrapper>
                <Label>Your Email: </Label>
                <Input
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    required
                />
            </Entry>

            <Entry>
                <SVGWrapper>
                    <MessageSquare />
                </SVGWrapper>
                <Label>Your Message: </Label>
                <Message
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                />
            </Entry>

            <Button type="submit">
                <span>Send Mail</span>
                <div className="svg-wrapper">
                    <Send />
                </div>
            </Button>
        </Form>
    );
}
