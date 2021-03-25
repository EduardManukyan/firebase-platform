import React from "react";
import {Link} from "react-router-dom";
import SignedInLinks from "./SingedInLinks";
import SignedOutLinks from "./SingedOutLinks"
import {connect} from 'react-redux'

const Navbar=()=>{
return(
     <nav>
         <div>
             <Link to='/'> Home Page</Link>
             <SignedInLinks/>
             <SignedOutLinks/>
         </div>
     </nav>
)
}
const mapStateToProps=(state)=>{
    console.log(state);
    return{

    }


}
export default connect(mapStateToProps)(Navbar)