import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import instance from "../../config";
import { LineSpinFadeLoader } from 'react-pure-loaders';

class Login extends React.Component{
    constructor(props){
        super(props);
        //initial state
        this.state = {
            email : "",
            password : "",
            Token : "",
            user_id  : "",
            loading :false
        };
    }
    //change event
    onChange = e => {
        this.setState({
   	        [e.target.name]:e.target.value
        })
    };
    // submit event
    onSubmit = e => {
        e.preventDefault();
        this.setState({loading:true});
        instance.post("/auth/login",{
            email : this.state.email,
            password : this.state.password
        })
        .then(response =>{
            // pick token from API and the user ID
            localStorage.setItem('Token', response.data.Token);
            localStorage.setItem('user_id', response.data.user_id);

            this.setState({
                Token:response.data.Token,
                user_id :response.data.user_id,
                loading:false
            });
            this.props.history.push("/businesses/");
            toast.success(response.data.Message);
        })
        .catch(error => {
            this.setState({loading:false});
            toast.error("Login Failed!, SignUp to create an account");
        })
    };
    render(){
        const{email, password, loading}=this.state
        if(loading){
            return (
                <div>
                <nav className="navbar navbar-light navbar-toggleable-md bg-dark">
                <span className="navbar-text" style={{marginLeft:'10%'}}>
                    <h2 className="text-light">WeConnect</h2><span className="text-light">
                                             Bringing your business closer to people</span>
                </span>
            </nav>
            <br />
                <div className="col-md-5" style={{ marginTop:"20%", marginLeft:"40%"}}>
                <LineSpinFadeLoader
                  color={'#A9A9A9'}
                  loading={this.state.loading}
                  radius={10}
                />
          </div>
          </div>
              ); 
        }
        return(
            <div>
                <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
                <nav className="navbar navbar-light navbar-toggleable-md bg-dark">
                   <span className="navbar-text" style={{marginLeft:'10%'}}>
                        <h2 className="text-light">WeConnect</h2><span className="text-light">
                        Bringing your business closer to people</span>
                    </span>
                </nav>
                <br />
                <div>
                   <form className="Login" style={{margin:'auto'}} onSubmit={this.onSubmit} >
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
                                            <input value={email} name="email" className="form-control" id="email" 
                                            onChange={e => this.onChange(e)} placeholder="Email address" type="email" required />
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
                                            onChange={e => this.onChange(e)} className="form-control"  placeholder="Enter Password" 
                                            type="password" required/>
                                        </div>
                                        <br />
                                        <div className="text-center">
                                           <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary">Login</button>
                                        </div>
                                       <br />
                                       <p className="text-dark text-center" >Have no account? <Link className="btn btn-sm btn-outline-secondary" to="/signup" >SignUp</Link></p>
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
