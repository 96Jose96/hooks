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
