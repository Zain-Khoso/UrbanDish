// Utils
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// The initial State of the slice.
const initialState = {
    isLoading: false,
    error: null,
    dishes: [],
};

// The slice of this app.
const slice = createSlice({
    name: "menu",
    initialState: { value: initialState },
    reducers: {
        updateData(state, action) {
            state.value.isLoading = false;
            state.value.error = null;
            state.value.dishes = state.value.dishes.concat(action.payload);
        },

        handleError(state, action) {
            state.value.isLoading = false;
            state.value.error = action.payload;
        },

        setIsLoading(state) {
            state.value.isLoading = true;
        },
    },
});

// Thunks for async logic.
export const fetchMenu = function () {
    return async function (dispatch) {
        try {
            const response = await axios.get(
                (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
                    ? `https://api.spoonacular.com/recipes/random?number=20&apiKey=${
                          import.meta.env.VITE_SPOONACULAR_API_KEY
                      }`
                    : "http://localhost:3000/recipes"
            );

            dispatch(
                slice.actions.updateData(
                    response.data["recipes"] || response.data
                )
            );
        } catch (error) {
            dispatch(slice.actions.handleError(error.statusText));
        }
    };
};

// Slice data selector from the store.
export const selectMenu = (state) => state.menu.value;

export const { setIsLoading } = slice.actions;

export default slice.reducer;
