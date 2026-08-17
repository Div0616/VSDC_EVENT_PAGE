import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

// Crewmate logo
const CrewmateLogo = () => (
  <img
    src="/images/pngwing.com.png"
    alt="Among Us crewmate logo"
    style={{
      height: 44,
      width: 'auto',
      objectFit: 'contain',
      flexShrink: 0,
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))',
    }}
  />
)

// VSDC V logo — clipped container removes internal black padding from the JPEG
const VsdcLogo = () => (
  <div
    style={{
      width: 28,
      height: 36,
      overflow: 'hidden',
      flexShrink: 0,
      mixBlendMode: 'screen',
      position: 'relative',
    }}
  >
    <img
      src="/images/vsdc logo.jpeg"
      alt="VSDC V logo"
      style={{
        height: 52,
        width: 'auto',
        objectFit: 'cover',
        position: 'absolute',
        top: '-6px',
        left: '-6px',
      }}
    />
  </div>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="nav">
      <div className={styles.navInner}>
        {/* Logo */}
        <a href="#" className={styles.logo} id="nav-logo">
          <CrewmateLogo />
          {/* V logo + SDC text grouped tightly */}
          <span style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
            <VsdcLogo />
            <span
              className={styles.logoText}
              style={{
                background: 'linear-gradient(90deg, #ff8c00 0%, #ff4500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
                marginLeft: '-4px',
              }}
            >SDC</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks} id="nav-links">
          <li><a href="#" className={styles.navLink} id="nav-games">Event <span className={styles.caret}></span></a></li>
          <li><a href="#" className={styles.navLink} id="nav-news">The Crew</a></li>
          <li><a href="#" className={styles.navLink} id="nav-about">About <span className={styles.caret}></span></a></li>
          <li><a href="#" className={styles.navLink} id="nav-shop">Prizes</a></li>
          <li><a href="#" className={styles.navLink} id="nav-shop">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/vsdc.vighnolearn?igsh=aGo4cXY3a3Y5Z2gx" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} id="nav-instagram" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          id="nav-hamburger"
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.bar1Open : ''}`}></span>
          <span className={`${styles.bar} ${mobileOpen ? styles.bar2Open : ''}`}></span>
          <span className={`${styles.bar} ${mobileOpen ? styles.bar3Open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`} id="nav-mobile-menu">
        <a href="#" className={styles.mobileLink}>Games</a>
        <a href="#" className={styles.mobileLink}>News</a>
        <a href="#" className={styles.mobileLink}>About</a>
        <a href="#" className={styles.mobileLink}>Shop</a>
        <div className={styles.mobileSocials}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><InstagramIcon /></a>
        </div>
      </div>
    </nav>
  )
}
