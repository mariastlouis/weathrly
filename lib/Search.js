import React, { Component } from 'react'
import Trie from '@jdursema/complete-me'
import listOfCities from './listOfCities'


export default class Search extends Component {
    constructor(props) {
      super();
      this.state = {
        value: []
      }
      this.trie = new Trie ();
      this.trie.populate(listOfCities.data)
      this.updateInputValue=this.updateInputValue.bind(this)
      this.suggestions = []
      this.updateInput = this.updateInput.bind(this);
    }

    updateInputValue(event){
      this.setState({ value: event.target.value});
      this.suggestions = this.trie.suggest(event.target.value);
      console.log(this.suggestions)
    }

    updateInput(event){
      this.setState({value: event.target.innerHTML})
    }
  
    render() {
      return (
        <div>
          <input type="text"
                value={this.state.value}
                onChange={
                  this.updateInputValue
                }
          />

          <ul>
                {this.suggestions.map((word, index)=>{
                  if(index <= 5){
                  return <li onClick = {this.updateInput}>{word}</li>
                  }

                })}
          </ul>

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

