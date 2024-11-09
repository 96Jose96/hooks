import './App.css';
import { useFetchCharacters } from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { result: pokeInfo } = useFetchCharacters({ url: urlPokemon })
  const { result: rickInfo } = useFetchCharacters({ url: urlRick })
 
  return (
    <>
      <h2>{pokeInfo && pokeInfo.name}</h2>
      {pokeInfo && <img src={pokeInfo.sprites.front_default} />}

      <h2>{rickInfo && rickInfo.name}</h2>
      {rickInfo && <img src={rickInfo.image} />}
    </>
  );
}

export default App;
