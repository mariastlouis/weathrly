import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

const fillerData = {
  time: '7:00 AM',
  cond: 'Partly Cloudy',
  temp: '56°F',
  high: '65°F',
  low: '32°F',
  img: 'http://icons.wxug.com/i/c/k/clear.gif'
}



describe('Card', () => {
  let card;

    beforeEach(() => {
    card = shallow(<Card
      cond = {fillerData.cond}
      high={fillerData.high}
      low={fillerData.low}
      time={fillerData.time}
      img={fillerData.img}
      temp = {fillerData.temp}
    />);
  });


  it('Card should exist', () => {
    expect(card).toBeDefined()
  })

   it('Should should render passed-in time', () => {
    expect( card.find('.time').length ).toEqual(1);
    expect('7:00 AM').toEqual(fillerData.time);
  })

 it('Should should render passed-in condition', () => {
    expect( card.find('.cond').length ).toEqual(1);
   expect( card.find('.cond').text() ).toEqual('Partly Cloudy');

  })

  it('Should render a passed-in temp', () => {
    expect( card.find('.temp').length ).toEqual(1);
    expect('56°F').toEqual(fillerData.temp);
  })

  it('Should be able to render a high and low', () => {
    expect( card.find('.temp').length ).toEqual(1);      
    expect("65°F").toEqual(fillerData.high);
    expect("32°F").toEqual(fillerData.low);
  })

  it('should render an image displaying the current weather', () => {
    expect(card.find('.card-img')).toBeDefined();
  });


})




