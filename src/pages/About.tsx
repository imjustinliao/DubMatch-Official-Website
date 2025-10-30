import { useReveal } from '../hooks/useReveal'

const teamMembers = [
  {
    name: 'Justin Liao',
    role: 'Co-founder',
    initials: 'JL',
    linkedin: 'https://linkedin.com/in/justinliao',
    twitter: 'https://twitter.com/justinliao',
  },
  {
    name: 'Andriy Demyanyuk',
    role: 'Co-founder',
    initials: 'AD',
    linkedin: 'https://linkedin.com/in/andriydemyanyuk',
    twitter: 'https://twitter.com/andriydem',
  },
] as const

export function About() {
  useReveal()

  return (
    <main className="bg-gradient-to-b from-white to-slate-50">
      <section className="bg-white" data-animate>
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
          <div className="mb-8">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Memo
            </h1>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-rose-500 to-purple-600"></div>
          </div>
          
          <div className="prose prose-lg prose-slate max-w-none space-y-6">
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              Dating apps have become endless scrolling experiences that prioritize engagement over genuine connection. 
              We believe there\'s a better way—one that respects your time and encourages real, in-person interactions.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              DubMatch is built on the principle that the best connections happen when you share the same physical space. 
              Our AI doesn\'t just match you with people—it helps create the perfect moment for you to meet them naturally on campus.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              We\'re students ourselves, and we understand the challenges of modern dating culture. That\'s why every feature 
              we build prioritizes safety, authenticity, and meaningful connection. No endless swiping. No ghosting. Just real 
              people meeting in real life.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              Join us in bringing back the serendipity of campus romance. Join us in making dating feel human again.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24" data-animate>
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                data-animate
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-purple-600 text-3xl font-bold text-white shadow-xl">
                    {member.initials}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                    {member.role}
                  </p>
                  
                  <div className="mt-6 flex gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-600 hover:text-white hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-600 hover:text-white hover:shadow-lg"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
