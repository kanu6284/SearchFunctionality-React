import { useState, useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const fetches = response.data.results.map(pokemon => axios.get(pokemon.url));
        const responses = await Promise.all(fetches);
        const pokemonData = responses.map(response => response.data);
        setPokemons(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading };
};

export default Data;
