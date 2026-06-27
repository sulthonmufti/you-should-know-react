import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import ProgressBar from '../../components/ui/ProgressBar';
import { useProgress } from '../../hooks/useProgress';
import { CheckCircle2 } from 'lucide-react';

export default function ModuleCard({ module, forceExpand = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { getModuleProgress, isCompleted } = useProgress();

  const progressData = getModuleProgress(module.moduleId);
  const shouldExpand = isExpanded || forceExpand;

  return (
    <Card>
      {/* Header Module */}
     <div onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              {module.moduleTitle}
            </h2>
            <p style={{ color: 'var(--color-text)', opacity: 0.8, fontSize: '0.95rem' }}>
              {module.moduleDescription}
            </p>
          </div>
          <button style={{ 
            background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', padding: '0.5rem' 
          }}>
            {shouldExpand ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        {/* Progres Modul */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', opacity: 0.8 }}>
            <span>Progres Modul</span>
            <span>{progressData.percentage}% ({progressData.completed} / {progressData.total} Selesai)</span>
          </div>
          <ProgressBar progress={progressData.percentage} />
        </div>
      </div>

      {/* Daftar Materi */}
      {shouldExpand && (
        <div style={{ 
          marginTop: '1rem', 
          paddingTop: '1rem', 
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {module.topics.map((topic) => {
            const completed = isCompleted(topic.id);
            return (
              <Link 
                key={topic.id} 
                to={topic.path}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '1rem',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-default)',
                  textDecoration: 'none',
                  color: 'var(--color-text)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {completed ? (
                    <CheckCircle2 size={20} color="var(--color-success)" />
                  ) : (
                    <PlayCircle size={20} color="var(--color-primary)" />
                  )}

                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                      {topic.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>⏱️ {topic.duration}</span>
                  </div>
                </div>
                <Badge level={topic.level} />
              </Link>
            );
          })}
        </div>
      )}
    </Card>
  );
}