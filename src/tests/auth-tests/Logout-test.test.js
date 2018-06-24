import React from 'react';
import { shallow } from 'enzyme';


import Logout from '../../components/auth/logout';

describe("Logout", () =>{
    const wrapper = (shallow (<Logout />));

    it("renders without crashing", () => {
        shallow(<Logout />);
      });

})
