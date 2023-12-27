export default function (docs) {
    return docs.map(function (doc) {
        const item = doc._document.data.value.mapValue.fields;
        const filteredItem = {};

        Object.keys(item).forEach((key) => {
            filteredItem[key] = Object.values(item[key])[0];
        });

        return filteredItem;
    });
}
