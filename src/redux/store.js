import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices";

const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
  },
});

export default store;
