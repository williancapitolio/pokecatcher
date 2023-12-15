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
  genus: string;
  language: Language;
}

export interface Language {
  name: string;
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

/* export interface EvolutionChain {
  chain: {
    evolves_to: Array<EnvolveTo>;
    species: {
      name: string;
    };
  };
}

interface EnvolveTo {
  evolves_to: {
    species: {
      name: string;
    };
  };
  species: {
    name: string;
  };
} */

//

export interface EvolutionChain {
  baby_trigger_item: unknown
  chain: Chain
  id: number
}

export interface Chain {
  evolution_details: unknown[]
  evolves_to: EvolvesTo[]
  is_baby: boolean
  species: Species3
}

export interface EvolvesTo {
  evolution_details: EvolutionDetail[]
  evolves_to: EvolvesTo2[]
  is_baby: boolean
  species: Species2
}

export interface EvolutionDetail {
  gender: unknown
  held_item: unknown
  item: unknown
  known_move: unknown
  known_move_type: unknown
  location: unknown
  min_affection: unknown
  min_beauty: unknown
  min_happiness: unknown
  min_level: number
  needs_overworld_rain: boolean
  party_species: unknown
  party_type: unknown
  relative_physical_stats: unknown
  time_of_day: string
  trade_species: unknown
  trigger: Trigger
  turn_upside_down: boolean
}

export interface Trigger {
  name: string
  url: string
}

export interface EvolvesTo2 {
  evolution_details: EvolutionDetail2[]
  evolves_to: unknown[]
  is_baby: boolean
  species: Species
}

export interface EvolutionDetail2 {
  gender: unknown
  held_item: unknown
  item: unknown
  known_move: unknown
  known_move_type: unknown
  location: unknown
  min_affection: unknown
  min_beauty: unknown
  min_happiness: unknown
  min_level: number
  needs_overworld_rain: boolean
  party_species: unknown
  party_type: unknown
  relative_physical_stats: unknown
  time_of_day: string
  trade_species: unknown
  trigger: Trigger2
  turn_upside_down: boolean
}

export interface Trigger2 {
  name: string
  url: string
}

export interface Species {
  name: string
  url: string
}

export interface Species2 {
  name: string
  url: string
}

export interface Species3 {
  name: string
  url: string
}
