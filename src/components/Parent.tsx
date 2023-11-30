import React, { Suspense } from "react";
import { useSuspenseQuery } from "../hooks/useSuspenseQuery";
import { fetchPokemons } from "../fetchers/fetchPokemons";
import { fetchPikachu } from "../fetchers/fetchPikachu";
import { Pokemons } from "./Pokemons";
import { Pikachu } from "./Pikachu";

export const Parent = () => {
  const pokemons = useSuspenseQuery(fetchPokemons);
  const pikachu = useSuspenseQuery(fetchPikachu);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Pikachu data={pikachu} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Pokemons data={pokemons} />
      </Suspense>
    </div>
  );
};
