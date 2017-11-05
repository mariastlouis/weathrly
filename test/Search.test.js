import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search'

describe('Search', () => {
    it('should render the input field', () => {
      const search = shallow(<Search />);
      const input = search.find('input');
      expect(input.length).toEqual(1);
    })

    it('should render a button', () =>{
      const search = shallow(<Search />);
      const button = search.find('button');
      expect(button.length).toEqual(1);
    })

    it('should start with an value array in state with nothing in it', () => {
      const search = shallow(<Search />);
      expect( search.state('value') ).toEqual([]);
    });

    it('should change the states value when the input is changed', () => {
        const search = shallow(<Search />);
        const input = search.find('input'); 
        const mockEvent = {
            target: {
              value: 'Portland'
            }
          }
        expect( search.state('value')[0] ).toEqual();
        input.simulate('change', mockEvent);
        expect( search.state('value') ).toEqual('Portland');
    });

    it('should make suggestions based on the input', () =>{
        const search = shallow(<Search />);
        const input = search.find('input');
        expect( search.find('li').length ).toEqual(0);
        const mockEvent = {
            target: {
              value: 'Portland'
            }
          }
          input.simulate('change', mockEvent);
          expect( search.find('li').length ).toEqual(2);
        })
});