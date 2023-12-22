// Utils
import { configureStore } from "@reduxjs/toolkit";

// Store Slices
import MenuReducer from "../pages/Menu/contexts/slice";

export default configureStore({
    reducer: {
        menu: MenuReducer,
    },
});
