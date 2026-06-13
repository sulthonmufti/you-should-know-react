import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside style={{ 
      width: '250px', 
      borderRight: '1px solid var(--color-border)', 
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h3 style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>Modul 0: Fondasi</h3>
      <ul style={{ listStyle: 'none', paddingLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><Link to="/learn/module-0/project-anatomy">0.1 Anatomi Project</Link></li>
        <li><Link to="/learn/module-0/html-css">0.2 HTML & CSS</Link></li>
      </ul>
    </aside>
  )
}