import './App.css'
import { useFetch } from './useFetch'

function App() {
  const URL = 'https://jsonplaceholder.typicode.com/posts'

  const { data, isLoading, error, refetch } = useFetch(URL)

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  )
}

export default App

