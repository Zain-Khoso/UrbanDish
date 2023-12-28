// Utils
import { configureStore } from "@reduxjs/toolkit";

// Store Slices
import MenuReducer from "../pages/Menu/contexts/slice";
import CartReducer from "../pages/Cart/contexts/slice";

export default configureStore({
    reducer: {
        menu: MenuReducer,
        cart: CartReducer,
    },
});
