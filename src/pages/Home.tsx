import { AmbientField } from '../components/AmbientField'
import { AppleBadge } from '../components/AppleBadge'
import { Countdown } from '../components/Countdown'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ShareLinkButton } from '../components/ShareLinkButton'

const reasons = [
  {
    title: 'Personalized AI matchmaking',
    description:
      'We built DubMatch to go beyond surface-level matching. Our AI works like ChatGPT, where you can literally tell it who you’re into, what you care about, and even upload a photo of your crush so it understands your vibe and preferences on a deeper level.',
    gradient: 'linear-gradient(135deg, rgba(255,160,122,0.9), rgba(255,78,80,0.85))',
  },
  {
    title: 'Meeting IRL > Matching',
    description:
      'We’re a space made just for college students. No endless swiping or awkward small talk. Our goal is to get you off the screen and actually meeting people in real life to see if you truly vibe.',
    gradient: 'linear-gradient(135deg, rgba(255,213,79,0.95), rgba(255,111,97,0.85))',
  },
  {
    title: 'Serendipitous & Real',
    description:
      'We prioritize real, spontaneous connections. Picture this: you meet your crush right after your algebra class without preparing. That’s the kind of moment DubMatch is built for — authentic, exciting, and safe.',
    gradient: 'linear-gradient(135deg, rgba(214,173,255,0.9), rgba(255,122,206,0.85))',
  },
] as const

type HomeProps = {
  onWaitlistClick: () => void
}

export function Home({ onWaitlistClick }: HomeProps) {
  useReveal()
  const [activeReason, setActiveReason] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveReason((prev) => (prev + 1) % reasons.length)
    }, 5800)
    return () => window.clearInterval(id)
  }, [])

  const currentReason = useMemo(() => reasons[activeReason], [activeReason])

  return (
    <main className="bg-transparent text-slate-100">
      <Hero onWaitlistClick={onWaitlistClick} />
      <HowItWorks />
      <section className="relative isolate px-4 py-24" data-animate>
        <AmbientField variant="rose" />
        <div className="relative mx-auto max-w-5xl px-6 py-12 text-center md:px-16">
          <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Why DubMatch?
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">The end of dating apps.</h2>
          <article className="relative mx-auto mt-12 flex h-[320px] max-w-2xl flex-col justify-center rounded-[32px] border border-white/20 bg-white/5 px-6 py-10 text-left text-white shadow-soft backdrop-blur sm:px-8 sm:py-12">
            <div
              className="pointer-events-none absolute inset-[-8px] rounded-[40px] opacity-80"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(255,255,255,0.6), rgba(255,87,110,0.55), rgba(255,255,255,0.6))',
                filter: 'blur(8px)',
              }}
            />
            <div className="absolute inset-0 rounded-[32px]" style={{ background: currentReason.gradient, opacity: 0.18 }} />
            <div className="meteor-orbit">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="meteor-dot"
                  style={{ '--delay': `${dot * 1.5}s`, '--radius': '180px' } as CSSProperties}
                />
              ))}
            </div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">{currentReason.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/90">{currentReason.description}</p>
            </div>
          </article>
          <div className="mt-10 flex justify-center gap-3">
            {reasons.map((reason, index) => (
              <button
                key={reason.title}
                type="button"
                onClick={() => setActiveReason(index)}
                className={`h-2 rounded-full transition-all ${
                  activeReason === index ? 'w-10 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.45)]' : 'w-6 bg-white/50'
                }`}
                aria-label={`Show reason ${index + 1}`}
              />
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
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onWaitlistClick}
              className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/70 bg-white px-10 py-4 text-sm font-semibold text-[#4b0c1c] shadow-[0_12px_30px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 hover:text-[#ffd89c] hover:shadow-[0_20px_45px_rgba(255,255,255,0.65)]"
            >
              <AppleBadge />
              Join Waitlist
            </button>
            <ShareLinkButton label="Share Link" />
          </div>
        </div>
      </section>
    </main>
  )
}
