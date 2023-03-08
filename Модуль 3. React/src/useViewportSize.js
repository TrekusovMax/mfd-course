import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useViewportSize() {
  const [width, setWith] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useWindowEvent('resize', () => {
    setWith(window.innerWidth)
    setHeight(window.innerHeight)
  })
  return {
    height,
    width,
  }
}
