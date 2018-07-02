import React from 'react';
import { shallow } from 'enzyme';


import Cards from '../components/Business/BusinessLayout/BusinessCards';

describe("cards", () =>{
    it("renders without crashing", () => {
        shallow(<Cards businesslist={[]} />);
      });
})
