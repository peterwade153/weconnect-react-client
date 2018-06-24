import React from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import instance from "../../config";
import Navbar from "../navbar";

 class CreateBusiness extends React.Component{
    constructor(props){
        super(props);
        //initial states
        this.state = {
            business_name:"",
            location:"",
            category:"",
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
        instance.post("/businesses",{
            business_name: this.state.business_name,
            location: this.state.location,
            category: this.state.category,
        })
        .then(response => {
            this.props.history.push("/businesses")
            toast.success(response.data.Message);
        })
        .catch(error => {
            toast.error("action failed");
        })
    };

    render(){
        const{ authenticated, business_name, location, category } = this.state;
        // block unauthorised users
        if (!authenticated){
            return <Redirect to = '/' />;
        }
        return(
            <div>
            <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
                <Navbar />
                <div className="row" style={{padding:"0.5%"}}>
                <Link to="/businesses" className="btn btn-secondary btn-sm" style={{marginLeft:"10%"}}>
                    <i className="fa fa-arrow-left fa-lg"></i> Back</Link>
            </div>
                <div>
                <form style={{margin: "auto"}} onSubmit={this.onSubmit}>
                    <div className="container-flud" style={{paddingTop:"2%"}}>
                    <div className="row">
                        <div className="col-md-5" style={{margin: "auto"}}>
                        <h3 className="text-dark text-center">Register Business</h3>
                        <div className="form-group">
                            <label className="text-dark">Business Name: </label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-archive fa-fw" />
                                </span>
                            </div>
                            <input value={business_name} name="business_name" id="business_name"className="form-control" 
                            onChange={e => this.onChange(e)} placeholder="Business Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Location: </label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-map-marker fa-fw" />
                                </span>
                            </div>
                            <input value={location} name="location" id="location" className="form-control" 
                            onChange={e => this.onChange(e)} placeholder="Business Location" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Category: </label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-bookmark fa-fw" />
                                </span>
                            </div>
                            <input value={category} name="category" id="category"className="form-control"  
                            onChange={e=> this.onChange(e)}  placeholder="Enter Category" />
                            </div>
                            <br />
                            <div className="text-center">
                            <button type="submit" name="submit" id="submit" value="submit" 
                            className="btn btn-secondary">Register</button>
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
export default CreateBusiness
