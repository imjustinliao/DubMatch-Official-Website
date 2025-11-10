import { useEffect, useRef, useState } from 'react'
import { ShareOverlay } from './ShareOverlay'

type ShareLinkButtonProps = {
  link?: string
  label?: string
}

export function ShareLinkButton({ link = 'https://dubmatch.com', label = 'Share Link' }: ShareLinkButtonProps) {
  const [copied, setCopied] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const overlayTimer = useRef<number | null>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setIsOverlayOpen(true)
      window.setTimeout(() => setCopied(false), 2000)
      if (overlayTimer.current) window.clearTimeout(overlayTimer.current)
      overlayTimer.current = window.setTimeout(() => setIsOverlayOpen(false), 6000)
    } catch (error) {
      console.error('Unable to copy link', error)
    }
  }

  useEffect(() => {
    return () => {
      if (overlayTimer.current) window.clearTimeout(overlayTimer.current)
    }
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-10 py-4 text-sm font-semibold text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]"
      >
        <i className="fa-solid fa-copy" aria-hidden style={{ color: '#ffffff' }} />
        {copied ? 'Copied!' : label}
      </button>
      <ShareOverlay open={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
    </>
  )
}
