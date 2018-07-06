import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import MockAdapter from 'axios-mock-adapter';

import BusinessView from '../components/Business/Business';

describe("View business", () =>{
const wrapper = (shallow (< BusinessView match={{params: {id: 1}}}/>));
    wrapper.setState({authenticated:true, loading:false, business:[],reviews:[], review:"", user_id:3})
    // const mock = new MockAdapter(wrapper.instance().xhr);

    it("renders without crashing", () => {
      shallow(<BusinessView match={{params: {id: 1}}} />);
    });
})

describe("View business", () =>{
  
      // wrapper.setState({authenticated:true, loading:false, business:[],reviews:[], review:"", user_id:3})
      const wrapper = shallow ( <MemoryRouter><BusinessView match={{params: {id: 1}}}/></MemoryRouter>);
      const mock = new MockAdapter(wrapper.instance().xhr);

      it("should respond to change event ", () =>{
        mock.onPost('/businesses/id/reviews').reply(201, {
          review:"sdfffd"
        });
        global.localStorage = {
          getItem: key => {
              return `{"Token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOiIyMDE3LTA5LTI3IDIwOjAyOjUyLjYxNjk0MSJ9.3Qgmdip-oluZKFlFsCTrqq16H8gwnVpQQyY2z4YzJSU","user_id":1}`
          },
          setItem: (key, value) => {
              store[key] = value
          },
          removeItem: key => Reflect.deleteProperty(store, key)
       }
       
       let component = wrapper.find(BusinessView).dive();
       component.setState({
         authenticated:true,
         loading:false, 
         user_id:3
        })
        console.log(component.find('button[name="submit"]'));
        component.find('textarea').simulate("change", {target:{name:"review", value:"john"}});
        component.find('form').simulate('submit', {preventDefault: () => {}});
      });
  })
