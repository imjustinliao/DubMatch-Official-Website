type ShareOverlayProps = {
  open: boolean
  onClose: () => void
}

export function ShareOverlay({ open, onClose }: ShareOverlayProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[998] rounded-[50px] flex items-center justify-center bg-black/80 px-4 text-white backdrop-blur"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 text-2xl"
        aria-label="Close share overlay"
      >
        ×
      </button>
      <div
        className="max-w-md w-full overflow-hidden rounded-[32px] border border-white/20 bg-white/5 p-8 text-left text-base leading-relaxed text-white shadow-card"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold">You just received a gift for,</h3>
        <ul className="mt-6 space-y-3 text-white/90">
          <li>• your invitation to your crush.</li>
          <li>• help your friend get out of friend zone.</li>
        </ul>
        <p className="mt-6 text-sm text-white/80">
          Send this to your friends to increase the chance of dating with your crush.
        </p>
        <p className="mt-4 text-center text-xs uppercase tracking-[0.35em] text-white/60">Sincerely, DubMatch Team</p>
      </div>
    </div>
  )
}
