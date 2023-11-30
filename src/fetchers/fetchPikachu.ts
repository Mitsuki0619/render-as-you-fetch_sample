export const fetchPikachu = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const data = await response.json();
  return data;
};
