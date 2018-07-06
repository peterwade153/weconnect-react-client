import React from 'react';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LineSpinFadeLoader } from 'react-pure-loaders';
import instance from "../../config";
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

/**
 * Displays details for a business
 * and the business reviews
 * Review are displayed latest first
 *
 */

class BusinessView extends React.Component{
    constructor(props){
        super(props);
        // initial states
        this.state = {
            authenticated : localStorage.getItem('Token'),
            user_id :localStorage.getItem('user_id'),
            business : [],
            reviews:[],
            review:"",
            loading:false
        }
    };
    // fetching business to display
    componentDidMount(){
        this.setState({loading:true});
        let id = this.props.match.params.id;
        instance.get(`/businesses/${id}`)
        .then(response => {
            this.setState({
                business : response.data.Business,
            });
            // fetching the business' reviews
            instance.get(`/businesses/${id}/reviews`)
            .then(newresponse => {
                this.setState({
                    reviews : (newresponse.data.Review).reverse(),
                    loading:false
                })
            });
        })
        .catch(error => {
            toast.error("Action Failed!");
        });
    }
    // reviewing business
    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit = e => {
        this.setState({loading:true});
        let id = this.props.match.params.id
        e.preventDefault();
        instance.post(`/businesses/${id}/reviews`, {
            review:this.state.review,
            loading:false
        })
        .then(response => {
            this.props.history.push(`/businesses/${id}`)
            toast.success(response.data.Message);
            // fetching all reviews to include most recent
            instance.get(`/businesses/${id}/reviews`)
            .then(newresponse =>{
                this.setState({
                    reviews : (newresponse.data.Review).reverse(),
                    loading:false,
                    review:""
                });
            })
           })
        .catch(error =>{
            toast.error("Action failed");
        })
    }
    // // deleting a business
    deleteHandler = (e) =>{
        e.preventDefault();
        this.setState({loading:true});
        this.onDelete(this.props.match.params.id)
    }
    onDelete(id){
        instance.delete(`/businesses/${id}`)
        .then(() => {
            this.props.history.push(`/businesses`);
            this.setState({loading:false});
            toast.success("Business deleted successfully");
        })
        .catch(() =>{
            this.setState({loading:false});
            toast.error("Action failed");
        })
    }

render(){
    const{business, authenticated, user_id , reviews, loading, review} = this.state;
    // block unauthorised users
    if (!authenticated){
        return <Redirect to = '/' />;
    }
    else if(authenticated && loading){
        return (
            <div>
        <Navbar />
        <ToastContainer  hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
            <div className="col-md-5" style={{ marginTop:"20%", marginLeft:"40%"}}>
                <LineSpinFadeLoader
                color={'#000000'}
                loading={loading}
                radius={10}
                />
           </div>
      </div>
          ); 
    }
    return(
        <div>
            <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
            <Navbar />
            <div className="row" style={{padding:"0.5%"}}>
                <a href="/businesses" className="btn btn-secondary btn-sm" style={{marginLeft:"10%"}}>
                    <i className="fa fa-arrow-left fa-lg"></i> Back</a>
            </div>
           <div  className="col-md-8" style={{margin:'auto'}}>
                <div className="card" key={business.id} >
                    <div className="card-header font-weight-bold" style={{textTransform: 'uppercase'}}>
                    Business Name : {business.business_name}
                    </div>
                    <div className="card-body">
                        <p className="card-title" style={{textTransform: 'uppercase'}}>Category : {business.category}</p>
                        <p className="card-text" style={{textTransform: 'uppercase'}}>Location : {business.location}</p>
                        <hr />
                        {/* section for showing either edit and delete for business owners
                        and review for non business owners */}
                       { business.owner == user_id ? (
                        <div>
                           <a className="btn btn-secondary btn-sm" style={{marginRight:"1%"}}href={`/editbusiness/${business.id}`}>
                           <i className="fa fa-pencil fa-lg" ></i> Edit </a> 
                               <a className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
                           <i className="fa fa-trash-o fa-lg"></i> Delete</a>
                           </div>
                       ) : (
                        <div className="col-md-6" style={{marginLeft:"0%"}}>
                             <form onSubmit={this.onSubmit}> 
                             <h5 className="card-header font-weight-bold">Add review</h5>   
                                <div className="form-group" >
                                    <textarea className="form-control" id="review" name="review" value={review} 
                                    onChange={e => this.onChange(e)} placeholder="Enter review" required />
                                    <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary" 
                                    style={{marginTop:"2%"}}>Submit Review</button>
                                </div> 		
                            </form>
                        </div>
                       )}
                    </div>
                </div>
            {/* modal to confirm deleting */}
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Confirm to delete business</h5>
                    </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                        <a className="btn btn-danger btn-sm" onClick={this.deleteHandler} data-dismiss="modal">
                            <i className="fa fa-trash-o fa-lg"></i> Delete</a>
                    </div>
                    </div>
                </div>
            </div>
          {/* Busieness reviews */}
          <div  style={{backgroundColor:"#DCDCDC"}}>
          <h4 className="card-header font-weight-bold"> Reviews </h4>
                   {reviews.map(review => 
                    <div key={review.id} style={{margin:'auto'}}>
                          <ul><li>
                           <h6>{review.review}</h6> 
                           <pre>Reviewed by: <span>{review.review_author}</span>{`   `} Review Date: <span>{review.reviewed_on}</span></pre>
                            </li>
                            </ul>
                        </div>
                    )}
               </div>
               </div>
               
            < Footer />
        </div>
        );
    }
 }
 export default BusinessView
 
