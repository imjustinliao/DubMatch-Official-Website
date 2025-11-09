import { AmbientField } from '../components/AmbientField'
import { Countdown } from '../components/Countdown'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { useReveal } from '../hooks/useReveal'

type HomeProps = {
  onWaitlistClick: () => void
}

export function Home({ onWaitlistClick }: HomeProps) {
  useReveal()

  return (
    <main className="bg-transparent text-slate-100">
      <Hero onWaitlistClick={onWaitlistClick} />
      <HowItWorks />
      <section className="relative isolate px-4 py-24" data-animate>
        <AmbientField variant="ink" />
        <div className="relative mx-auto max-w-4xl rounded-[48px] border border-white/12 bg-[rgba(12,5,9,0.92)] px-6 py-20 text-center shadow-card backdrop-blur-xl md:px-20">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Countdown to Launch
          </h2>
          <p className="mt-4 text-lg text-slate-400" data-animate>
            We&apos;re opening doors on Valentine’s Day. Get early access to plan your first IRL meetup.
          </p>
          <div data-animate>
            <Countdown targetDate="2026-02-14T08:00:00Z" variant="section" className="mt-12" />
          </div>
          <button
            type="button"
            onClick={onWaitlistClick}
            className="mt-12 inline-flex items-center justify-center rounded-full border border-white/70 bg-white px-10 py-4 text-sm font-semibold text-[#4b0c1c] shadow-[0_12px_30px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 hover:text-[#ffd89c] hover:shadow-[0_20px_45px_rgba(255,255,255,0.65)]"
          >
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  )
}
