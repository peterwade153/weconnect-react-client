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
})

describe("Edit business", () =>{
    const wrapper = shallow ( <MemoryRouter><EditBusiness match={{params: {id: 1}}}/></MemoryRouter>);

    it("should respond to change event ", () =>{
      global.localStorage = {
        getItem: key => {
            return `{"Token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOiIyMDE3LTA5LTI3IDIwOjAyOjUyLjYxNjk0MSJ9.3Qgmdip-oluZKFlFsCTrqq16H8gwnVpQQyY2z4YzJSU","user_id":1}`
        },
        setItem: (key, value) => {
            store[key] = value
        },
        removeItem: key => Reflect.deleteProperty(store, key)
     }
     
     let component = wrapper.find(EditBusiness).dive();
     component.setState({
       authenticated:true,
       loading:false, 
       user_id:3
      })
      component.find('#business_name').simulate("change", {target:{name:"business_name", value:"john"}});
      component.find('#location').simulate("change", {target:{name:"location", value:"john"}});
      component.find('#category').simulate("change", {target:{name:"category", value:"john"}});
      component.find('form').simulate('submit', {preventDefault: () => {}});
    });
})
