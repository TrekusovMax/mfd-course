import './App.css'
import { useToggle } from './useToggle'

function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  return (
    <div className="App">
      <header className="App-header">
        <h3> {value.toString()}</h3>
        <button onClick={() => toggle()}>Toggle</button>
      </header>
    </div>
  )
}

export default App
