// Reducer function for notification states.
export default function (state, action) {
    switch (action.type) {
        case "success":
            return { success: true, visiblity: true, message: action.message };

        case "failure":
            return { success: false, visiblity: true, message: action.message };

        case "hide":
            return { ...state, visiblity: false };

        default:
            throw new Error("Unidentified Action For Notification.");
    }
}
