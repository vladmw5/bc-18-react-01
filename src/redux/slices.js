import { createSlice, createReducer } from "@reduxjs/toolkit";

import operations from "./operations";

import { fetchPokemon, failedPokemonFetch } from "./operations";

const pokemonSlice = createSlice({
  name: "pokemon/slice",
  initialState: { pokemons: [], error: "", pokemonImg: "" },
  extraReducers: {
    [operations.fetchPokemons.fulfilled]: (state, action) => {
      console.log(state, action);
      return { ...state, pokemons: [...state.pokemons, ...action.payload] };
    },
    [operations.fetchPokemons.rejected]: (state, { payload }) => {
      state.error = payload;
      console.log(state.error);
    },
    [operations.fetchOnePokemon.fulfilled]: (state, { payload }) => {
      state.pokemonImg = payload;
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
