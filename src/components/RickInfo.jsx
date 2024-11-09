import React from 'react'
import { useFetchCharacters } from '../hooks/useFecthCharacters'

export default function RickInfo({ url }) {
    const {result} = useFetchCharacters({ url })
  return (
    <div>
      <h2>{result && result.name}</h2>
      {result && <img src={result.image} />}
    </div>
  )
}