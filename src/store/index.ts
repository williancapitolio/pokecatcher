import { configureStore } from "@reduxjs/toolkit";

import { pokemonSlice } from "../features/pokemon/pokemon-slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
