import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import testData from './testData.js';
import cleanData from '../lib/cleanData.js'

let mockData = cleanData(testData)


describe('SevenHour', () => {
  let wrapper;

  it('should exist', () => {
  wrapper = shallow( <SevenHour seven = {mockData.sevenHour} />)
  expect(wrapper).toBeDefined();
  });

  it('should have all of its elements inside a class of seven-hour', () => {
     wrapper = shallow( <SevenHour seven = {mockData.sevenHour} />)
    expect(wrapper.find('.seven-hour').length).toEqual(1)
  });

  it('should render 7 cards', () => {
    wrapper = shallow( <SevenHour seven = {mockData.sevenHour} />)
    expect(wrapper.find('Card').length).toEqual(7);
  });

  it('should take in time as a property', () => {
    wrapper = mount( <SevenHour seven = {mockData.sevenHour} />)
    expect(wrapper.props().seven[0].time).toEqual('12:00 PM')
  });

  it('should take in temperature as a property', () => {
    wrapper = mount( <SevenHour seven = {mockData.sevenHour} />)
    expect(wrapper.props().seven[0].temp).toEqual('40')
  });

});