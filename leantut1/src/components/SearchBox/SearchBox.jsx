import React from 'react'
import './SearchBox.css'
const SearchBox = ({ onInputChange }) => {
  return (
    <div>
        <div className="search-container">
            <input onChange = {(event) => onInputChange(event.target.value)} placeholder='type keywords' className="search-input" />
        </div>
    </div>
  )
}

export default SearchBox