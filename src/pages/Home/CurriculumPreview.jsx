import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { curriculum } from '../../constants/curriculum';

export default function CurriculumPreview() {
  return (
    <section style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Kurikulum Pembelajaran
        </h2>
        <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>
          Disusun terstruktur dari fundamental hingga mahir.
        </p>
      </div>

      {/* Looping Data Modul */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {curriculum.map((module) => (
          <Card key={module.moduleId}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{module.moduleTitle}</h3>
              <p style={{ color: 'var(--color-text)', opacity: 0.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {module.moduleDescription}
              </p>
            </div>
            {/* Tampilin 3 topic pertama */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {module.topics.slice(0, 3).map((topic) => (
                <div key={topic.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '1rem',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-default)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{topic.title}</h4>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', opacity: 0.7 }}>
                      <span>⏱️ {topic.duration}</span>
                    </div>
                  </div>
                  {/* Panggil komponen Badge yang sudah dibuat */}
                  <Badge level={topic.level} />
                </div>
              ))}
            </div>
            
            {/* Indikator kalo ada materi lebih dari 3 */}
            {module.topics.length > 3 && (
               <p style={{textAlign: 'center', fontSize:'0.85rem', marginTop: '1rem', opacity: 0.6}}>
                 + {module.topics.length - 3} materi lainnya...
               </p>
            )}
          </Card>
        ))}
      </div>

      {/* button buat ke halaman pembelajaran lengkap */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
         <Link to="/learn" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" style={{ padding: '0.75rem 2rem' }}>
              Lihat Silabus Lengkap →
            </Button>
         </Link>
      </div>
    </section>
  )
}