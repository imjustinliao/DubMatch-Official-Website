import { AmbientField } from '../components/AmbientField'
import { useReveal } from '../hooks/useReveal'
import justinAvatar from '../assets/justin.png'
import andriyAvatar from '../assets/andriy.jpeg'

const teamMembers = [
  {
    name: 'Justin Liao',
    role: 'Co-founder',
    avatar: justinAvatar,
    linkedin: 'https://www.linkedin.com/in/justin-liao23/',
    twitter: 'https://x.com/imjustinliao',
  },
  {
    name: 'Andriy Demyanyuk',
    role: 'Co-founder',
    avatar: andriyAvatar,
    linkedin: 'https://www.linkedin.com/in/andriyd/',
    instagram: 'https://www.instagram.com/_andriydem_/',
  },
] as const

export function About() {
  useReveal()

  return (
    <main className="bg-transparent text-white">
      <section className="relative px-4 py-24" data-animate>
        <AmbientField variant="rose" />
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-[40px] border border-white/12 bg-[rgba(12,5,9,0.92)] px-8 py-12 text-white shadow-soft backdrop-blur-xl">
            <div className="mb-8 text-left">
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">Memo</h1>
              <div className="mt-4 h-[1px] w-24 bg-white/40" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-slate-200">
              <p>
                Dating apps have become endless scrolling experiences that prioritize engagement over genuine connection.
                We believe there&apos;s a better way—one that respects your time and encourages real, in-person interactions.
              </p>

              <p>
                DubMatch is built on the principle that the best connections happen when you share the same physical space.
                Our AI doesn&apos;t just match you with people—it helps create the perfect moment for you to meet them naturally on campus.
              </p>

              <p>
                We&apos;re students ourselves, and we understand the challenges of modern dating culture. That&apos;s why every feature we build prioritizes safety, authenticity, and meaningful connection. No endless swiping. No ghosting. Just real people meeting in real life.
              </p>

              <p>
                Join us in bringing back the serendipity of campus romance. Join us in making dating feel human again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24" data-animate>
        <AmbientField variant="ink" />
        <div className="relative mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group rounded-[32px] border border-white/12 bg-[rgba(15,6,11,0.92)] px-8 py-10 text-center text-white shadow-soft backdrop-blur"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-24 w-24 rounded-full border border-white/20 object-cover shadow-soft"
                  />
                  <h3 className="mt-6 text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{member.role}</p>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/15 text-[#5c1022] shadow-soft transition hover:-translate-y-1 hover:text-[#7a1a32]"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    {'twitter' in member && member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/15 text-[#5c1022] shadow-soft transition hover:-translate-y-1 hover:text-[#7a1a32]"
                        aria-label="Twitter"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {'instagram' in member && member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/15 text-[#5c1022] shadow-soft transition hover:-translate-y-1 hover:text-[#7a1a32]"
                        aria-label="Instagram"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                        </svg>
                      </a>
                    )}
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
