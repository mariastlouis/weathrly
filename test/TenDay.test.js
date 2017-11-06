import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';
import testData from './testData.js';
import cleanData from '../lib/cleanData.js'

let mockData = cleanData(testData)

describe('TenDay', () => {
  let wrapper;

it('should exist', () => {
  wrapper = shallow( <TenDay ten = {mockData.tenDay} />)
});

it('should have all of its elements inside a class of ten-day', () =>{
  wrapper = shallow( <TenDay ten = {mockData.tenDay} />)
      expect(wrapper.find('.ten-day').length).toEqual(1)
});

it('should render 10 cards', () => {
  wrapper = shallow( <TenDay ten = {mockData.tenDay} />)
  expect(wrapper.find('Card').length).toEqual(10);
});

 it('each card should have a time component', () => {
    wrapper = mount( <TenDay ten = {mockData.tenDay} />)
   expect(wrapper.find('.card-time').length).toEqual(10);

  });

  it('each card should have a temperature component', () => {
    wrapper = mount( <TenDay ten = {mockData.tenDay} />)
   expect(wrapper.find('.card-temp').length).toEqual(10);
  });


});