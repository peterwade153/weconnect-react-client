import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../components/Layout/Navbar';

describe("Navbar component", () =>{
    it("should render title", () => {
        const wrapper = (shallow(<Navbar />));
        const title = <h2 className="navbar-brand text-light">WeConnect</h2>
        expect(wrapper.contains(title)).toEqual(true);
    })

    it("should render business button", () => {
        const wrapper = (shallow(<Navbar />));
        const button =<li className="nav-item  "><a href="/businesses" className="nav-link text-light">Businesses</a></li>

        expect(wrapper.contains(button)).toEqual(true);
    })

    it("should render logout button", () => {
        const wrapper = (shallow(<Navbar />));
        const button = <a className="dropdown-item" href="/logout"><i className="fa fa-sign-out fa-fw "/>Logout</a>
        expect(wrapper.contains(button)).toEqual(true);
    })

    it("should render reset password button", () => {
        const wrapper = (shallow(<Navbar />));
        const button = <a className="dropdown-item" href="/resetpassword"><i className="fa fa-unlock fa-fw "/>Reset Password</a>
        expect(wrapper.contains(button)).toEqual(true);
    })
});
