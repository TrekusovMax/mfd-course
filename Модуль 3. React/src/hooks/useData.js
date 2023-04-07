import axios from 'axios'
import { useEffect, useState } from 'react'

const useData = (url, pageNumber, id = null) => {
  const [data, setData] = useState([])
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
          setData((prev) => [...prev, ...responce.data.results])
        })
        .catch((err) => setError(err))
        .finally(setLoading(false))
    } else {
      axios
        .get(url)
        .then((responce) => {
          setData(responce.data)
        })
        .catch((err) => setError(err))
        .finally(setLoading(false))
    }
  }, [url, pageNumber, id])
  return { loading, hasMore, error, data }
}

export default useData
