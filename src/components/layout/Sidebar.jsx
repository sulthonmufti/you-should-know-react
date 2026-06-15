import { NavLink } from 'react-router-dom';
import { curriculum } from '../../constants/curriculum';

export default function Sidebar() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
    fontWeight: isActive ? '600' : '400',
    textDecoration: 'none',
    display: 'block',
    padding: '0.4rem 0',
    transition: 'color 0.2s ease',
    opacity: isActive ? 1 : 0.7
  });

  return (
    <aside style={{ 
      width: '280px', 
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      position: 'sticky',
      top: '20px'
    }}>
      {curriculum.map((module) => (
        <div key={module.moduleId}>
          <h3 style={{ 
            fontSize: '0.85rem', 
            color: 'var(--color-text)', 
            opacity: 0.5, 
            marginBottom: '0.75rem', 
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            {module.moduleTitle}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingLeft: '0.5rem', borderLeft: '1px solid var(--color-border)' }}>
            {module.topics.map(topic => (
              <div key={topic.id} style={{ paddingLeft: '1rem' }}>
                <NavLink to={topic.path} style={activeStyle}>
                  {topic.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}