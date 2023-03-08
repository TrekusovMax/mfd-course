import { useState, useRef } from 'react'

export function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  ref.onMouseOver = () => {
    setHovered(true)
  }
  ref.onMouseLeave = () => {
    setHovered(false)
  }

  return { hovered, ref }
}
