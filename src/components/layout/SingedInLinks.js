import React from "react";
import {NavLink} from "react-router-dom";

const SignedInLinks = () => {
    return (
            <ul>
                <li><NavLink to='/newproject'>New Project</NavLink></li>
                <li><NavLink to='/logout'>Log Out</NavLink></li>
                <li><NavLink to='/'>NN </NavLink></li>
            </ul>
    )
}
export default SignedInLinks