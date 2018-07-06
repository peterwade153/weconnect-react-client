import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import instance from "../../config";

/**
 * Form for user signup
 *
 */

class Signup extends React.Component{
    constructor(props){
        super(props);
        // initial state
        this.state = {
            email:"",
            username:"",
            password:"",
            registered: false
        };
    }
    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
            })
        };

    onSubmit = e =>{
        e.preventDefault();
        instance.post("/auth/register", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        })
        .then(response => {
            this.setState({ registered: true});
            // redirect to home after login
            this.props.history.push("/");
            toast.success(response.data.Message);
        })
       .catch(error => {
            toast.error("Action failed");
        })
    };

    render(){
        const{username, email, password} = this.state;

        return(
            <div>
                <ToastContainer   hideProgressBar={true} autoClose={5000} />
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
                                    <h3 className="text-dark text-center font-weight-bold">Create Account </h3>
                                    <div className="form-group">
                                        <label className="text-dark">Username: </label>
                                        <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fa fa-user fa-fw"></i>
                                                    </span>
                                                </div>
                                            <input value={username} name="username" id="username" 
                                            onChange={e => this.onChange(e)} className="form-control"  placeholder="Username" type="text" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                       <i className="fa fa-envelope fa-fw"></i>
                                                    </span>
                                                </div>
                                            <input value={email} name="email" id="email" className="form-control" 
                                            onChange={e => this.onChange(e)} placeholder="Email address" type="email" required/>
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
                                            <input value={password} name="password" id="password" 
                                            onChange={e => this.onChange(e)} className="form-control"  placeholder="Password" type="password" required/>
                                        </div>
                                        <br />
                                        <div className="text-center">
                                           <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary">SignUp</button>
                                        </div>
                                       <br />
                                       <p className="text-dark text-center">Already have an account?&nbsp;
                                       <Link className="btn btn-sm btn-outline-secondary" to="/" >Login</Link></p>
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
export default Signup
