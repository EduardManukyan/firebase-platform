import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProject from "./components/project/CreateProject";


class  App extends Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/newproject' component={CreateProject}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
