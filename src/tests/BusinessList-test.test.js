import React from 'react';
import { shallow } from 'enzyme';

import Business from '../components/Business/BusinessList';

describe("View business", () =>{
    const wrapper = (shallow (<Business match={{params: {id: 1}}}/>));
    wrapper.setState({authenticated:true, loading:false, businesses:[], current:1})
    // const mock = new MockAdapter(wrapper.instance().xhr);

    it("renders without crashing", () => {
      shallow(<Business match={{params: {id: 1}}}/>);
    });

})
