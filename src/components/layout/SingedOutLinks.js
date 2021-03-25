import React from "react";
import {NavLink} from "react-router-dom";

const SignedOutLinks = () => {
    return (
        <ul>
            <li><NavLink to='/'>Signup</NavLink></li>
            <li><NavLink to='/login'>LogIn</NavLink></li>
        </ul>
    )
}
export default SignedOutLinks