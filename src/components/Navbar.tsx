import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

type NavbarProps = {
  onWaitlistClick: () => void
}

const navLinkClasses =
  'text-sm font-medium text-slate-700 transition-all hover:text-slate-900'

export function Navbar({ onWaitlistClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        isScrolled ? 'bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-purple-600 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
            DM
          </div>
          <span className="text-lg font-bold text-slate-900">DubMatch</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? 'font-semibold' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? 'font-semibold' : ''}`
            }
          >
            About
          </NavLink>
        </nav>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mr-3 text-sm font-medium text-slate-700 transition-all hover:text-slate-900 md:hidden ${
              isActive ? 'font-semibold' : ''
            }`
          }
        >
          About
        </NavLink>
        <button
          type="button"
          onClick={onWaitlistClick}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-slate-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Join Waitlist
        </button>
      </div>
    </header>
  )
}
