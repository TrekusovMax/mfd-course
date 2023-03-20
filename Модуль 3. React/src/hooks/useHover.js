import { useState, useRef, useEffect } from 'react'

export function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  const onMouseOver = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }
  useEffect(() => {
    const block = ref.current
    if (!block) return
    block.addEventListener('mouseover', onMouseOver)
    block.addEventListener('mouseout', onMouseLeave)

    return () => {
      block.removeEventListener('mouseover', onMouseOver)
      block.removeEventListener('mouseout', onMouseLeave)
    }
  }, [ref])

  return { hovered, ref }
}
