import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import trackUrl from '../assets/music-original.mp3'

type AudioContextValue = {
  isMuted: boolean
  toggleMute: () => void
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const audio = useMemo(() => {
    const element = new Audio(trackUrl)
    element.loop = true
    element.volume = 0.35
    element.preload = 'auto'
    return element
  }, [])

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

    const startPlayback = async () => {
      try {
        await audio.play()
      } catch (error) {
        resume = () => {
          audio.play().catch(() => {})
          cleanup()
        }
        window.addEventListener('pointerdown', resume)
        window.addEventListener('keydown', resume)
      }
    }

    startPlayback()

    return () => {
      cleanup()
      audio.pause()
    }
  }, [audio])

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
