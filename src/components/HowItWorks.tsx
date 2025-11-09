import { AmbientField } from './AmbientField'

const steps = [
  {
    number: 1,
    title: 'Create your profile',
    description: 'Verify with your .edu email so we know you share campus spaces.',
  },
  {
    number: 2,
    title: 'See who\'s nearby',
    description: 'AI suggests the right moment, place, and icebreakers to meet safely.',
  },
  {
    number: 3,
    title: 'Meet IRL',
    description: 'Scan to confirm the meetup, then keep the conversation going in-app.',
  },
] as const

const stepKeywords = ['VERIFY', 'DISCOVER', 'MEET'] as const

export function HowItWorks() {
  return (
    <section className="relative isolate px-4 py-24" data-animate>
      <AmbientField variant="rose" />
      <div className="relative mx-auto max-w-6xl px-2 md:px-4">
        <div className="mx-auto max-w-2xl text-center text-white">
          <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            How it works
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
            Three deliberate moves to stage the meet-up.
          </h2>
          <p className="mt-4 text-lg text-slate-300 md:text-xl">
            Inspired by Dieter Rams: simple, honest, and purposeful.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_rgba(255,255,255,0.02))] px-8 py-10 text-left text-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-white/40"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/30 text-2xl font-semibold text-[#5c1022] transition group-hover:scale-110">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="mt-6 flex-1 text-base leading-relaxed text-slate-200 transition group-hover:text-white">
                {step.description}
              </p>
              <div className="mt-8 text-center text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-slate-400">
                {stepKeywords[index]}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
