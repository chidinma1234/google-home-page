import React, { useState } from 'react';

import SearchIcon from '../assets/search-icon.png';
import Microphone from '../assets/microphone.png';
export default function SearchBar() {
  const [value, setValue] = useState('');

  const [input, updatedInput] = useState('');
  const onChangeHandler = (event) => {
    // event.preventDefault();
    setValue(event.target.value);
  };
  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') updatedInput(value);
  };
  return (
    <div className="input">
      <form className="form_input">
        <input
          type="text"
          // placeholder="Search google or type a url"
          className="search_input"
          onChange={onChangeHandler}
          onKeyDown={handleKeyPress}
          value={value}
        />
      </form>
      <div className="value">
        <p>{input}</p>
      </div>
      <div className="search_icon">
        <img src={SearchIcon} alt="search" />
      </div>
      <div className="microphone">
        <img src={Microphone} alt="microphone" />
      </div>
    </div>
  );
}

// export default SearchBar;
