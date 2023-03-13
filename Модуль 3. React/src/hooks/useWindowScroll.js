import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
  const init = {
    x: window.scrollX,
    y: window.scrollY,
  }
  const [scroll, setScroll] = useState(init)

  useWindowEvent('scroll', () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    })
  })
  /*
    сделал только вертикальную прокрутку, так как про
    горизонтальную прокрутку ничего сказано не было
  */
  const scrollTo = (params) => {
    if (typeof params['y'] !== 'undefined') {
      setScroll({
        x: window.scrollX,
        y: params.y,
      })

      window.scrollTo({
        left: window.scrollX,
        top: params.y,
        behavior: 'smooth',
      })
    }
  }

  return {
    scroll,
    scrollTo,
  }
}
