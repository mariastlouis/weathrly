import React, { Component } from 'react'


const Search = ({ handleOnClick }) => {
    return(
         <form>
                <input type="text" />
                <button onClick={() => handleOnClick()}>Search</button>
            </form>)

    }

export default Search;


