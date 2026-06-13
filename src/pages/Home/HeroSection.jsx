import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'

export default function HeroSection() {
  return (
    <section className="animate-fade-in-up" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '4rem 1rem',
      gap: '1.5rem',
      marginTop: '2rem'
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: '800',
        color: 'var(--color-primary)',
        lineHeight: '1.1',
        margin: 0
      }}>
        YOU SHOULD KNOW REACT!
      </h1>
      
      <p style={{
        fontSize: '1.25rem',
        color: 'var(--color-text)',
        maxWidth: '600px',
        lineHeight: '1.6',
        opacity: 0.9
      }}>
        Gratis. Mandiri. Lebih efektif dari bootcamp mahal.
      </p>

      <Link to="/learn" style={{ textDecoration: 'none', marginTop: '1rem' }}>
        <Button variant="primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}>
          Mulai Belajar Gratis
        </Button>
      </Link>
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '2.5rem',
        color: 'var(--color-text)',
        opacity: 0.7,
        fontSize: '0.95rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontWeight: '500'
      }}>
        <span>📚 19 Materi</span>
        <span>•</span>
        <span>🧩 4 Modul</span>
        <span>•</span>
        <span>🎉 100% Gratis</span>
      </div>
    </section>
  )
}