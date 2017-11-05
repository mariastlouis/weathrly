import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';

describe('SevenHour', () => {
  let card;

  beforeEach(() => {
    card = shallow(<Card />);

  })

    it.skip('Should have a className SevenHour', () => {
        
        expect(card.find('.seven-hour').length ).toEqual(1);
    })


});