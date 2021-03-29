import React from "react";
import {NavLink} from "react-router-dom";
import BasicTable from "../table"

const SignedInLinks = () => {
    return (
        <>
            <ul>
                <li><NavLink to='/newproject'>New Project</NavLink></li>
            </ul>
            <BasicTable/>
        </>
    )
}
export default SignedInLinks