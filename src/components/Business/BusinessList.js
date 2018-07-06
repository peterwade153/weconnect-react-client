import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Pagination from 'rc-pagination';
import { ToastContainer} from 'react-toastify';
import { LineSpinFadeLoader } from 'react-pure-loaders';
import instance from "../../config";
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Search from '../Layout/Search';
import Cards from './BusinessLayout/BusinessCards';
import 'rc-pagination/assets/index.css';

/**
 * Display all businesses
 * Add business link
 *
 */

class Business extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authenticated : localStorage.getItem('Token'),
            user_id :localStorage.getItem('user_id'),
            businesses:[],
            perpage:6,
            current:1,
            pages :1,
            count:30,
            loading:false,
        };
    }
    // pagination onchange page handler
    onChange = (page) => {
        this.setState({loading:true});
        instance.get(`http://127.0.0.1:5000/api/v2/businesses?limit=${this.state.perpage}&page=${page}`)
        .then(response =>{
            this.setState({
                businesses:response.data.Businesses,
                current:response.data.current,
                nextpage:response.data.next,
                prevpage:response.data.prev,
                count:response.data.count,
                loading:false
            });
        })
        .catch(error => {
            this.setState({loading:false});
        })
    }

    // fetching businesses
    componentDidMount(){
        this.setState({loading:true});
        instance.get(`http://127.0.0.1:5000/api/v2/businesses?limit=${this.state.perpage}&page=${this.state.current}`)
        .then(response => {
            this.setState({
                businesses : response.data.Businesses,
                current:response.data.current,
                pages:response.data.pages,
                nextpage:response.data.next,
                prevpage:response.data.prev,
                count:response.data.count,
                loading:false,
            });
        })
       
        .catch(error => {
            this.setState({loading:false});
        });
    }
    // search callback to pick data from the search component
    searchData = (searchBusinesses) =>{
        this.setState({
            businesses:searchBusinesses
        })
    }
    
render(){
    const{businesses, authenticated,loading, current, count} = this.state;
    // block unauthorised users
    if (!authenticated){
        return <Redirect to = '/' />;
    }
    else if(authenticated && loading){
        return (
            <div>
            <ToastContainer hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
            <Navbar />
            <div className="col-md-5" style={{ marginTop:"20%", marginLeft:"40%"}}>
                <LineSpinFadeLoader
                color={'#000000'}
                loading={this.state.loading}
                />
           </div>
      </div>
          ); 
    }
    return(
        <div>
            <ToastContainer hideProgressBar={true} autoClose={5000} position="top-right" pauseOnHover />
            <Navbar />
            {/* Add business button */}
            <div className="row" style={{padding:"0.5%"}}>
                <div className="col-md-2 " style={{margin:'auto'}}>
                <Link to="/addbusiness" className="btn btn-dark btn-sm">
                    <i className="fa fa-plus fa-lg"></i>   Add Business</Link>
                </div>
                {/* search bar component */}
                <div className="col-md-8"  style={{margin:'auto'}}>
                <Search callbackFromBiz={this.searchData}/>
               </div>
            </div>
            {/* display businesses */}
            <div className="col-md-10"  >
            <Cards businesslist = {businesses}/>
            </div>
        <Pagination 
            onChange={this.onChange} 
            current={current} 
            total={count} 
            pageSize={this.state.perpage}
            style={{ marginLeft:"45%", paddingTop:"1%"}}/>
           < Footer />
        </div>
        );
    }
 }
 export default Business
 
