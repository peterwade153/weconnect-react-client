import React from 'react';
import { shallow,mount } from 'enzyme';


import Cards from '../components/Business/BusinessLayout/BusinessCards';

describe("cards", () =>{
    it("renders without crashing", () => {
        shallow(<Cards businesslist={[]} />);
      });

})
