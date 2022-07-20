import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./pokemon/pokemonApi";
import { loginSlise } from "./login/loginSlice";

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [loginSlise.name]: loginSlise.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    pokemonApi.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
