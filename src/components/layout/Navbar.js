import React from "react";
import {Link} from "react-router-dom";
import SignedInLinks from "./SingedInLinks";
import {connect} from 'react-redux'

const Navbar=()=>{
return(
     <nav>
         <div>
             <Link to='/'> Home Page</Link>
             <SignedInLinks/>
         </div>
     </nav>
)
}
const mapStateToProps=(state)=>{
    return{
    }


}
export default connect(mapStateToProps)(Navbar)