import { useHover } from './../hooks/useHover'

const Task3 = () => {
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
    <>
      <div ref={ref} style={style}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
    </>
  )
}

export default Task3
