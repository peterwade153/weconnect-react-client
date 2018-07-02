import React from 'react';
import { shallow, mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import ResetPassword from "../components/Auth/ResetPassword";

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
  
    it("should render resetpassword form", () =>{
        const title = <h3 className="text-dark text-center">Password Reset</h3>
        expect(wrapper.contains(title)).toEqual(true);
    });
  
})

// describe("resetpassword component", () =>{
//     const wrapper = mount (<ResetPassword />);
//     wrapper.setState({authenticated:true})
//     it('It handles submit', async ()=>{
//         // const resetComponent = wrapper.find(ResetPassword)
// 		let email = resetComponent.find('input[name="email"]')
// 		email.simulate('change', {target: {name: "email",value: 'john@john.com'}});
	
// 		let password = searchComponent.find('input[name="password"]')
//         password.simulate('change', {target: {name: "password",value: 'cons'}});
        
//         const form = searchComponent.find('form')
// 		await form.simulate('submit',  { preventDefault: ()=>{}})
        
// });

// })

