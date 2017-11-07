import React from 'react';
import Search from './Search.js';
import PropTypes from 'prop-types';
import './styles/Welcome.css';

export default function Welcome (props) {
  return (
    <div className = "welcome-div"> 
        <Search setLocalStorage={props.setLocalStorage} />
        <div className = "welcome-hed">
          <h1> WELCOME </h1>
        </div>
        <div className = "big-logo">
          <img className="white-logo" src='./public/logo-white.png'/>
        </div>
        <div className = "welcome-text">
          <h2>Enter in your city or area code</h2>
        </div>
    </div> 
  );
}

Welcome.propTypes = {
  setLocalStorage: PropTypes.func
};
        
