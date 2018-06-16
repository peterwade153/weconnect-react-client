import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import instance from "../config";

class Login extends React.Component{
    constructor(props){
        super(props);
        //initial state
        this.state = {
            email:"",
            password:"",
            isAuthenticated: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    //change event
    onChange = e =>{
        this.setState({
   	        [e.target.name]:e.target.value
        })
    };
    // submit event
    onSubmit = e =>{
        e.preventDefault();

        instance.post("/auth/login",{
            email:this.state.email,
            password:this.state.password
        })
        .then(response =>{
            this.setState({isAuthenticated:true});
            // redirect to homepage
            this.props.history.push("/");

            //pass message login success
            toast.success(response.data.Message);
        })
        .catch(response =>{
            //pass failure message
            toast.error("Login failed");
        })
    };
    render(){

        return(
            <div>
                 <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
                <nav className="navbar navbar-light navbar-toggleable-md bg-dark">
                   <span className="navbar-text" style={{marginLeft:'10%'}}>
                        <h2 className="text-light">WeConnect</h2><span className="text-light">Bringing your business closer to people</span>
                    </span>
                </nav>
                <br />
                <div>
                   <form style={{margin:'auto'}} onSubmit={this.onSubmit}>
                        <div className="container-fluid" style={{paddingTop:"2%"}}>
                            <div className="row">
                                <div className="col-md-5" style={{margin:'auto'}}>
                                    <h3 className="text-dark text-center font-weight-bold">Login</h3>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                       <i className="fa fa-envelope fa-fw"></i>
                                                    </span>
                                                </div>
                                            <input value={this.state.email} name="email" className="form-control" onChange={e => this.onChange(e)} placeholder="Email address" required="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark">Password: </label>
                                        <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock fa-fw"></i>
                                                </span>
                                                </div>
                                            <input value={this.state.password} name="password" onChange={e => this.onChange(e)} className="form-control"  placeholder="Enter Password" required="" />
                                        </div>
                                        <br />
                                        <div className="text-center">
                                           <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary">Login</button>
                                        </div>
                                       <br />
                                       <p className="text-dark text-center">Have no account?&nbsp; <Link to="/signup" >SignUp</Link></p>
                                   </div>
                            </div>
                        </div>
                       </div>
                    </form>
                </div>
            </div>
        )
    }

}
export default Login