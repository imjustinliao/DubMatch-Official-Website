import { AmbientField } from '../components/AmbientField'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  useReveal()

  return (
    <main className="bg-transparent text-white">
      <section className="relative px-4 py-24" data-animate>
        <AmbientField variant="rose" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Let&apos;s build the future of IRL dating together.
          </h1>
          <p className="mt-4 text-base text-slate-300">
            Send a quick note with your name and email—we&apos;ll get back within 24 hours.
          </p>
        </div>
        <form className="relative mx-auto mt-12 max-w-xl rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_rgba(10,3,8,0.9))] px-8 py-10 text-left text-white shadow-soft" data-animate>
          <label className="block text-sm font-semibold text-white/70">
            Full Name
            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              className="field-input mt-3"
            />
          </label>
          <label className="mt-6 block text-sm font-semibold text-white/70">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@campus.edu"
              className="field-input mt-3"
            />
          </label>
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-white/90 px-8 py-4 text-sm font-semibold text-slate-900 shadow-soft transition hover:bg-white"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}
