import React from 'react';

class Navbar extends React.Component{

render(){
    return(
        <div>
           <nav className="navbar navbar-expand-sm navbar-custom bg-dark">
                <h2 className="navbar-brand text-light">WeConnect</h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
                    <i class="fa fa-bars fa-lg py-1 text-white"></i>
                </button>
                <div class="navbar-collapse collapse" id="navbarCustom">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link btn btn-outline-secondary" style={{marginLeft:'1%'}} href="/businesses">Businesses</a>
                        </li>
                        <li class="nav-item "  style={{paddingLeft:'2%'}}>
                            <a class="nav-link btn btn-outline-secondary" href="/reviews">Reviews</a>
                        </li>
                    </ul>
                    <form className="form-inline" action="" style={{marginLeft:'52%'}}>
                        <input className="form-control"  type="text" name="search" placeholder="search" />
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>
                <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" style={{marginRight:'5%'}} ><i className="fa fa-user fa-fw "/></button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/logout">Logout</a>
                </div>
                </div>
            </nav>
        </div>

    );
    }
 }

 export default Navbar