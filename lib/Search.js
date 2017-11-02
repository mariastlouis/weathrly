import React, { Component } from 'react'


export default class Search extends Component {
    constructor() {
      super();
      this.state = {
        value: '',
      }
    }
  
    render() {
      return (
        <div>
          <input value={this.state.value}
                 onChange={(event) => this.setState({ value: event.target.value })}
          />
          <button onClick={() => {
            console.log('clicked')
            console.log(this.state.value)
          }}>
            Submit
          </button>
          
        </div>
      )
    }
  }

