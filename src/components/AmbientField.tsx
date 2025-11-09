import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { useCursorPosition } from '../hooks/useCursorPosition'

const stars = Array.from({ length: 60 }, (_, index) => index)
const hearts = Array.from({ length: 14 }, (_, index) => index)
const waves = Array.from({ length: 6 }, (_, index) => index)

type AmbientFieldProps = {
  variant?: 'rose' | 'ink'
}

export function AmbientField({ variant = 'rose' }: AmbientFieldProps) {
  const cursor = useCursorPosition()
  const [viewport, setViewport] = useState({ width: 1, height: 1 })

  useEffect(() => {
    const update = () => {
      setViewport({ width: window.innerWidth || 1, height: window.innerHeight || 1 })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const starStyles = useMemo(() => {
    return stars.map((star) => {
      const size = 1.5 + (star % 5)
      const leftPercent = (star * 37) % 100
      const topPercent = (star * 19) % 100
      const starX = (leftPercent / 100) * viewport.width
      const starY = (topPercent / 100) * viewport.height
      const dx = starX - cursor.x
      const dy = starY - cursor.y
      const distance = Math.max(1, Math.sqrt(dx * dx + dy * dy))
      const highlight = Math.max(0, 220 - distance) / 220
      const push = highlight * 14
      const offsetX = (dx / distance) * push
      const offsetY = (dy / distance) * push
      const baseOpacity = variant === 'ink' ? 0.45 : 0.75

      return {
        leftPercent,
        topPercent,
        size,
        opacity: baseOpacity + highlight * 0.35,
        offsetX,
        offsetY,
        scale: 0.8 + highlight * 0.7,
        delay: star * 0.6,
      }
    })
  }, [cursor.x, cursor.y, variant, viewport.height, viewport.width])

  return (
    <div
      aria-hidden
      className={`ambient-field ${
        variant === 'ink' ? 'mix-blend-screen opacity-70' : 'opacity-90'
      }`}
    >
      <div className="ambient-stars">
        {starStyles.map((star, index) => {
          const style: CSSProperties = {
            left: `${star.leftPercent}%`,
            top: `${star.topPercent}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
            transform: `translate(${star.offsetX}px, ${star.offsetY}px) scale(${star.scale})`,
          }

          return <span key={index} style={style} />
        })}
      </div>
      <div className="ambient-hearts">
        {hearts.map((heart) => {
          const style: CSSProperties & { '--heart-scale': string } = {
            left: `${(heart * 53) % 100}%`,
            top: `${(heart * 37) % 100}%`,
            animationDelay: `${heart * 1.3}s`,
            '--heart-scale': `${0.8 + ((heart % 5) * 0.15)}`,
          }
          return <span key={`heart-${heart}`} style={style} />
        })}
      </div>
      <div className="ambient-waves">
        {waves.map((wave) => {
          const style: CSSProperties = {
            left: wave % 2 === 0 ? '0%' : 'auto',
            right: wave % 2 === 0 ? 'auto' : '0%',
            top: `${10 + wave * 15}%`,
            animationDelay: `${wave * 2}s`,
          }
          return <span key={`wave-${wave}`} style={style} />
        })}
      </div>
    </div>
  )
}
