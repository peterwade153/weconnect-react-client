import React from 'react';
import instance from "../../config";
import {toast} from 'react-toastify';

/**
 * Form for searching a business
 * input fields to search by business_name, category and location
 *
 */

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            business_name:"",
            location:"",
            category:""
        }
    }
    handlechange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        instance.get(`/businesses?q=${this.state.business_name}&location=${this.state.location}&category=${this.state.category}`)
        .then(response => {
            this.props.callbackFromBiz(response.data.Businesses);
        })
        .catch(error =>{
            toast.error("No results found");
        })
    };
    render(){
        return (
            <div>
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <input className="form-control input-group-sm" 
                    name="business_name"
                    id="business_name"
                    placeholder="business name" 
                    onChange={this.handlechange} 
                    required/>
                    <input className="form-control input-group-sm" 
                    name="category"
                    id="category"
                    placeholder="category" 
                    onChange={this.handlechange} />
                    <input className="form-control input-group-sm" 
                    name="location"
                    id="location"
                    placeholder="location" 
                    onChange={this.handlechange} />
                    <button className="btn btn-secondary" 
                    name="submit" 
                    id="submit">Search</button>
                </form>
            </div>
        )
    }
    
}
export default Search

