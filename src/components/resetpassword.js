import React from 'react';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import instance from "../config";
import Navbar from "./navbar";

 class ResetPassword extends React.Component{
    constructor(props){
        super(props);
        //initial states
        this.state = {
            email:"",
            new_password:"",
            authenticated : localStorage.getItem('Token')
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

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
            // redirect to businesses
            this.props.history.push("/addbusiness")
            // pass message to user 
            toast.success(response.data.Message);
        })
        .catch(error => {
            // pass error message
            toast.error("action failed");
        })
    };

    render(){
        //extracting data from the object, using destructuring
        const{email, new_password, authenticated } = this.state;
        // block unauthorised users
        if (!authenticated){
            return <Redirect to = '/' />;
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
                                    <i className="fa fa-archive fa-fw" />
                                    </span>
                                </div>
                                <input value={this.state.email} name="email" className="form-control" onChange={e => this.onChange(e)} placeholder="Enter Email address" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-dark">New Password: </label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-bookmark fa-fw" />
                                    </span>
                                </div>
                                <input value={this.state.new_password} name="new_password" className="form-control"  onChange={e=> this.onChange(e)}  placeholder="Enter New password" />
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
       </div>
        );
    }
}
export default ResetPassword
