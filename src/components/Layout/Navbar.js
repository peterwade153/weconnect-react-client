import React from 'react';

/**
 * Navigation bar displaying Businesses link and 
 * a Drop down showing the Logout and ResetPassword Links
 * 
 *
 */

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.username = localStorage.getItem('username');
    }

render(){
    return(
        <div>
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md py-md-2">
                <h2 className="navbar-brand text-light">WeConnect</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item  "><a href="/businesses" className="nav-link text-light">Businesses</a></li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user fa-fw "/>
                              {this.username}
                            </a>
                            <div className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/logout"><i className="fa fa-sign-out fa-fw "/>Logout</a>
                            <a className="dropdown-item" href="/resetpassword"><i className="fa fa-unlock fa-fw "/>Reset Password</a>
                            </div>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>

    );
    }
 }

 export default Navbar;
