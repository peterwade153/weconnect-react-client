import React from 'react';
import { Link } from "react-router-dom";


class Navbar extends React.Component{

render(){
    return(
        <div>
           <nav className="navbar navbar-expand-sm navbar-custom bg-dark">
                <h2 className="navbar-brand text-light">WeConnect</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
                    <i className="fa fa-bars fa-lg py-1 text-white"></i>
                </button>
                <div className="navbar-collapse collapse" id="navbarCustom">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link btn btn-outline-light" style={{marginLeft:'1%'}} href="/businesses">Businesses</a>
                        </li>
                        <li className="nav-item "  style={{paddingLeft:'2%'}}>
                            <a className="nav-link btn btn-outline-light" href="/reviews">Reviews</a>
                        </li>
                    </ul>
                    <form className="form-inline" action="" style={{marginLeft:'50%'}}>
                        <input className="form-control"  type="text" name="search" placeholder="search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    <div className="btn-group" >
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" style={{marginRight:'5%'}} ><i className="fa fa-user fa-fw "/></button>
                <div className="dropdown-menu" >
                    <Link to="/logout">Logout</Link>
                   <p> <Link to="/resetpassword" >Reset-password</Link></p>
                </div>
                </div>
                </div>
            </nav>
        </div>

    );
    }
 }

 export default Navbar;
