// Utils
import { Filter } from "react-feather";

// Components
import { Form, Input, Button } from "./searchForm.styled";

export default function SearchField() {
    return (
        <Form>
            <Input placeholder="Search..." />
            <Button>
                <div className="svg-wrapper">
                    <Filter />
                </div>
            </Button>
        </Form>
    );
}
