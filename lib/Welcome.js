import React, { Component } from 'react'
import './Welcome.css'


export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            searchPhrase: '',
        }

    }

  render() { 
      console.log(this.state.value)
      return(
        <body> 
            <h1> WELCOME </h1>
            <h2>Enter in your city or area code:</h2>
            <form>
                <input  value ={this.state.value}
                        onChange = {(event) => this.setState({ value:
                        event.target.value})}/>
                <button onClick={() =>{
                        console.log('clicked')}}>
                        Search</button>
            </form>
        </body> 
      )
  }
}