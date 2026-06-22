import { NavLink } from 'react-router-dom';
import { curriculum } from '../../constants/curriculum';
import { useProgress } from '../../hooks/useProgress';
import { CheckCircle2, Circle } from 'lucide-react';

export default function Sidebar() {
  // panggil hook progress global kita
  const { isCompleted, getModuleProgress } = useProgress();

  const activeStyle = ({ isActive }) => ({
    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
    fontWeight: isActive ? '600' : '400',
    textDecoration: 'none',
    display: 'block',
    padding: '0.4rem 0',
    transition: 'color 0.2s ease',
    opacity: isActive ? 1 : 0.8
  });

  return (
    <aside style={{ 
      width: '280px', 
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'sticky',
      top: '20px',
      maxHeight: 'calc(100vh - 40px)',
      overflowY: 'auto'
    }}>
      {curriculum.map((module) => {
        // dapatkan persentase progres untuk modul spesifik ini
        const progressData = getModuleProgress(module.moduleId);

        return (
          <div key={module.moduleId}>
            
            {/* Header Modul & Angka Persentase */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ 
                fontSize: '0.85rem', 
                color: 'var(--color-text)', 
                opacity: 0.5, 
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: 0
              }}>
                {module.moduleTitle}
              </h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: progressData.percentage === 100 ? 'var(--color-success)' : 'var(--color-primary)' }}>
                {progressData.percentage}%
              </span>
            </div>

            {/* Mini Progress Bar di Sidebar */}
            <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--color-border)', borderRadius: '2px', marginBottom: '1rem', overflow: 'hidden' }}>
              <div style={{ 
                width: `${progressData.percentage}%`, 
                height: '100%', 
                backgroundColor: progressData.percentage === 100 ? 'var(--color-success)' : 'var(--color-primary)', 
                transition: 'width 0.4s ease, background-color 0.4s ease' 
              }} />
            </div>

            {/* Daftar Materi dengan Indikator Selesai */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '0.5rem', borderLeft: '1px solid var(--color-border)' }}>
              {module.topics.map(topic => {
                // cek apakah materi ini sudah dicentang selesai
                const completed = isCompleted(topic.id);
                
                return (
                  <div key={topic.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '0.5rem' }}>
                    {/* Render Icon Centang Hijau atau Lingkaran Kosong */}
                    {completed ? (
                      <CheckCircle2 size={16} color="var(--color-success)" style={{ flexShrink: 0 }} />
                    ) : (
                      <Circle size={16} color="var(--color-border)" style={{ flexShrink: 0 }} />
                    )}
                    
                    <NavLink to={topic.path} style={activeStyle}>
                      {topic.title}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </aside>
  );
}