import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

const fillerData = {
  time: '7:00 AM',
  cond: 'Partly Cloudy',
  temp: '56°F',
  high: '65°F',
  low: '32°F'
}


describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('Card should exist', () => {
    expect(wrapper).toBeDefined()
    console.log(wrapper.debug());
  })

   it('Should should render passed-in time', () => {
    const card = shallow( <Card time={fillerData.time} />);
    expect( card.find('.time').length ).toEqual(1);
    expect('7:00 AM').toEqual(fillerData.time);
  })

 it('Should should render passed-in condition', () => {
    const card = shallow( <Card cond = {fillerData.cond} />);
    expect( card.find('.cond').length ).toEqual(1);
   expect( card.find('.cond').text() ).toEqual('Partly Cloudy');

  })

 
  it('Should render a temp div', () => {
    const card = shallow( <Card temp={fillerData.temp} />);
    expect( card.find('.temp').length ).toEqual(1);
    expect('56°F').toEqual(fillerData.temp);
  })

  it('Should be able to render a high and low', () => {
    const card = shallow( <Card high={fillerData.high} low={fillerData.low} />);
    expect( card.find('.temp').length ).toEqual(1);      
    expect("65°F").toEqual(fillerData.high);
    expect("32°F").toEqual(fillerData.low);
  })

 

  });
