import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

export function Pokemon() {
  const { Link, singlePokemon, POKEMONS_COUNT } = useGetSinglePokemon();

  return (
    <>
      {singlePokemon && (
        <>
          <Link to={"/"}>Voltar</Link>

          <span>{singlePokemon.id}</span>

          <h3>{singlePokemon.name}</h3>

          <img
            src={singlePokemon.sprites.other["official-artwork"].front_default}
            alt={"Imagem de " + singlePokemon.name}
          />

          <Link to={"/pokemon/" + (singlePokemon.id - 1)}>
            <button disabled={singlePokemon.id === 1 ? true : false}>
              Anterior
            </button>
          </Link>

          <Link to={"/pokemon/" + (singlePokemon.id + 1)}>
            <button
              disabled={POKEMONS_COUNT === singlePokemon.id ? true : false}
            >
              Próximo
            </button>
          </Link>
        </>
      )}
    </>
  );
}
