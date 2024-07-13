import React, { useState, useEffect } from 'react';
import List from '../Compontes/List';
import Search from '../Compontes/Serch';
import Data from '../Hook/Data';

const SearchPage = () => {
  const { pokemons, loading } = Data();
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     
      <Search onSearch={handleSearch} />
      <List pokemons={filteredPokemons} />
    </div>
  );
};

export default SearchPage;
