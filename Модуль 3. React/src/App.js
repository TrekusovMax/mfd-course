import './App.css'

import { useLocalStorage } from './useLocalStorage'

function App() {
  const [token, { setItem, removeItem }] = useLocalStorage('token')

  return (
    <div className="App">
      <header className="App-header">
        <div>Твой токен: {token}</div>
        <button onClick={() => setItem('token1')}>Задать токен</button>
        <button onClick={() => removeItem()}>Удалить токен</button>
      </header>
    </div>
  )
}

export default App
