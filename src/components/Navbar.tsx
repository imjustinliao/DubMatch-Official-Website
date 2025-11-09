import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

type NavbarProps = {
  onWaitlistClick: () => void
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/contact', label: 'Contact' },
  { path: '/about', label: 'About' },
]

const navLinkClasses =
  'rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:text-white'

export function Navbar({ onWaitlistClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 flex w-full justify-center px-4 pb-4 pt-4">
      <div
        className={`glass-panel flex w-full max-w-6xl items-center justify-between rounded-[999px] border border-white/30 px-6 py-3 transition-all duration-300 ${
          isScrolled ? 'shadow-soft' : 'shadow-card'
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400 via-[#f2789a] to-orange-200 text-base font-black text-slate-900 shadow-soft">
            DM
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-slate-900">DubMatch</span>
            <span className="text-xs uppercase tracking-[0.35em] text-[#5c1022b3]">Campus IRL</span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 rounded-full border border-white/30 bg-white/10 px-2 py-1 text-white shadow-card backdrop-blur md:flex">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive
                      ? 'bg-white/20 text-white shadow-inner-soft'
                      : 'text-white/70'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-wide text-white/50 ${
                    isActive ? 'text-white' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            onClick={onWaitlistClick}
            className="rounded-full border border-white/60 bg-white px-5 py-2.5 text-sm font-semibold text-[#4b0c1c] shadow-[0_8px_22px_rgba(255,255,255,0.35)] transition hover:-translate-y-[1px] hover:text-[#ffd89c] hover:shadow-[0_14px_30px_rgba(255,255,255,0.6)]"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  )
}
