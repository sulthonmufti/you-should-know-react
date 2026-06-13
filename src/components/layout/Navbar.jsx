import { useState, useContext, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  //kalo link nya aktif jadi bold & warna primary
  const getActiveStyle = ({ isActive }) => ({
    textDecoration: 'none',
    fontWeight: isActive ? '700' : '500',
    color: isActive ? 'var(--color-primary)' : 'inherit',
    borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
    paddingBottom: '0.25rem',
    transition: 'all 0.2s ease'
  })

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 2rem', 
      borderBottom: '1px solid var(--color-border)',
      backgroundColor: 'var(--color-bg)',
      position: 'relative'
    }}>
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-primary)' }}>
        YOU SHOULD KNOW REACT
      </Link>

      {/* Hamburger button buat mobile */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'none',
          padding: '0.5rem',
          background: 'transparent',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-sharp)',
          color: 'var(--color-text)',
          cursor: 'pointer'
        }}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>
      
      {/* Container Menu Links */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        alignItems: 'center' 
      }}>
        {/* gunain NavLink daripada Link biasa */}
        <NavLink to="/learn" style={getActiveStyle}>Belajar</NavLink>
        <NavLink to="/about" style={getActiveStyle}>Tentang</NavLink>
        
        <button 
          onClick={toggleTheme}
          style={{ 
            padding: '0.5rem 1rem', 
            cursor: 'pointer', 
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-default)',
            color: 'var(--color-text)',
            marginLeft: '0.5rem'
          }}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}