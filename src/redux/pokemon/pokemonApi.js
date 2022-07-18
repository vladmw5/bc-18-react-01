import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => ``,
      transformResponse: (response) => response.results,
    }),
    getPokemonByName: builder.query({
      query: (pokemonName) => `/${pokemonName}`,
      transformResponse: (response) => response.sprites.front_default,
    }),
  }),
});

export { pokemonApi };
export const {
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} = pokemonApi;
