import React, { Component } from 'react'


export default class Search extends Component {
    constructor(props) {
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
            this.props.setLocalStorage()
          }}>
            Submit
          </button>
          
        </div>
      )
    }
  }

