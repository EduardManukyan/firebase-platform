import React, {Component} from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
// import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";

class Dashboard extends Component {
    render() {
        const{projects}=this.props
        return (
            <div>
                <ProjectList projects={projects}/>
                <Notifications/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        projects:state.firestore.ordered.projects
    }


}
export  default compose(
    connect(mapStateToProps)
    // firestoreConnect([{collection:"project"}])
)(Dashboard)