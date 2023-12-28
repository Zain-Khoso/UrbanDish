// Utils
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { fireStore } from "../config/firebase";

export default async function (userId) {
    // Getting current user's cart from firebase.
    const cart = collection(fireStore, "cart");
    const userQuery = query(cart, where("uid", "==", userId));
    const { empty, docs } = await getDocs(userQuery);

    // Filtering the response data.
    const data = docs.map(function (doc) {
        const item = doc._document.data.value.mapValue.fields;
        const filteredItem = {};

        Object.keys(item).forEach((key) => {
            filteredItem[key] = Object.values(item[key])[0];
        });

        filteredItem["id"] = doc.id;

        return filteredItem;
    });

    return { cart, empty, data };
}
