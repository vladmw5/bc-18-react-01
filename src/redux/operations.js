import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const fetchPokemon = createAction("fetch/pokemon");
export const failedPokemonFetch = createAction("failedFetch/pokemon");

const fetchPokemons = createAsyncThunk("pokemon/fetch", async (_, thunkAPI) => {
  try {
    console.log("there");

    const result = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemons = await result.json();
    thunkAPI.dispatch(fetchPokemon(pokemons.results));
    // console.log(pokemons.results);
    // return pokemons.results;
  } catch (error) {
    thunkAPI.dispatch(failedPokemonFetch("Fetch failed"));
    return thunkAPI.rejectWithValue("Fetch failed");
  }
});

const operations = { fetchPokemons };

export default operations;
