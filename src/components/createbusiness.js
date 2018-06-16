import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import instance from "../config";
import Navbar from "./navbar";

 class CreateBusiness extends React.Component{
    constructor(props){
        super(props);
        //initial states
        this.state = {
            business_name:"",
            location:"",
            category:"",
            authenticated : window.localStorage.getItem('Token')
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
        instance.post("/businesses",{
            business_name: this.state.business_name,
            location: this.state.location,
            category: this.state.category
        })
        .then(response => {
            this.setState({registered:true})
            // redirect to businesses
            this.props.history("/")
            // pass message to user 
            toast.success(response.data.Message);
        })
        .catch(err => {
            // pass error message
            toast.error(err.response.data.Message);
        })
    };

    render(){
        //extracting data from the object, using destructuring
        const{business_name, location, category } = this.state;

        return(
            <div>
                <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
                <Navbar />
                <div>
                    <form style={{margin: "auto"}} onsubmit={this.onSubmit}>
                        <div className="container-fluid" style={{paddingTop:"2%"}}>
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
                                <input value={this.state.business_name} name="business_name" className="form-control" onChange={e => this.onChange(e)} placeholder="Enter Business Name" />
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
                                <input value={this.state.location} name="location" className="form-control" onChange={e => this.onChange(e)} placeholder="Business Location" />
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
                                <input value={this.state.Category} name="category" className="form-control"  onchange={e=> this.onChange(e)}  placeholder="Enter Category" />
                                </div>
                                <br />
                                <div className="text-center">
                                <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary">Register</button>
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