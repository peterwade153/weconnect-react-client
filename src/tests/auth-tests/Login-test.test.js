import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from "react-router-dom";
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from 'react-router'


import Login from '../../components/Auth/Login';

describe( "Login Component", () => {
    const wrapper = shallow(<Login />);
    it("renders without crashing", () => {
        shallow(<Login />);
      });
    it("should render login form", () =>{
        const title = <h3 className="text-dark text-center font-weight-bold">Login</h3>
        expect(wrapper.contains(title)).toEqual(true);
    });

    it("should render heading", () =>{
        const title_1 =  <h2 className="text-light">WeConnect</h2>
        expect(wrapper.contains(title_1)).toEqual(true);
    });

    it("should render submit", () =>{
        const title_1 = <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary">Login</button>
        expect(wrapper.contains(title_1)).toEqual(true);
    });

    it("should render login form text", () =>{
        const title_1 = <p className="text-dark text-center" >Have no account? <Link className="btn btn-sm btn-outline-secondary" to="/signup" >SignUp</Link></p>
        expect(wrapper.contains(title_1)).toEqual(true);
    });

    it("renders email input", () =>{
        expect(shallow(<Login />).find("#email").length).toEqual(1);
    });

    it("renders password input", () =>{
    expect(shallow(<Login />).find("#password").length).toEqual(1);
    });
})
 // test change on getting input and logs in user
 describe("Email  and password input", () =>{
    const wrapper = (shallow (<Login />));
    const mock = new MockAdapter(wrapper.instance().xhr);

     it("should  respond to change event ", () =>{
         wrapper.find("#email").simulate("change", {target:{name:"email", value:"john@john.com"}});
         expect(wrapper.state("email")).toEqual("john@john.com");
     });

     it("should  respond to change event ", () =>{
        wrapper.find("#password").simulate("change", {target:{name:"password", value:"john"}});
        expect(wrapper.state("password")).toEqual("john");
    });

    it('login user', () => {
        mock.onPost('/auth/login').reply(200, {});
		wrapper.find("#submit").simulate('submit', {
            preventDefault: () => {}
		});
    });
})
