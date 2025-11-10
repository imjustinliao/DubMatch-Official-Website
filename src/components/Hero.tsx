import { AppleBadge } from './AppleBadge'
import { Countdown } from './Countdown'

type HeroProps = {
  onWaitlistClick: () => void
}

export function Hero({ onWaitlistClick }: HeroProps) {
  return (
    <section className="relative isolate mt-[-132px] flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-40 sm:pt-48">
      <div className="absolute inset-0">
        <img
          src="https://st2.depositphotos.com/19415244/50618/i/450/depositphotos_506181908-stock-photo-silhouette-romantic-couple-lovers-hug.jpg"
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
          Meet Your Crush IRL.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[#fde5ef] drop-shadow-[0_12px_30px_rgba(0,0,0,0.7)] md:text-xl">
          Meet DubMatch. A dating app only for college students to meet the love of their lives. We're making in-person, serendipitous dating possible through location & personalized matchmaking.
        </p>
        <button
          type="button"
          onClick={onWaitlistClick}
          className="mt-12 inline-flex items-center rounded-full border border-white/70 bg-white px-10 py-4 text-sm font-semibold tracking-wide text-[#4b0c1c] shadow-[0_12px_30px_rgba(255,255,255,0.35)] transition hover:-translate-y-0.5 hover:text-[#ffd89c] hover:shadow-[0_20px_45px_rgba(255,255,255,0.65)]"
        >
          <AppleBadge />
          Join Waitlist
        </button>
        <div className="mt-16">
          <Countdown targetDate="2026-02-14T08:00:00Z" variant="hero" />
        </div>
      </div>
    </section>
  )
}
