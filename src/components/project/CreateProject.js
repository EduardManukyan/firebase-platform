import React, {Component} from "react";
import {connect} from "react-redux";
import {createProject, getProjects, deleteProject} from "../../store/actions/projectAction";

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState(({
            [e.target.id]: e.target.value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }


    handleDelete = (e) => {
        this.props.deleteProject()
    }

    render() {
        return (
            <div style={{backgroundColor: "red"}}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create new project</h5>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => {
            dispatch(createProject(project));
        },

        deleteProject: () => {
            dispatch(deleteProject());
        },
    }

}
export default connect(null, mapDispatchToProps)(CreateProject)