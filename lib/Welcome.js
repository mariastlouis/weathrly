import React, { Component } from 'react'
import Search from './Search.js'
// import './Welcome.css'



export default function Welcome (){
      return(
        <body> 
            <h1> WELCOME </h1>
            <h2>Enter in your city or area code:</h2>
            <Search />
        </body> 
      )
    }