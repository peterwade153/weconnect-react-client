import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LineSpinFadeLoader } from 'react-pure-loaders';
import instance from "../../config";
import Navbar from '../navbar';


class EditBusiness extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            business_name:"",
            location:"",
            category:"",
            authenticated : localStorage.getItem('Token'),
            loading:false
        };
    }
    componentDidMount(){
        this.setState({loading:true});
        let id = this.props.match.params.id;
        instance.get(`/businesses/${id}`)
        .then(response => {
            this.setState({
                business_name : response.data.Business.business_name,
                location : response.data.Business.location,
                category : response.data.Business.category,
                loading:false
            });
        })
        .catch(error => {});
    }
    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    onSubmit = e => {
        this.setState({loading:true});
        e.preventDefault();
        let id = this.props.match.params.id;
        instance.put(`/businesses/${id}`,{
            business_name: this.state.business_name,
            location: this.state.location,
            category: this.state.category,
            loading:false
        })
        .then(response => {
            // redirect to businesses
            this.props.history.push("/businesses")
            toast.success(response.data.Message);
        })
        .catch(error => {
            toast.error("action failed");
        })
    };

    render(){
        const{ authenticated, business_name, location, category, loading } = this.state;
        // block unauthorised users
        if (!authenticated){
            return <Redirect to = '/' />;
        }
        else if(authenticated && loading){
            return (
                <div>
            <Navbar />
                <div className="col-md-5" style={{ marginTop:"20%", marginLeft:"40%"}}>
                    <LineSpinFadeLoader
                    color={'#A9A9A9'}
                    loading={this.state.loading}
                    />
               </div>
          </div>
              ); 
        }
        return(
            <div>
                <ToastContainer   hideProgressBar={true} 
                                  autoClose={5000} 
                                  position="top-right" 
                                  pauseOnHover />
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
                            <h3 className="text-dark text-center">Edit Business</h3>
                            <div className="form-group">
                                <label className="text-dark">Business Name: </label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-archive fa-fw" />
                                    </span>
                                </div>
                                <input value={business_name} name="business_name" className="form-control" 
                                onChange={e => this.onChange(e)} placeholder="Enter Business Name" />
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
                                <input value={location} name="location" className="form-control" 
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
                                <input value={category} name="category" className="form-control"  
                                onChange={e=> this.onChange(e)}  placeholder="Enter Category" />
                                </div>
                                <br />
                                <div className="text-center">
                                <button type="submit" name="submit" id="submit" value="submit" 
                                    className="btn btn-secondary">Edit Business</button>
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
export default EditBusiness

