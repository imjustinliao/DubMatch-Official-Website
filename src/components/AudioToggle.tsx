import { useAudio } from '../context/AudioProvider'

export function AudioToggle() {
  const { isMuted, toggleMute } = useAudio()

  return (
    <button
      type="button"
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-soft backdrop-blur transition hover:bg-white/20"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        {isMuted ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M16.5 12.002a4.5 4.5 0 0 0-2.45-4.03l.8-1.38a6 6 0 0 1 3.65 5.41 6 6 0 0 1-3.7 5.44l-.77-1.39a4.5 4.5 0 0 0 2.47-4.05Zm-3-9.002-4.5 4H5v10h4l4.5 4V3Zm-6 6h2.3l1.7-1.5V16.5l-1.7-1.5H7.5Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M4 9v6h4l5 5V4L8 9H4Zm12.5 3a4.5 4.5 0 0 0-2.45-4.03l.8-1.38a6 6 0 0 1 3.65 5.41 6 6 0 0 1-3.7 5.44l-.77-1.39a4.5 4.5 0 0 0 2.47-4.05Z" />
          </svg>
        )}
      </span>
      <span>{isMuted ? 'MUTE' : 'AUDIO'}</span>
    </button>
  )
}
