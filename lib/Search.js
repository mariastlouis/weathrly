import React, { Component } from 'react'
import Trie from '@jdursema/complete-me/lib/Trie.js'
import listOfCities from './listOfCities'
import './styles/Search.css'


export default class Search extends Component {
    constructor(props) {
      super();
      this.state = {
        value: []
      }
      this.trie = new Trie ();
      this.trie.populate(listOfCities.data);
      this.updateInputValue=this.updateInputValue.bind(this);
      this.suggestions = [];
      this.updateInput = this.updateInput.bind(this);
    }

    updateInputValue(event){
      this.setState({ value: event.target.value});
      this.suggestions = this.trie.suggest(event.target.value);
    }

    updateInput(event){
      this.setState({value: event.target.innerHTML})
      localStorage.setItem("State", event.target.innerHTML);
      this.props.setLocalStorage();
      this.suggestions = [];
      this.setState({value: ''});
    }
  
    render() {
      return (
        <div className = "search-input">
          <input type="text"
                value={this.state.value}
                onChange={this.updateInputValue}
          />

          <ul className = "suggestions-list">
                {this.suggestions.map((word, index)=>{
                  word = word.replace(/\b\w/g, l => l.toUpperCase())
                  if(index <= 5){
                    return <li key={index} onClick = {this.updateInput }>{word}</li>
                  }

                })}
          </ul>

          <button onClick={() => {
            localStorage.setItem("State", this.state.value);
            this.props.setLocalStorage();
            this.setState({value: ''});
          }}>
            Submit
          </button>
          
        </div>
      )
    }
  }

