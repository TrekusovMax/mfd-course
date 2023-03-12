import { useLocalStorage } from '../hooks/useLocalStorage'

function Task2() {
  const [token, { setItem, removeItem }] = useLocalStorage('token')

  return (
    <>
      <div>Твой токен: {token}</div>
      <button onClick={() => setItem('token1')}>Задать токен</button>
      <button onClick={() => removeItem()}>Удалить токен</button>
    </>
  )
}

export default Task2
