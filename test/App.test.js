import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import Search from '../lib/Search';

global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return (JSON.stringify(global.localStorage[keyword]));
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

describe('App', () => {

  it('should exist', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it('should render the Welcome component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Welcome')).toBeDefined();
    expect(wrapper.find('Welcome').length).toEqual(1);
    
  });

  it('should have a default state', () =>{
    const wrapper = shallow(<App />);
    expect(wrapper.state('error')).toEqual(false)
  });

  it('should render the weather page when a city is specified', ()=>{
    const wrapper = shallow(<App />);
    wrapper.setState()

    wrapper.setState({currentWeather: 'objectValue'})
    expect(wrapper.find('Search')).toBeDefined();
    expect(wrapper.find('Search').length).toEqual(1)
    
    expect(wrapper.find('Current')).toBeDefined()
    expect(wrapper.find('Current').length).toEqual(1)

    expect(wrapper.find('SevenHour')).toBeDefined();
    expect(wrapper.find('SevenHour').length).toEqual(1)

    expect(wrapper.find('TenDay')).toBeDefined();
    expect(wrapper.find('TenDay').length).toEqual(1)
  
  })


})