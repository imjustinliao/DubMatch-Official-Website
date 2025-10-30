import type { JSX } from 'react'

const insights = [
  {
    title: 'Profiling limits spontaneity',
    description: 'People overthink profiles instead of meeting naturally.',
    icon: 'sparkles',
  },
  {
    title: 'Chats fade quickly',
    description: 'Real chemistry happens in person, not text bubbles.',
    icon: 'chat-bubble',
  },
  {
    title: 'Apps reward swipes, not meetups',
    description: 'Platforms profit from attention, not connection.',
    icon: 'compass',
  },
] as const

const iconMap: Record<
  (typeof insights)[number]['icon'],
  JSX.Element
> = {
  sparkles: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-lavender">
      <path
        fill="currentColor"
        d="M12 2.5 13.96 8.1l5.54 1.9-5.54 1.9L12 17.5l-1.96-5.6-5.54-1.9 5.54-1.9zM5.5 16 6.5 18.9l2.9 1-2.9 1L5.5 24l-1-3.1L1.5 19.9l3-1zM17.5 16l1 2.9 3 1-3 1-1 3.1-1-3.1-2.9-1 2.9-1z"
      />
    </svg>
  ),
  'chat-bubble': (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-lavender">
      <path
        fill="currentColor"
        d="M4 4h16a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H8.83L4.5 21.17A1 1 0 0 1 3 20.5V6a2 2 0 0 1 2-2Z"
      />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-lavender">
      <path
        fill="currentColor"
        d="m12 2 4 8 8 4-8 4-4 8-4-8-8-4 8-4z"
      />
    </svg>
  ),
}

export function Insights() {
  return (
    <section className="bg-white" data-animate>
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Why Dating Apps Feel Broken
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            DubMatch focuses on how you actually connect, not how much time you spend swiping.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.title}
              data-animate
              className="group flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavender/10 text-lavender">
                {iconMap[insight.icon]}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{insight.title}</h3>
              <p className="text-base text-slate-600">{insight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
