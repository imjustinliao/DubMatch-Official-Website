import { useCursorPosition } from '../hooks/useCursorPosition'

export function CursorRipple() {
  const { x, y } = useCursorPosition()

  return (
    <div className="cursor-ripple" style={{ left: x, top: y }}>
      <span className="cursor-ripple__glow" />
      <span className="cursor-ripple__dot" />
      <span className="cursor-ripple__ring" />
    </div>
  )
}
