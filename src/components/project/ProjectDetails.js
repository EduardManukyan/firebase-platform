import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div style={{margin:"auto",display: 'table'}}>
            <div style={{backgroundColor: "crimson", width: '200px', height: "200px"}}>
                <span>{id}</span>
                <p>Lorem ipsum dolor sit amet, consectetu</p>
            </div>
            <div>jsdjjsd</div>
            <div>september</div>

        </div>
    )
}
export default ProjectDetails