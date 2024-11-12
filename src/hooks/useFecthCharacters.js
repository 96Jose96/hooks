import { useState } from "react"
import { useEffect } from "react"

export const useFetchCharacters = ({ url }) => {
    const [result, setResult] = useState(null)

    useEffect(() => {
        const getFetch = async () => {
            try {
                const response = await fetch(url)

                if(!response.ok) {
                    throw new Error(response.status)
                }

                const data = await response.json()
                setResult(data)
                
            } catch (err) {
                console.error("Error al obtener datos", err)
                setData(null)
            }
        }
        
        getFetch()

    }, [url])
    
    return { result }
}



// import { useEffect, useState} from 'react'
// const useFecthCharacter = (url) => {
//   const [data, setData] = useState(null)
  
//   const getCharacter = async () => {
//     try {
//       const response = await fetch(url)
//       const data = await response.json()
//       setData(data)
//       console.log(data)
//     } catch (err) {
//       console.error(error)
//     }
//   }

//   useEffect( () => {
//     getCharacter()
//   }, [])
  
//   return { data }
// }



export default useFecthCharacter