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
    <main className="bg-white">
      <Hero onWaitlistClick={onWaitlistClick} />
      <HowItWorks />
      <section className="relative bg-gradient-to-b from-white to-slate-50" data-animate>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Countdown to Launch
          </h2>
          <p className="mt-4 text-lg text-slate-600" data-animate>
            We&apos;re opening doors on Valentine’s Day. Get early access to plan your first IRL meetup.
          </p>
          <div data-animate>
            <Countdown
              targetDate="2026-02-14T08:00:00Z"
              variant="section"
              className="mt-10"
            />
          </div>
          <button
            type="button"
            onClick={onWaitlistClick}
            className="mt-12 rounded-full border border-slate-900/10 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  )
}
