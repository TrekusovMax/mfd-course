import { useWindowScroll } from './../hooks/useWindowScroll'
const Task5 = () => {
  const { scroll, scrollTo } = useWindowScroll()
  const style = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 15px',
    borderRadius: '10%',
    cursor: 'pointer',
  }
  return (
    <div>
      <div>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </div>
      <button style={style} onClick={() => scrollTo({ y: 0 })}>
        Scroll to top
      </button>
    </div>
  )
}

export default Task5
