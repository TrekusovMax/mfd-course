import { useToggle } from '../hooks/useToggle'

const Task6 = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  return (
    <>
      <h3> {value.toString()}</h3>
      <button style={{ padding: '10px 15px' }} onClick={() => toggle()}>
        Toggle
      </button>
    </>
  )
}

export default Task6
