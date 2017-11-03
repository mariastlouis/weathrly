import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search'

describe('Card', () => {
    it('should start with an value array in state with nothing in it', () => {
      const search = shallow(<Search />);
  
      expect( search.state('value') ).toEqual([]);
    });

    it('should change the value to the input when button is clicked', () => {
        const search = shallow(<Search />);
        
        expect( search.state('value') ).toEqual([]);
    
        console.log(search)

    });
});