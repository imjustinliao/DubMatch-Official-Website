import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { AppleBadge } from './AppleBadge'

type NavbarProps = {
  onWaitlistClick: () => void
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const navLinkClasses =
  'rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:text-white'

export function Navbar({ onWaitlistClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 flex w-full justify-center px-4 pb-4 pt-4">
      <div
        className={`glass-panel flex w-full max-w-6xl items-center justify-between rounded-[999px] border border-white/30 px-6 py-3 transition-all duration-300 ${
          isScrolled ? 'shadow-soft' : 'shadow-card'
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="DubMatch" className="h-12 w-12 rounded-2xl object-cover shadow-soft" />
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
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1 rounded-full border border-white/30 p-2 text-white md:hidden"
            aria-label="Open navigation menu"
          >
            <span className="block h-0.5 w-6 rounded bg-white" />
            <span className="block h-0.5 w-6 rounded bg-white" />
            <span className="block h-0.5 w-6 rounded bg-white" />
          </button>
          <button
            type="button"
            onClick={onWaitlistClick}
            className="hidden items-center rounded-full border border-white/60 bg-white px-5 py-2.5 text-sm font-semibold text-[#4b0c1c] shadow-[0_8px_22px_rgba(255,255,255,0.35)] transition hover:-translate-y-[1px] hover:text-[#ffd89c] hover:shadow-[0_14px_30px_rgba(255,255,255,0.6)] md:inline-flex"
          >
            <AppleBadge />
            Join Waitlist
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="fixed inset-0 z-30 flex flex-col bg-black/70 backdrop-blur-lg md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="self-end p-5 text-white"
            aria-label="Close navigation menu"
          >
            ✕
          </button>
          <div className="mt-4 flex flex-1 flex-col items-center gap-6 text-lg text-white">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-xl font-semibold ${isActive ? 'text-white' : 'text-white/70'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={onWaitlistClick}
              className="mt-4 inline-flex items-center rounded-full border border-white/70 bg-white px-6 py-2 text-sm font-semibold text-[#4b0c1c]"
            >
              <AppleBadge />
              Join Waitlist
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
