import axios from 'axios'
import { useEffect, useState } from 'react'

const useCharacter = (pageNumber) => {
  const URL = 'https://rickandmortyapi.com/api/character'
  const [character, setCharacters] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(URL, { params: { page: pageNumber } })
      .then((responce) => setCharacters(responce.data.results))
      .catch((err) => setError(err))
      .finally(setLoading(false))
  }, [pageNumber])
  return { loading, error, character }
}

export default useCharacter
