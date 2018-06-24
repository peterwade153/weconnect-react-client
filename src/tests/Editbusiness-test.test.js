import React from 'react';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';

import EditBusiness from '../components/business/editbusiness';

describe("edit business", () =>{
    const wrapper = (shallow (< EditBusiness />));
    wrapper.setState({authenticated:true, loading:false})
    // const mock = new MockAdapter(wrapper.instance().xhr);

  it("renders without crashing", () => {
      shallow(<EditBusiness />);
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

})
