import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import CreateProject from "./components/project/CreateProject";
import SignIn from "./components/auth/SignIn";


class  App extends Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/project/:id' component={ProjectDetails}/>
                        <Route path='/newproject' component={CreateProject}/>
                        <Route path={"/login"} component={SignIn}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
