import './App.css'
import ReactTasks from './react-tasks/react-task'

function App() {
  //стиль для окна браузера, чтобы включить полосы прокрутки
  const style = {
    height: '150vh',
    width: '150vw',
  }

  return (
    <div className="App">
      <header className="App-header" style={style}>
        <ReactTasks />
      </header>
    </div>
  )
}

export default App
