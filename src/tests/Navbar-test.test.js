import React from 'react';
import { shallow } from 'enzyme';
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';

describe("Navbar component", () =>{
    it("should render title", () => {
        const wrapper = (shallow(<Navbar />));
        const title = <h2 className="navbar-brand text-light">WeConnect</h2>
        expect(wrapper.contains(title)).toEqual(true);
    })

    it("should render business button", () => {
        const wrapper = (shallow(<Navbar />));
        const button =  <a className="nav-link btn btn-outline-light" style={{marginLeft:'1%'}} href="/businesses">Businesses</a>
        expect(wrapper.contains(button)).toEqual(true);
    })

    it("should render logout button", () => {
        const wrapper = (shallow(<Navbar />));
        const button = <Link to="/logout">Logout</Link>
        expect(wrapper.contains(button)).toEqual(true);
    })

    it("should render reset password button", () => {
        const wrapper = (shallow(<Navbar />));
        const button = <p> <Link to="/resetpassword" >Reset-password</Link></p>
        expect(wrapper.contains(button)).toEqual(true);
    })
});
