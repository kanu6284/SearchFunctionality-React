import React from 'react';
import Card from './Card';

const List = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default List;
