import { Countdown } from './Countdown'

type HeroProps = {
  onWaitlistClick: () => void
}

export function Hero({ onWaitlistClick }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/63e2d1331365f23d2862b5c3/b753fc9a-6a0e-4692-8cfc-1b1568a74ee0/AA204CAD-2A76-432D-B06D-D1DB7D7B1530+-+Julia+Joy+Jruck%40UW.Edu.jpeg"
          alt="Students connecting on campus"
          className="h-full w-full object-cover"
        />
        {/* Gradient overlays for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-20 md:px-8">
        <div className="max-w-3xl" data-animate>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-2xl backdrop-blur-md">
            AI for IRL connections
          </span>
          <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-2xl md:text-7xl">
            Meet Your Crush IRL
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/95 drop-shadow-lg md:text-2xl">
            Skip the small talk, we make serendipity dating happen.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onWaitlistClick}
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-center text-base font-bold text-slate-900 shadow-2xl transition-all hover:scale-105 hover:shadow-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-lavender-200 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
          <div data-animate className="mt-12">
            <Countdown
              targetDate="2026-02-14T08:00:00Z"
              variant="hero"
              className="[&_*]:text-white [&_*]:drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
