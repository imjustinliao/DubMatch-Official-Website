import { Countdown } from './Countdown'

type HeroProps = {
  onWaitlistClick: () => void
}

export function Hero({ onWaitlistClick }: HeroProps) {
  return (
    <section className="relative isolate mt-[-132px] flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-40 sm:pt-48">
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/63e2d1331365f23d2862b5c3/b753fc9a-6a0e-4692-8cfc-1b1568a74ee0/AA204CAD-2A76-432D-B06D-D1DB7D7B1530+-+Julia+Joy+Jruck%40UW.Edu.jpeg"
          alt="Students connecting on campus"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/30" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center" data-animate>
        <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
          DubMatch
        </span>
        <h1 className="mt-10 text-5xl font-semibold leading-tight text-white md:text-7xl">
          Designed for meaningful collisions, not infinite feeds.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[#fde5ef] md:text-xl">
          A campus-only waitlist pairing cinema-grade mood with real-life chemistry. Drop your .edu email and we&apos;ll choreograph the meet-cute.
        </p>
        <button
          type="button"
          onClick={onWaitlistClick}
          className="mt-12 rounded-full border border-white/70 bg-white px-10 py-4 text-sm font-semibold tracking-wide text-[#4b0c1c] shadow-[0_12px_30px_rgba(255,255,255,0.35)] transition hover:-translate-y-0.5 hover:text-[#ffd89c] hover:shadow-[0_20px_45px_rgba(255,255,255,0.65)]"
        >
          Join Waitlist
        </button>
        <div className="mt-16">
          <Countdown targetDate="2026-02-14T08:00:00Z" variant="hero" />
        </div>
      </div>
    </section>
  )
}
