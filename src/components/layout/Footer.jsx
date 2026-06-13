export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '2rem', 
      borderTop: '1px solid var(--color-border)',
      marginTop: 'auto'
    }}>
      <p>
        © {currentYear} YOU SHOULD KNOW REACT. 
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', marginLeft: '0.5rem' }}>
          GitHub
        </a>
      </p>
    </footer>
  )
}