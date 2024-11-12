import './App.css';
import PokemonInfo from './components/PokemonInfo';
import RickInfo from './components/RickInfo';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  return (
    <>
      <PokemonInfo url={urlPokemon} />
      <RickInfo url={urlRick} />
    </>
  );
}

export default App;


// import useFecthCharacter from './hooks/useFecthCharacters';
// import './App.css';
// import TemplateCharacter from './components/TemplateCharacter';

// function App() {
//   const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/21';
//   const urlRick = 'https://rickandmortyapi.com/api/character/1';
//   const { data: pokemon } = useFecthCharacter(urlPokemon)
//   const { data: rick } = useFecthCharacter(urlRick)

//   return (
//     <>
//     {!pokemon ? "...loading" : <TemplateCharacter title="Pokemon"      name={pokemon.name} image={pokemon.sprites?.front_default} /> }
//     {!rick    ? "...loading" : <TemplateCharacter title="Rick & Morty" name={rick.name}    image={rick.image} /> }
//     </>
//   );
// }

// export default App;
