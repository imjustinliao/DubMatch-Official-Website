import { useEffect, useState } from 'react'

export function useCursorPosition() {
  const [position, setPosition] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        setPosition({ x: -9999, y: -9999 })
        return
      }
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return position
}
