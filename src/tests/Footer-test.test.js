import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../components/Footer';

describe("Footer component", () =>{

    it('renders without crashing', () => { 
        shallow(<Footer />); 
      });
    it("should render text", () => {
        const wrapper = (shallow(<Footer />));
        const title = <footer className="navbar navbar-fixed-bottom bg-dark text-light"> &copy; Copyright 2018 Weconnect INC</footer>
        expect(wrapper.contains(title)).toEqual(true);
    })

});
