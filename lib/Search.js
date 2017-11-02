import React, { Component } from 'react'


export default class Search extends Component {
    constructor({setLocalStorage}) {
      super();
      this.state = {
        value: []
      }
    }
  
    render() {
      return (
        <div>
          <input type="text"
                value={this.state.value}
                onChange={(event) => this.setState({ value: event.target.value})}
          />
          <button onClick={() => {
            localStorage.setItem("State", this.state.value);
            setLocalStorage()
          }}>
            Submit
          </button>
          
        </div>
      )
    }
  }

