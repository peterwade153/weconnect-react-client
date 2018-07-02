import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Cards to display businesses
 *  show business name and a button that links to 
 * view business details
 *
 */

class Cards extends React.Component{

    render(){
        const businesses = this.props.businesslist;
        return(
            <div className="row" style={{marginLeft:'25%'}}>
                {businesses.map(business => 
                <div className="card col-md-5" key={business.id} style={{ margin:"2%", display:"inline-block", backgroundColor:"#DCDCDC"}} >
                    <div className>
                        <div >
                        <div className="card-body" style={{}}>
                            <h4 className="card-title">{business.business_name}</h4>
                            <Link to={`/businesses/${business.id}`} className="btn btn-secondary btn-sm">View Details</Link>
                        </div>
                        </div>
                    </div>
                </div>
                  )}
            </div>
        );
    }
}

export default Cards;
