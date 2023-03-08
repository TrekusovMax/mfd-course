import './App.css'
import { useHover } from './useHover'

function App() {
  const { hovered, ref } = useHover()
  const style = {
    padding: '50px',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          onMouseLeave={ref.onMouseLeave}
          onMouseOver={ref.onMouseOver}
          ref={ref}
          style={style}
        >
          {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
      </header>
    </div>
  )
}

export default App
