import { assets } from '../data/assets'
import { navItems } from '../data/navigation'
import './Header.css'

type HeaderProps = {
  onOpenAbout: () => void
  onOpenContact: () => void
}

export function Header({ onOpenAbout, onOpenContact }: HeaderProps) {
  return (
    <header className="site-header site-menu-bar" role="banner">
      <div className="site-menu-bar__inner">
        <a className="site-menu-bar__logo" href="/" aria-label="GHD Group home">
          <img src={assets.logo} alt="" />
        </a>

        <nav className="site-menu-bar__nav" aria-label="Main navigation">
          <ul className="site-menu-bar__menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="site-menu-bar__link"
                  onClick={item.action === 'open-about' ? onOpenAbout : onOpenContact}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
