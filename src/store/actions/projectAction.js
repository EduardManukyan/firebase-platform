export const createProject = (projects) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...projects,
            authorFirstName: "Robert",
            authorLastName: "Manukyan",
            authorId: 123,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', projects});
        }).catch((err) => {
            dispatch({type: "CREATE_PROJECT_ERROR", err});
        })
    }
};