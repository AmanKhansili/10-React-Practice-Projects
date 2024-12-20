import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PokemonCards from "./PokemonCards";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detaildPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detaildResponse = await Promise.all(detaildPokemonData);
      //store data inside the pokemon state variable
      setPokemon(detaildResponse);
      console.log(detaildResponse);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  //Search Functionality
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="container">
      <header>
        <h1>Let's Catch Pokemon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          name="search"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((curPokemon) => (
            <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pokemon;
