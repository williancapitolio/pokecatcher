import { Pokemon, PokemonsResponse } from "./../../interfaces/Pokemon";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPokemonsList } from "../../services/Api";

interface pokemonState {
  pokemons: PokemonsResponse | null;
  singlePokemon: Pokemon | null;
  loading: boolean;
  errors: unknown;
}

const initialState: pokemonState = {
  pokemons: null,
  singlePokemon: null,
  loading: false,
  errors: null,
};

export const getPokemons = createAsyncThunk<PokemonsResponse>(
  "pokemons/getPokemons",
  async (_, thunkAPI) => {
    try {
      const pokeList = await getPokemonsList();
      return pokeList;
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
      state.pokemons = action.payload
      state.loading = false;
    });
    builder.addCase(getPokemons.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export const { favorite } = pokemonSlice.actions;
