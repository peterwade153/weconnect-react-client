import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";

import EditBusiness from '../components/Business/EditBusiness';

describe("edit business", () =>{
    const wrapper = shallow (< EditBusiness match={{params: {id: 1}}}/>);
    wrapper.setState({authenticated:true, loading:false,business_name:"a", location:"d", category:"d",})
    // const mock = new MockAdapter(wrapper.instance().xhr);

  it("renders without crashing", () => {
      shallow(<EditBusiness match={{params: {id: 1}}}/>);
    });

// 
//   it("should  respond to change event ", () =>{
//      wrapper.find("#location").simulate("change", {target:{name:"location", value:"kampala"}});
//      expect(wrapper.state("location")).toEqual("kampala");
//   });

//  it("should  respond to change event ", () =>{
//   wrapper.find("#category").simulate("change", {target:{name:"category", value:"motors"}});
//   expect(wrapper.state("category")).toEqual("motors");
//   });

})
