import { useSearchParams } from 'react-router-dom'

const useSort = (data) => {
  const [searchParams] = useSearchParams({ created: 'asc' })

  switch (searchParams.get('created')) {
    case 'asc':
      data.sort((a, b) => (a.created > b.created ? 1 : -1))
      break
    case 'desk':
      data.sort((a, b) => (a.created < b.created ? 1 : -1))
      break
    default:
      data.sort((a, b) => (a.created > b.created ? 1 : -1))
  }

  return { data }
}

export default useSort
