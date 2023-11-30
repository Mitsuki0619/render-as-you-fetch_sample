import React from "react";
import { Loadable } from "../utils/Loadable";

export const Pokemons = ({ data }: { data: Loadable<{ name: string }[]> }) => {
  const pokemons = data.read();
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
