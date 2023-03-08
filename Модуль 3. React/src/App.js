import './App.css'
import { useWindowScroll } from './useWindowScroll'

function App() {
  //стиль для окна браузера, чтобы включить полосы прокрутки
  const style = {
    overflow: 'scroll',
    height: '150vh',
    width: '150vw',
  }
  const { scroll, scrollTo } = useWindowScroll()

  return (
    <div className="App">
      <header className="App-header" style={style}>
        <div>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </div>
        <button
          style={{ marginTop: '2rem', padding: '10px 15px' }}
          onClick={() => scrollTo({ y: 0 })}
        >
          Scroll to top
        </button>
      </header>
    </div>
  )
}

export default App
