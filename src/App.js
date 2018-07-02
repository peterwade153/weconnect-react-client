
import  React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import CreateBusiness from "./components/business/CreateBusiness";
import Business from "./components/business/Business";
import BusinessView from "./components/business/BusinessView";
import ResetPassword from "./components/auth/ResetPassword";
import EditBusiness from "./components/business/EditBusiness";
import "react-toastify/dist/ReactToastify.css";


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/businesses" component={Business} />
                    <Route exact path="/addbusiness" component={CreateBusiness} />
                    <Route exact path="/businesses/:id" component={BusinessView} />
                    <Route exact path="/resetpassword" component={ResetPassword} />
                    <Route exact path="/editbusiness/:id" component={EditBusiness}/>
                </Switch>
            </div>
        );
    }
}

export default App;
