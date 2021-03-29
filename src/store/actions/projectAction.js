export const createProject = (projects) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        let createAt =new Date().toISOString().slice(0,10);
        firestore.collection('projects').add({
            ...projects,
            authorId: Math.random(),
            createAt
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', projects});
        }).catch((err) => {
            dispatch({type: "CREATE_PROJECT_ERROR", err});
        })
    }
};


export const getProjects = () => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').get().then((res) => {
            const data = [];
            res.forEach((doc) => {
                data.push({id: doc.id, ...doc.data()});
            })
            console.log(data)
            dispatch({type: 'GET_PROJECTS', payload: data});
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err})
        })
    }
};

export const deleteProject = (id) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc(id).delete().then(() => {
            dispatch (getProjects())
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err})
        })
    }
};



