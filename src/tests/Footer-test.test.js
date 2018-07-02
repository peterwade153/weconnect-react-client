import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../components/Layout/Footer';

describe("Footer component", () =>{

    it('renders without crashing', () => { 
        shallow(<Footer />); 
      });
    it("should render text", () => {
        const wrapper = (shallow(<Footer />));
        const text = <footer className="text-dark" style={{ marginLeft:"40%"}} > &copy; Copyright 2018 Weconnect INC</footer>
        expect(wrapper.contains(text)).toEqual(true);
    })

});
