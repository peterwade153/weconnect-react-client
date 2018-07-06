import React from 'react';
import { shallow, mount } from 'enzyme';


import Logout from '../../components/Auth/Logout';

describe("Logout", () =>{
    let store = {}
    global.localStorage = {
       getItem: key => {
           return `{"Token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOiIyMDE3LTA5LTI3IDIwOjAyOjUyLjYxNjk0MSJ9.3Qgmdip-oluZKFlFsCTrqq16H8gwnVpQQyY2z4YzJSU","user_id":1}`
       },
       setItem: (key, value) => {
           store[key] = value
       },
       removeItem: key => Reflect.deleteProperty(store, key)
    }
    it("renders without crashing", () => {
        shallow(<Logout history={{push:()=>{}}}/>);
      });

})

