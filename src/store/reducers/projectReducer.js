const projectReducer = (state = [], {type, payload}) => {
    switch (type) {
        case "CREATE_PROJECT":
            return state;
        case "GET_PROJECTS":
            return [...payload];
        case "DELETE_PROJECT":
                return state;
        default:
            return state;
    }
}

export default projectReducer