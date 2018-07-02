import React from 'react';

class Footer extends React.Component{

    render(){
        return(
            <div style={{ width:"100%",bottom:"-1%",marginTop:"1%" ,Position:"fixed"}}>
            <footer className="navbar navbar-fixed-bottom bg-dark text-light"> &copy; Copyright 2018 Weconnect INC</footer>
            </div>
        );
    };
}
export default Footer
