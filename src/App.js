
import  React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import CreateBusiness from "./components/Business/CreateBusiness";
import Business from "./components/Business/BusinessList";
import BusinessView from "./components/Business/Business";
import ResetPassword from "./components/Auth/ResetPassword";
import EditBusiness from "./components/Business/EditBusiness";
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
