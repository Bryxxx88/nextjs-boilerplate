// /components/Nav.tsx
'use client'
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About me', href: '#aboutme' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  function toggleLightMode() {
    document.body.classList.toggle('light-mode');
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-left">John Bryx Jovellanos</div>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span>{open ? '✕' : '☰'}</span>
        </button>
      </div>
    </header>
  )
}