import React from 'react';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';

import ResetPassword from "../components/auth/resetpassword";

describe( "Resetpassword Component", () => {
    const wrapper = (shallow(< ResetPassword />));
    wrapper.setState({authenticated:true})
    const mock = new MockAdapter(wrapper.instance().xhr);

    it("renders without crashing", () => {
        shallow(<ResetPassword />);
      });

    it("should  respond to change event ", () =>{
        wrapper.find("#email").simulate("change", {target:{name:"email", value:"john@john.com"}});
        expect(wrapper.state("email")).toEqual("john@john.com");
    });

    it("should  respond to change event ", () =>{
       wrapper.find("#new_password").simulate("change", {target:{name:"new_password", value:"john"}});
       expect(wrapper.state("new_password")).toEqual("john");
   });
  

    // it("should render resetpassword form", () =>{
    //     const title = <h3 className="text-dark text-center">Password Reset</h3>
    //     expect(wrapper.contains(title).text()).toEqual(true);
    // });

    // it("renders email input", () =>{
    //     expect(shallow(< ResetPassword />).find("#email").length).toEqual(1);
    // });

    // it("renders password input", () =>{
    // expect(shallow(< ResetPassword />).find("#new_password").length).toEqual(1);
    // });

  
})

