import axios from 'axios'
import { useEffect, useState } from 'react'

const useCharacter = (pageNumber) => {
  const URL = 'https://rickandmortyapi.com/api/character'
  const [character, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios
      .get(URL, { params: { page: pageNumber } })
      .then((responce) => {
        setHasMore(responce.data.info.next !== null)
        setCharacters((prev) => {
          return [...prev, ...responce.data.results]
        })
      })
      .catch((err) => setError(err))
      .finally(setLoading(false))
  }, [pageNumber])

  return { loading, hasMore, error, character }
}

export default useCharacter
