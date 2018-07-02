import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Pagination from 'rc-pagination';
import { ToastContainer, toast } from 'react-toastify';
import { LineSpinFadeLoader } from 'react-pure-loaders';
import instance from "../../config";
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'rc-pagination/assets/index.css';

class Business extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            business_name:"",location:"",category:"",
            authenticated : localStorage.getItem('Token'),
            user_id :localStorage.getItem('user_id'),
            businesses:[],
            perpage:8,
            current:1,
            pages :1,
            prevpage:1,
            nextpage:1,
            count:1,
            loading:false
        };
    }
    // pagination onchange page handler
    onChange = (page) => {
        this.setState({loading:true});
        instance.get(`http://127.0.0.1:5000/api/v2/businesses?limit=${this.state.perpage}&page=${page}`)
        .then(response =>{
            this.setState({
                businesses:response.data.Businesses,
                current:response.data.Businesses.current,
                nextpage:response.data.Businesses.next,
                prevpage:response.data.Businesses.prev,
                count:response.data.Businesses.count,
                loading:false
                
            });
        })
        .catch(error => {
            this.setState({loading:false});
        })
    }

    // search function
    handlechange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        this.setState({loading:true});
        const { business_name, category, location} = this.state;
        instance.get(`/businesses?q=${business_name}&location=${location}&category=${category}`)
        .then(response => {
            this.setState({
                loading:false,
                businesses:response.data.Businesses,
            });
            this.props.history.push(`/businesses`);
        })
        .catch(error =>{
            this.setState({loading:false});
            toast.error("No results found");
        })

    };
    // fetching businesses
    componentDidMount(){
        this.setState({loading:true});
        instance.get(`http://127.0.0.1:5000/api/v2/businesses?limit=${this.state.perpage}&page=${this.state.current}`)
        .then(response => {
            this.setState({
                businesses : response.data.Businesses,
                current:response.data.Businesses.current,
                pages:response.data.Businesses.pages,
                nextpage:response.data.Businesses.next,
                prevpage:response.data.Businesses.prev,
                count:response.data.Businesses.count,
                loading:false
            });
        })
       
        .catch(error => {
            this.setState({loading:false});
        });
    }
    
render(){
    const{businesses, authenticated,loading, current,} = this.state;
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
            <ToastContainer   hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
            <Navbar />
            <div className="row" style={{padding:"0.5%"}}>
                <div className="col-md-2 " style={{margin:'auto'}}>
                <Link to="/addbusiness" className="btn btn-dark btn-sm">
                    <i className="fa fa-plus fa-lg"></i>   Add Business</Link>
                </div>
                <div className="col-md-8"  >
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <input className="form-control input-group-sm" name="business_name" placeholder="business name" onChange={this.handlechange} required/>
                    <input className="form-control input-group-sm" name="category" placeholder="category" onChange={this.handlechange} />
                    <input className="form-control input-group-sm" name="location" placeholder="location" onChange={this.handlechange} />
                    <button className="btn btn-secondary" nme="submit" id="submit">Search</button>
                </form>
               </div>
            </div>
           
           {businesses.map(business => 
           <div key={business.id}  className="col-md-8" style={{margin:'auto'}}>
                <div className="card" >
                    <div className="card-header" style={{textTransform: 'uppercase'}}>
                    Business Name : {business.business_name} 
                    </div><div>
                    <Link to={`/businesses/${business.id}`} className="btn btn-secondary btn-sm">
                    <i className="fa fa-dedent fa-lg"></i>   View Details</Link>
                    </div>
                </div>
            </div>
           )}

        <Pagination 
            onChange={this.onChange} 
            current={current} 
            total={20} 
            style={{ marginLeft:"40%", paddingTop:"1%"}}/>
           < Footer />
        </div>
        );
    }
 }
 export default Business
 
