import { useEffect, useState } from 'react'
import { AboutModal } from './components/AboutModal'
import { ContactModal } from './components/ContactModal'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'

type OpenModal = 'about' | 'contact' | null

export function App() {
  const [openModal, setOpenModal] = useState<OpenModal>(null)

  useEffect(() => {
    if (!openModal) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenModal(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [openModal])

  return (
    <>
      <Header
        onOpenAbout={() => setOpenModal('about')}
        onOpenContact={() => setOpenModal('contact')}
      />
      <LandingPage />
      <AboutModal isOpen={openModal === 'about'} onClose={() => setOpenModal(null)} />
      <ContactModal isOpen={openModal === 'contact'} onClose={() => setOpenModal(null)} />
    </>
  )
}
