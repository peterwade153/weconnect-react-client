import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import instance from "../config";

 class CreateBusiness extends React.Component{
    constructor(props){
        super(props);
        //initial states
        this.state = {
            business_name:"",
            location:"",
            category:"",
            registered:false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit = e =>{
        e.preventDefault();
        instance.post("/businesses",{
            business_name: this.state.business_name,
            location: this.state.location,
            category: this.state.category
        })
        .then(response =>{
            this.setState({registered:true})
            // redirect to businesses
            this.props.history("/")
            // pass message to user 
            toast.success(response.data.Message);
        })
        .catch(err =>{
            // pass error message
            toast.error(err.data.Message);
        })
    };

    render(){
        //extracting data from the object, using destructuring
        const{business_name, location, category } = this.state;

        return(
            <div>
                <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />

                <nav className="navbar navbar-light navbar-toggleable-md bg-dark">
                   <span className="navbar-text" style={{marginLeft:'10%'}}>
                        <h2 className="text-light">WeConnect</h2><span className="text-light">Bringing your business closer to people</span>
                    </span>
                     <ul className="navbar nav justify-content-end">
                        <li className="nav-item">
                            <h4><a className="nav-link text-light" >Businesses</a></h4>
                         </li>
                        <li className="nav-item">
                             <h4><a className="nav-link text-light" >Reviews</a></h4>
                         </li>
                     </ul>
                </nav>
                <br />
                <div>
                    <form style={{margin: "auto"}} onsubmit="{this.onSubmit}">
                        <div className="container-fluid" style={{paddingTop:"2%"}}>
                        <div className="row">
                            <div className="col-md-5" style={{margin: "auto"}}>
                            <h3 className="text-dark text-center">Register Business Here</h3>
                           
                            <div className="form-group">
                                <label className="text-dark">Business Name: </label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-archive fa-fw" />
                                    </span>
                                </div>
                                <input value={this.state.business_name} name="business_name" onchange={e => this.onChange(e)} className="form-control"  placeholder="Enter Business Name" />
                                </div>
                           
                            </div>
                            <div className="form-group">
                                <label>Location: </label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-map-marker fa-fw" />
                                    </span>
                                </div>
                                <input value={this.state.location} name="location" className="form-control" onchange={e => this.onChange(e)} placeholder="Business Location" />
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
                                <input value={this.state.Category} name="category" onchange={e=> this.onChange(e)} className="form-control"  placeholder="Enter Category" />
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