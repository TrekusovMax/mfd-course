import axios from 'axios'
import { useEffect, useState } from 'react'

const useData = (url, pageNumber, id = null) => {
  const [character, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    if (id === null) {
      axios
        .get(url, { params: { page: pageNumber } })
        .then((responce) => {
          setHasMore(responce.data.info.next !== null)
          setCharacters((prev) => [...prev, ...responce.data.results])
        })
        .catch((err) => setError(err))
        .finally(setLoading(false))
    } else {
      axios
        .get(url)
        .then((responce) => {
          setCharacters(responce.data)
        })
        .catch((err) => setError(err))
        .finally(setLoading(false))
    }
  }, [url, pageNumber, id])
  return { loading, hasMore, error, character }
}

export default useData
