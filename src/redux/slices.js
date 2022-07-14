import { createSlice, createReducer } from "@reduxjs/toolkit";

import operations from "./operations";

import { fetchPokemon, failedPokemonFetch } from "./operations";

const pokemonSlice = createSlice({
  name: "pokemon/slice",
  initialState: { pokemons: [], error: "" },
  extraReducers: {
    [operations.fetchPokemons.fulfilled]: (state, action) => {
      console.log(state, action);
      return { ...state, pokemons: [...state.pokemons, action.payload] };
    },
    [operations.fetchPokemons.rejected]: (state, { payload }) => {
      state.error = payload;
      console.log(state.error);
    },
  },
});

const pokemonReducer = createReducer(
  { pokemons: [], error: "" },
  {
    [fetchPokemon]: (state, action) => {
      console.log(state, action);
      return { ...state, pokemons: [...state.pokemons, ...action.payload] };
    },
    [failedPokemonFetch]: (state, action) => {
      const result = { ...state, error: action.payload };
      console.log(result.error);
      return result;
    },
  }
);

export { pokemonSlice, pokemonReducer };
