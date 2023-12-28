// Utils
import { createSlice } from "@reduxjs/toolkit";
import useCart from "../../../hooks/useCart";

import { doc, deleteDoc } from "firebase/firestore";
import { fireStore } from "../../../config/firebase";

// The initial State of the slice.
const initialState = {
    isLoading: false,
    error: false,
    empty: false,
    cart: [],
    selected: [],
    selectedSum: 0,
};

// The slice of this app.
const slice = createSlice({
    name: "cart",
    initialState: { value: initialState },
    reducers: {
        setCart(state, action) {
            state.value.isLoading = false;
            state.value.error = false;
            state.value.empty = action.payload.empty;
            state.value.cart = action.payload.data;
            state.value.selected = [];
            state.value.selectedSum = 0;
        },

        addSelected(state, action) {
            state.value.selected = [...state.value.selected, action.payload];
            state.value.selectedSum =
                state.value.selectedSum + Math.round(action.payload.price);
        },

        removeSelected(state, action) {
            state.value.selected = [...state.value.selected].filter(
                (item) => item.dishId !== action.payload.dishId
            );
            state.value.selectedSum =
                state.value.selectedSum - Math.round(action.payload.price);
        },

        handleError(state) {
            state.value.isLoading = false;
            state.value.error = true;
        },

        setIsLoading(state) {
            state.value.isLoading = true;
        },
    },
});

// Thunks for async logic.
export const fetchCart = function (userId) {
    return async function (dispatch) {
        dispatch(slice.actions.setIsLoading());

        try {
            const { empty, data } = await useCart(userId);
            dispatch(slice.actions.setCart({ empty, data }));
        } catch (error) {
            dispatch(slice.actions.handleError());
            throw new Error(error);
        }
    };
};

export const deleteItems = function (items, userId) {
    return async function (dispatch) {
        try {
            await (async () => {
                items.forEach((item) => {
                    deleteDoc(doc(fireStore, "cart", item.id));
                });
            })();

            setTimeout(() => dispatch(fetchCart(userId)), 500);
        } catch (error) {
            dispatch(slice.actions.handleError());
            throw new Error(error);
        }
    };
};

// Slice data selector from the store.
export const selectCart = (state) => state.cart.value;

export const { addSelected, removeSelected, setIsLoading } = slice.actions;

export default slice.reducer;
