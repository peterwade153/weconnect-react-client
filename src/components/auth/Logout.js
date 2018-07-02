import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


 class Logout extends React.Component{

    componentDidMount(){
        localStorage.removeItem('Token')
        localStorage.removeItem('user_id')
        // redirect back to login
        this.props.history.push('/');
        toast.success("Logged out Successfully");
    }

    render(){
        return(
            <div>
                <ToastContainer autoClose={2000}hideProgressBar={true} />
            </div>
        );
    }

 }

export default Logout;
