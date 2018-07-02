import React from 'react';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';

import CreateBusiness from '../components/business/createbusiness';

describe("Businness name, category and location input", () =>{
    const wrapper = (shallow (< CreateBusiness />));
    wrapper.setState({authenticated:true})
    const mock = new MockAdapter(wrapper.instance().xhr);

    it("renders without crashing", () => {
        shallow(<CreateBusiness />);
      });

    it("should  respond to change event ", () =>{
        wrapper.find("#business_name").simulate("change", {target:{name:"business_name", value:"mag"}});
        expect(wrapper.state("business_name")).toEqual("mag");
    });

    it("should  respond to change event ", () =>{
       wrapper.find("#location").simulate("change", {target:{name:"location", value:"kampala"}});
       expect(wrapper.state("location")).toEqual("kampala");
   });

   it("should  respond to change event ", () =>{
    wrapper.find("#category").simulate("change", {target:{name:"category", value:"motors"}});
    expect(wrapper.state("category")).toEqual("motors");
  });

    // it('create business', () => {
    //     mock.onPost("/businesses").reply(201, {});
	// 	wrapper.find("#submit").at(1).simulate("submit", {
	// 		preventDefault: () => {}
	// 	});
	// });

})






