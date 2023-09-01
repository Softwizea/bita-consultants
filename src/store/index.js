import pipe from "ramda/es/pipe";
import create from "zustand";
import { combine, devtools } from "zustand/middleware";
const log = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
    },
    get,
    api
  );

const createStore = pipe(log, create);

export const useProductStore = createStore(
  combine(
    {
      cartItems: [],
    },
    (set) => ({
      setCartItems: (g) => set({ cartItems: g }),
    })
  )
);
