import { Loadable } from "../utils/Loadable";

export const Pikachu = ({ data }: { data: Loadable<{ name: "pikachu" }> }) => {
  const pikachu = data.read();
  return <div>{pikachu.name}</div>;
};
