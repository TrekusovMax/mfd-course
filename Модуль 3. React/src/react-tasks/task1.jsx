import { useFetch } from '../hooks/useFetch'

const Task1 = () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts'

  const { data, isLoading, error, refetch } = useFetch(URL)

  return (
    <div style={{ marginTop: '70px', position: 'relative' }}>
      <button
        onClick={() =>
          refetch({
            params: {
              _limit: 3,
            },
          })
        }
      >
        Refetch
      </button>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data &&
        !isLoading &&
        data.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default Task1
