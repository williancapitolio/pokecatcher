import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL, getData, getPokemonsData } from "../../services/Api";

import { GetLocalStorageData } from "../../utils/get-local-storage-data";
import { ParseNumberToString } from "../../utils/parse-number-to-string";

import { Page } from "../../types/page";

import { Pokemon, PokemonResults } from "./../../interfaces/Pokemon";

interface PokemonState {
  pokemons: Page<PokemonResults>;
  singlePokemon: Pokemon | null;
  pokemonsFavorites: Array<string>;
  pokemonsCaptured: Array<string>;
  loading: boolean;
  errors: unknown;
}

const POKEMONS_FAVORITES = "pokemons-favorites";
const POKEMONS_CAPTURED = "pokemons-captured";

const initialState: PokemonState = {
  pokemons: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  singlePokemon: null,
  pokemonsFavorites: GetLocalStorageData<Array<string>>(POKEMONS_FAVORITES, []),
  pokemonsCaptured: GetLocalStorageData<Array<string>>(POKEMONS_CAPTURED, []),
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

export const getSinglePokemon = createAsyncThunk<Pokemon, string>(
  "pokemons/getSinglePokemon",
  async (id, thunkAPI) => {
    try {
      return await getData<Pokemon>(BASE_URL + "/pokemon/" + id);
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

      if (pokemonToFavorite) {
        const pokemonToFavoriteId = ParseNumberToString(
          pokemonToFavorite.pokemon.id
        );

        if (state.pokemonsFavorites.includes(pokemonToFavoriteId)) {
          state.pokemonsFavorites = state.pokemonsFavorites.filter(
            (favorites) => favorites !== pokemonToFavoriteId
          );
        } else {
          state.pokemonsFavorites.push(pokemonToFavoriteId);
        }

        localStorage.setItem(
          POKEMONS_FAVORITES,
          JSON.stringify(state.pokemonsFavorites)
        );
      }
    },
    toggleCapture: (state, action: PayloadAction<number>) => {
      const pokemonToCapture = state.pokemons.results.find(
        (poke) => poke.pokemon.id === action.payload
      );
      if (pokemonToCapture) {
        const pokemonToCaptureId = ParseNumberToString(
          pokemonToCapture.pokemon.id
        );

        if (state.pokemonsCaptured.includes(pokemonToCaptureId)) {
          state.pokemonsCaptured = state.pokemonsCaptured.filter(
            (captured) => captured !== pokemonToCaptureId
          );
        } else {
          state.pokemonsCaptured.push(pokemonToCaptureId);
        }

        localStorage.setItem(
          POKEMONS_CAPTURED,
          JSON.stringify(state.pokemonsCaptured)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
      state.errors = null;
    });
    builder.addCase(getPokemons.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(getSinglePokemon.pending, (state) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(getSinglePokemon.fulfilled, (state, action) => {
      state.singlePokemon = action.payload;
      state.loading = false;
      state.errors = null;
    });
    builder.addCase(getSinglePokemon.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export const { toggleFavorite, toggleCapture } = pokemonSlice.actions;
