export default function PageWrapper({ children }) {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      minHeight: '80vh'
    }}>
      {children}
    </main>
  )
}