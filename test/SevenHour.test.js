import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import testData from '../lib/testData.js';

describe('SevenHour', () => {
  const sevenHour = testData.hourly_forecast.slice(0, 7).reduce((sevenArray, hour) => {
    sevenArray.push
    ({time: hour.FCTTIME.civil, 
      temp: hour.temp.english, 
      cond: hour.condition, 
      img: hour.icon_url})
    return sevenArray
  }, [])

  let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <SevenHour seven = {sevenHour} />
    )
});

  it('should exist', () => {
  expect(wrapper).toBeDefined();
  console.log(wrapper.debug());
  });

  it('should have all of its elements inside a class of seven-hour', () => {
    expect(wrapper.find('.seven-hour').length).toEqual(1)
  });

  it('should render 7 cards', () => {
  expect(wrapper.find('Card').length).toEqual(7);
    });

  


   



});