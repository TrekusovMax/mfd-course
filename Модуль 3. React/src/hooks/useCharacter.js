import axios from 'axios'
import { useEffect } from 'react'

const useCharacter = (query, pageNumber) => {
  useEffect(() => {
    axios.get(query, { page: pageNumber }).then((res) => {
      console.log(res.data)
    })
  }, [query, pageNumber])
  return null
}

export default useCharacter
