import React, {useEffect} from "react";
import ProjectList from "../project/ProjectList";
import {useSelector,useDispatch} from "react-redux";
import {getProjects} from "../../store/actions/projectAction";

const Dashboard = () => {
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())

    }, [])
    console.log(projects)
    return (
        <div>
            {/*<ProjectList projects={projects}/>*/}
        </div>
    )
}
export default Dashboard;