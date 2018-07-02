import  React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import CreateBusiness from "./components/business/createbusiness";
import Business from "./components/business/business";
import BusinessView from "./components/business/businessview";
import ResetPassword from "./components/auth/resetpassword";
import EditBusiness from "./components/business/editbusiness";
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
