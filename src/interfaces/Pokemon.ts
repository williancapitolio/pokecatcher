import { Page } from "../types/page";

export interface PokemonResults {
  name: string;
  url: string;
  pokemon: Pokemon;
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
  gender_rate: number; //The chance of this Pokémon being female, in eighths; or -1 for genderless.
  egg_groups: Array<EggGroup>;
  evolution_chain: {
    url: string;
    evolution?: EvolutionChain;
  };
  flavor_text_entries: Array<flavorTextEntries>;
  genera: Array<Genera>;
}

export interface Genera {
  genus: string
  language: Language
}

export interface Language {
  name: string
}

export interface flavorTextEntries {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface Language {
  name: string;
}

export interface Version {
  name: string;
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
