import React from 'react';
import List from '../Compontes/List';
import Data from '../Hook/Data';

const Loding = () => {
  const { pokemons, loading } = Data();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <List pokemons={pokemons} />
    </div>
  );
};

export default Loding;
