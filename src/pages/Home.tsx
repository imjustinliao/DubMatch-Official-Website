import { AmbientField } from '../components/AmbientField'
import { AppleBadge } from '../components/AppleBadge'
import { Countdown } from '../components/Countdown'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    title: 'Hyper-personalized AI matchmaking',
    description:
      'Talk to our ChatGPT-grade concierge about the vibe you want. Share goals, quirks, even upload a photo of your crush so the AI understands who you actually like.',
  },
  {
    title: 'Built only for college students',
    description:
      'DubMatch is campus-only. We skip swiping and small talk so you can feel the chemistry in person with people who share your classrooms and clubs.',
  },
  {
    title: 'Engineered serendipity',
    description:
      'We choreograph IRL meetups that feel inevitable—like bumping into your future partner right after Calc lecture. Serendipity becomes the product.',
  },
] as const

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
        <AmbientField variant="rose" />
        <div className="relative mx-auto max-w-5xl rounded-[48px] border border-white/10 bg-[rgba(12,5,9,0.92)] px-6 py-20 text-center shadow-card backdrop-blur-xl md:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Why DubMatch</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Why we&apos;re not another dating app</h2>
          <p className="mt-4 text-lg text-slate-300">
            We care about real-life chemistry, not infinite feeds. Here&apos;s how we design for it.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-[28px] border border-white/15 bg-white/5 px-6 py-8 text-left text-white shadow-soft transition hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="relative isolate px-4 py-24" data-animate>
        <AmbientField variant="ink" />
        <div className="relative mx-auto max-w-4xl rounded-[48px] border border-white/12 bg-[rgba(12,5,9,0.92)] px-6 py-20 text-center shadow-card backdrop-blur-xl md:px-20">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Countdown to Launch
          </h2>
          <p className="mt-4 text-lg text-slate-400" data-animate>
            We&apos;re launching on Valentine’s Day 2026. Get early access now.
          </p>
          <div data-animate>
            <Countdown targetDate="2026-02-14T08:00:00Z" variant="section" className="mt-12" />
          </div>
          <button
            type="button"
            onClick={onWaitlistClick}
            className="mt-12 inline-flex items-center justify-center rounded-full border border-white/70 bg-white px-10 py-4 text-sm font-semibold text-[#4b0c1c] shadow-[0_12px_30px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 hover:text-[#ffd89c] hover:shadow-[0_20px_45px_rgba(255,255,255,0.65)]"
          >
            <AppleBadge />
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  )
}
