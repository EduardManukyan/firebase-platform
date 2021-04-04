import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/project/CreateProject";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Switch>
                    <Route path='/new_project' component={CreateProject}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
