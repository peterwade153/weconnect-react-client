import React from 'react';
import { shallow } from 'enzyme';

import BusinessView from '../components/business/BusinessView';

describe("View business", () =>{
    const wrapper = (shallow (< BusinessView />));
    wrapper.setState({authenticated:true, loading:false, business:[],reviews:[], review:"", user_id:3})
    // const mock = new MockAdapter(wrapper.instance().xhr);

    it("renders without crashing", () => {
      shallow(<BusinessView />);
    });
})
