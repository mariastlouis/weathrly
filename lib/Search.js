import React, { Component } from 'react'


export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchPhrase: '',
        }

    }

  render() { 
      console.log(this.state.value)
      return(
        <form>
            <input  value ={this.state.value}
                    onChange = {(event) => this.setState({ value:
                    event.target.value})}/>
            <button onClick={() =>{
                    console.log('clicked')}}>
                    Search</button>
        </form>
      )
  }
}