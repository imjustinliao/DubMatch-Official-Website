import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { WaitlistModal } from './components/WaitlistModal'
import { About } from './pages/About'
import { Home } from './pages/Home'

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
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <ScrollToTop />
      <Navbar onWaitlistClick={openWaitlist} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home onWaitlistClick={openWaitlist} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
      <WaitlistModal open={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  )
}
