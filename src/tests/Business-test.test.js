import React from 'react';
import { shallow } from 'enzyme';

import Business from '../components/business/Business';

describe("View business", () =>{
    const wrapper = (shallow (<Business />));
    wrapper.setState({authenticated:true, loading:false, businesses:[], current:1})
    // const mock = new MockAdapter(wrapper.instance().xhr);

    it("renders without crashing", () => {
      shallow(<Business />);
    });

})
