import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search Pokémon" 
      value={query} 
      onChange={handleInputChange} 
      className="search-input"
    />
  );
};

export default Search;
