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
  //стиль для окна браузера, чтобы включить полосы прокрутки
  const styleWindow = {
    height: '150vh',
    width: '150vw',
  }

  return (
    <div style={styleWindow}>
      <div className="task5">
        Scroll position x: {scroll.x}, y: {scroll.y}
      </div>
      <button style={style} onClick={() => scrollTo({ y: 0 })}>
        Scroll to top
      </button>
    </div>
  )
}

export default Task5
