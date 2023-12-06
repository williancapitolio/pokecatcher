import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL, getPokemonsData } from "../../services/Api";

import { Page } from "../../types/page";

import { PokemonResults } from "./../../interfaces/Pokemon";
import { GetLocalStorageData } from "../../utils/get-local-storage-data";
import { ParseNumberToString } from "../../utils/parse-number-to-string";

interface PokemonState {
  pokemons: Page<PokemonResults>;
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

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const pokemonToFavorite = state.pokemons.results.find(
        (poke) => poke.pokemon.id === action.payload
      );

      if (pokemonToFavorite) {
        pokemonToFavorite.pokemon.favorite =
          !pokemonToFavorite.pokemon.favorite;

        const pokemonToFavoriteId = ParseNumberToString(
          pokemonToFavorite.pokemon.id
        );

        const isPokemonAlreadyFavorite = state.pokemonsFavorites.find(
          (favorite) => favorite === pokemonToFavoriteId
        );

        if (pokemonToFavorite.pokemon.favorite) {
          if (!isPokemonAlreadyFavorite) {
            state.pokemonsFavorites.push(pokemonToFavoriteId);
          }
          localStorage.setItem(
            POKEMONS_FAVORITES,
            JSON.stringify(state.pokemonsFavorites)
          );
        }

        if (!pokemonToFavorite.pokemon.favorite) {
          state.pokemonsFavorites.filter(
            (favorites) => favorites !== pokemonToFavoriteId
          );
          localStorage.setItem(
            POKEMONS_FAVORITES,
            JSON.stringify(state.pokemonsFavorites)
          );
        }

        /* localStorage.setItem(
          POKEMONS_FAVORITES,
          JSON.stringify(state.pokemonsFavorites)
        ); */
      }
    },
    toggleCapture: (state, action: PayloadAction<number>) => {
      const pokemonToCapture = state.pokemons.results.find(
        (poke) => poke.pokemon.id === action.payload
      );
      if (pokemonToCapture) {
        pokemonToCapture.pokemon.caught = !pokemonToCapture.pokemon.caught;
        localStorage.setItem(
          POKEMONS_CAPTURED,
          JSON.stringify(pokemonToCapture.pokemon.id)
        );
      }
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
