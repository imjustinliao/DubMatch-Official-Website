import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import trackOne from '../assets/music-original.mp3'
import trackTwo from '../assets/ocean.mp3'
import trackThree from '../assets/afterx.mp3'
import trackFour from '../assets/love.mp3'
import trackFive from '../assets/stuck.mp3'

const TRACKS = [trackOne, trackTwo, trackThree, trackFour, trackFive]

type AudioContextValue = {
  isMuted: boolean
  toggleMute: () => void
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined)

const shuffle = <T,>(items: T[]) => {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playlist] = useState(() => shuffle([...TRACKS]))
  const [currentIndex, setCurrentIndex] = useState(0)

  const audio = useMemo(() => {
    const element = new Audio(playlist[0])
    element.loop = false
    element.volume = 0.35
    element.preload = 'auto'
    return element
  }, [playlist])

  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    let resume: (() => void) | null = null

    const cleanup = () => {
      if (resume) {
        window.removeEventListener('pointerdown', resume)
        window.removeEventListener('keydown', resume)
        resume = null
      }
    }

    const attemptPlay = () => {
      audio
        .play()
        .then(() => {
          cleanup()
        })
        .catch(() => {
          if (!resume) {
            resume = () => {
              attemptPlay()
            }
            window.addEventListener('pointerdown', resume)
            window.addEventListener('keydown', resume)
          }
        })
    }

    audio.src = playlist[currentIndex]
    audio.currentTime = 0
    attemptPlay()

    return () => {
      cleanup()
      audio.pause()
    }
  }, [audio, playlist, currentIndex])

  useEffect(() => {
    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % playlist.length)
    }
    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [audio, playlist.length])

  useEffect(() => {
    audio.muted = isMuted
  }, [audio, isMuted])

  const toggleMute = () => setIsMuted((prev) => !prev)

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}
