import React, { Component } from 'react'
import Search from './Search.js'
// import './styles/Welcome.css'



export default function Welcome (props){
      return(
        <div> 
            <h1> WELCOME </h1>
            <h2>Enter in your city or area code:</h2>
            <Search setLocalStorage={props.setLocalStorage} />
        </div> 
      )
    }