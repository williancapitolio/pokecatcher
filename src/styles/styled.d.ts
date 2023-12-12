import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      sizes: {
        title: {
          size: string;
          weight: number;
        };
        applicationTitle: {
          size: string;
          weight: number;
        };
        pokemonName: {
          size: string;
          weight: number;
        };
        filterTitle: {
          size: string;
          weight: number;
        };
        description: {
          size: string;
          weight: number;
        };
        pokemonNumber: {
          size: string;
          weight: number;
        };
        pokemonType: {
          size: string;
          weight: number;
        };
      };
    };
    colors: {
      text: {
        primary: string;
        white: string;
        black: string;
        grey: string;
        number: string;
      };
      background: {
        backgroundColor: string;
        defaultInput: string;
        pressedInput: string;
        modal: string;
        defaultBtn: string;
      };
      type: {
        bug: string;
        dark: string;
        dragon: string;
        eletric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      backgroundType: {
        bug: string;
        dark: string;
        dragon: string;
        eletric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      logo: {
        outside: string;
        inside: string;
      };
    };
  }
}
