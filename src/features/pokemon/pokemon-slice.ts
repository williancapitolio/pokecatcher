import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL, getData } from "../../services/Api";

import { Page } from "../../types/page";

import { Pokemon, PokemonResults } from "./../../interfaces/Pokemon";

interface pokemonState {
  pokemons: Page<PokemonResults>;
  singlePokemon: Pokemon | null;
  loading: boolean;
  errors: unknown;
}

const initialState: pokemonState = {
  pokemons: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  singlePokemon: null,
  loading: false,
  errors: null,
};

export const getPokemons = createAsyncThunk<Page<PokemonResults>>(
  "pokemons/getPokemons",
  async (_, thunkAPI) => {
    try {
      return await getData<Promise<Page<PokemonResults>>>(
        BASE_URL + "/pokemon"
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const paginatePokemons = createAsyncThunk<Page<PokemonResults>, string>(
  "pokemons/paginatePokemons",
  async (nextUri, thunkAPI) => {
    try {
      return await getData<Promise<Page<PokemonResults>>>(nextUri);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    favorite: () => {},
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
    builder.addCase(paginatePokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(paginatePokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
    });
    builder.addCase(paginatePokemons.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export const { favorite } = pokemonSlice.actions;
