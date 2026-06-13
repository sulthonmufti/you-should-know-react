import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1rem 2rem', 
      borderBottom: '1px solid var(--color-border)',
      backgroundColor: 'var(--color-bg)'
    }}>
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-primary)' }}>
        YOU SHOULD KNOW REACT
      </Link>
      
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/learn">Belajar</Link>
        <Link to="/about">Tentang</Link>
        <button style={{ 
          padding: '0.5rem 1rem', 
          cursor: 'pointer', 
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-default)'
        }}>
          Dark Mode
        </button>
      </div>
    </nav>
  )
}