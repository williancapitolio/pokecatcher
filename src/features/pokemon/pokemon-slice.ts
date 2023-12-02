import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL, getPokemonsData } from "../../services/Api";

import { Page } from "../../types/page";

import { PokemonResults } from "./../../interfaces/Pokemon";

interface PokemonState {
  pokemons: Page<PokemonResults>;
  loading: boolean;
  errors: unknown;
}

const initialState: PokemonState = {
  pokemons: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  loading: false,
  errors: null,
};

export const getPokemons = createAsyncThunk<Page<PokemonResults>, string>(
  "pokemons/getPokemons",
  async (url, thunkAPI) => {
    try {
      return await getPokemonsData(url ? url : BASE_URL + "/pokemon");
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const pokemonToFavorite = state.pokemons.results.find(
        (poke) => poke.pokemon.id === action.payload
      );
      if (pokemonToFavorite)
        pokemonToFavorite.pokemon.favorite =
          !pokemonToFavorite.pokemon.favorite;
    },
    toggleCapture: (state, action: PayloadAction<number>) => {
      const pokemonToCapture = state.pokemons.results.find(
        (poke) => poke.pokemon.id === action.payload
      );
      if (pokemonToCapture)
        pokemonToCapture.pokemon.caught = !pokemonToCapture.pokemon.caught;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
    });
    builder.addCase(getPokemons.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export const { toggleFavorite, toggleCapture } = pokemonSlice.actions;
