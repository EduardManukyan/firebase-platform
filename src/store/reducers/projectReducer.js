const initState = {
    projects: [
        {id: '1', title: 'find', content: 'text'},
        {id: '2', title: 'all the stars', content: 'text'},
        {id: '3', title: 'test', content: 'text'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("create project", action.projects)
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error", action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer