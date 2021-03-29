import React from "react";
import {Link} from "react-router-dom";

const ProjectList = ({projects}) => {
    return (
        <div style={{margin: "auto", display: 'table', backgroundColor: "crimson"}}>
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                    </Link>
                )
            })}
        </div>
    )
}
export default ProjectList