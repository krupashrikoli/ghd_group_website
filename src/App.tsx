import { useEffect, useState } from 'react'
import { ContactModal } from './components/ContactModal'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    if (!isContactOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsContactOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isContactOpen])

  return (
    <>
      <Header onOpenContact={() => setIsContactOpen(true)} />
      <LandingPage />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
