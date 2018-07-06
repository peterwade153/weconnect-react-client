import React from 'react';
import footer from './Styles/styles.css';

/**
 * Displays footer
 *
 */
class Footer extends React.Component{

    render(){
        return(
            <div>
               <div className={footer}>
               <footer className="text-dark" style={{ marginLeft:"40%"}} > &copy; Copyright 2018 Weconnect INC</footer>
               </div>
            </div>


        );
    };
}
export default Footer
