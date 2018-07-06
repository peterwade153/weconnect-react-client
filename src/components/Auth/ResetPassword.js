import React from 'react';
import {Redirect, Router} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import instance from "../../config";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

/**
 * Form for user password reset
 *
 */

 class ResetPassword extends React.Component{
    constructor(props){
        super(props);
        //initial states
        this.state = {
            email:"",
            new_password:"",
            authenticated : localStorage.getItem('Token')
        };
    }
    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        instance.post("/auth/reset-password",{
            email: this.state.email,
            new_password: this.state.new_password,
        })
        .then(response => {
            this.props.history.push("/businesses")
            // pass message to user 
            toast.success(response.data.Message);
        })
        .catch(error => {
            toast.error("action failed");
        })
    };

    render(){
        const{email, new_password, authenticated } = this.state;
        // block unauthorised users
        if (!authenticated){
            return <Router><Redirect to = '/' /></Router>;
        }
        return(
            <div>
                <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
                <Navbar />
                <div>
                    <form style={{margin: "auto"}} onSubmit={this.onSubmit}>
                        <div className="container-flud" style={{paddingTop:"2%"}}>
                        <div className="row">
                            <div className="col-md-5" style={{margin: "auto"}}>
                            <h3 className="text-dark text-center">Password Reset</h3>
                            <div className="form-group">
                                <label className="text-dark">Email: </label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-envelope fa-fw" />
                                    </span>
                                </div>
                                <input value={email} name="email" id="email" className="form-control" type="email"
                                onChange={e => this.onChange(e)} placeholder="Enter Email address" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark">New Password: </label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-lock fa-fw" />
                                    </span>
                                </div>
                                <input value={new_password} name="new_password" id="new_password" className="form-control" type="password"
                                onChange={e=> this.onChange(e)}  placeholder="Enter New password" />
                                </div>
                                <br />
                                <div className="text-center">
                                <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary">Reset</button>
                                </div>
                                <br />
                            </div>
                        </div>
                     </div>
                    </div>
                </form>
            </div>
            <Footer />
       </div>
        );
    }
}
export default ResetPassword
