import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CursorRipple } from './components/CursorRipple'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { WaitlistModal } from './components/WaitlistModal'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const openWaitlist = () => setIsWaitlistOpen(true)
  const closeWaitlist = () => setIsWaitlistOpen(false)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#22020a] via-[#340514] to-[#090208] text-slate-100">
      <CursorRipple />
      <ScrollToTop />
      <Navbar onWaitlistClick={openWaitlist} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home onWaitlistClick={openWaitlist} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <WaitlistModal open={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  )
}
