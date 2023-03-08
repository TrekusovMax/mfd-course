import { useEffect, useState } from 'react'
import axios from 'axios'
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsloading(true)
    axios
      .get(url)
      .then((responce) => setData(responce.data))
      .catch((err) => setError(err))
      .finally(setIsloading(false))
  }, [url])

  const refetch = (params) => {
    setIsloading(true)
    axios
      .get(url, params)
      .then((responce) => setData(responce.data))
      .catch((err) => setError(err))
      .finally(setIsloading(false))
  }
  return { data, isLoading, error, refetch }
}
