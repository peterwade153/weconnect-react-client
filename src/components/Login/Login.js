import React, { Component } from 'react';

 class Login extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            email:"",
            password:"",
            isAuthenticated: false
         };
     }

 }

 export default Login