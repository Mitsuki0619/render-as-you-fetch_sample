import { useState } from "react";
import { Loadable } from "../utils/Loadable";

export const useSuspenseQuery = <T>(query: () => Promise<T>) => {
  const [queryState] = useState(() => new Loadable(query()));
  return queryState;
};
