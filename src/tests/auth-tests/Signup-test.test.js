import React from 'react';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';

import Signup from '../../components/auth/Signup';

describe( "Signup Component", () => {
    it("should render signup form title", () =>{
        const wrapper = (shallow(< Signup />));
        const title = <h3 className="text-dark text-center font-weight-bold">Create Account </h3>
        expect(wrapper.contains(title)).toEqual(true);
    });

    it("should render title", () =>{
        const wrapper = (shallow(< Signup />));
        const title = <h2 className="text-light">WeConnect</h2>
        expect(wrapper.contains(title)).toEqual(true);
    });

    it("should render message", () =>{
        const wrapper = (shallow(< Signup />));
        const title = <span className="text-light">Bringing your business closer to people</span>
        expect(wrapper.contains(title)).toEqual(true);
    });

    it("renders email input", () =>{
        expect(shallow(< Signup />).find("#email").length).toEqual(1);
    });

    it("renders email input", () =>{
        expect(shallow(< Signup />).find("#username").length).toEqual(1);
    });

    it("renders password input", () =>{
    expect(shallow(<Signup />).find("#password").length).toEqual(1);
    });
})
// testing response to change and signup
describe("Email  and password input", () =>{
    const wrapper = (shallow (<Signup />));
    const mock = new MockAdapter(wrapper.instance().xhr);
    it("should  respond to change event ", () =>{
        wrapper.find("#email").simulate("change", {target:{name:"email", value:"john@john.com"}});
        expect(wrapper.state("email")).toEqual("john@john.com");
    });

    it("should  respond to change event ", () =>{
        wrapper.find("#username").simulate("change", {target:{name:"username", value:"john"}});
        expect(wrapper.state("username")).toEqual("john");
    });

    it("should  respond to change event ", () =>{
       wrapper.find("#password").simulate("change", {target:{name:"password", value:"john"}});
       expect(wrapper.state("password")).toEqual("john");
   });
   
   it('signs up a user', () => {
    mock.onPost('/auth/register').reply(200, {});
    wrapper.find("#submit").simulate('submit', {
        preventDefault: () => {}
        });
    });

})
