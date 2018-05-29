import React, { Component } from 'react';

class LoginForm extends React.Component{
    render(){
        <div>
            <form>
                    <div className="firstcontainer">
                    <div>
                        <img src="./static/user.jpeg" />
                    </div>
                    <h1 className="text-light text-center">WeConnect</h1>
                    <h6 className="text-light text-center">Bringing your business closer to people</h6>
                    <h5 className="text-info text-center">LOGIN</h5>
                    <div className="form-group">
                        <label className="text-light">Username: </label>
                        <input type="text" className="form-control" name="username" placeholder="Enter Username" required="" />
                    </div>
                    <div className="form-group">
                        <label className="text-light">Password:</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter password" required="" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-default">LOGIN</button>
                    </div>
                    <br />
                    <p className="text-light text-center">Not Registered? &nbsp; <a href="#" className="btn btn-secondary">SIGN UP</a></p>
                    </div>
            </form>
        </div>
    }
}

export default LoginForm