import { Page } from "../types/page";

export interface PokemonResults {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  data: Array<Pokemon>;
  page?: Page<PokemonResults> | null;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<Type>;
  species: {
    url: string;
    specie?: SpeciesPokemon;
  };
  height: number;
  weight: number;
  abilities: Array<Ability>;
  stats: Array<Stat>;
}

export interface SpeciesPokemon {
  shape: {
    name: string;
  };
  gender_rate: number; //The chance of this Pokémon being female, in eighths; or -1 for genderless.
  egg_groups: Array<EggGroup>;
  evolution_chain: {
    url: string;
    evolution?: EvolutionChain;
  };
}

export interface EvolutionChain {
  chain: {
    evolves_to: Array<EnvolveTo>;
    species: {
      name: string;
    };
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

interface EggGroup {
  name: string;
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface EnvolveTo {
  evolves_to: {
    species: {
      name: string;
    };
  } | null;
  species: {
    name: string;
  };
}
