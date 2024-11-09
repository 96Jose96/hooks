import React from 'react'
import { useFetchCharacters } from '../hooks/useFecthCharacters'

export default function PokemonInfo({ url }) {
    const {result} = useFetchCharacters({ url })
  return (
    <div>
      <h2>{result && result.name}</h2>
      {result && <img src={result.sprites.front_default} />}
    </div>
  )
}
