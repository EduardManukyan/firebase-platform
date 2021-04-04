import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import BasicTable from "../table/Table"

const style = {
    display: '[flex]',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20px',
    paddingTop: '20px',
}
const SignedInLinks = () => {
    return (
        <>
                  <span>
                      <Link style={style} to='/project'>Table project </Link>
                  </span>
            <Switch>
                <Route path="/project">
                    <BasicTable/>
                </Route>
            </Switch>
        </>
    )
}
export default SignedInLinks