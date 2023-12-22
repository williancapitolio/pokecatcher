import { configureStore } from "@reduxjs/toolkit";

import { pokemonSlice } from "../features/pokemon/pokemon-slice";
import { scrollbarSlice } from "../features/scrollbar/scrollbar-slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    scrollbar: scrollbarSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
