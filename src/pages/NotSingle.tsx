import { AmbientField } from '../components/AmbientField'
import { useReveal } from '../hooks/useReveal'

type NotSingleProps = {
  onWaitlistClick: () => void
}

export function NotSingle({ onWaitlistClick }: NotSingleProps) {
  useReveal()

  return (
    <main className="bg-transparent text-white">
      <section className="relative isolate px-4 py-24" data-animate>
        <AmbientField variant="rose" />
        <div className="relative mx-auto max-w-3xl rounded-[40px] border border-white/15 bg-[rgba(12,5,9,0.92)] px-6 py-16 text-center shadow-soft backdrop-blur-xl md:px-12">
          <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Coming Soon
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Double to Quad Dating</h1>
          <div className="mt-6 space-y-5 text-left text-lg text-slate-200">
            <p>
              Not everyone on DubMatch is single, and that’s totally okay. We get it, sometimes dating is just more fun when your friends are around.
            </p>
            <p>
              That’s why we introduced Double & Quad Dates. You can team up with your friends, whether they’re single or already in a relationship, and go on a double or group date together. It makes things way more relaxed, social, and real.
            </p>
            <p>
              Instead of awkward one-on-one small talk, you get to hang out, meet new people, and just see where things go. Maybe your friend finds their match, maybe you do, or maybe you all just have a great time together.
            </p>
            <p>
              At the end of the day, that’s what DubMatch is about: real people, real vibes, and real moments.
            </p>
          </div>
          <button
            type="button"
            onClick={onWaitlistClick}
            className="mt-10 inline-flex items-center justify-center rounded-full border border-white/70 bg-white px-10 py-4 text-sm font-semibold text-[#4b0c1c] shadow-[0_12px_30px_rgba(255,255,255,0.35)] transition hover:-translate-y-0.5 hover:text-[#ffd89c] hover:shadow-[0_20px_45px_rgba(255,255,255,0.65)]"
          >
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  )
}
