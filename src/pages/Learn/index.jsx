import { curriculum } from '../../constants/curriculum';
import ModuleCard from './ModuleCard';

export default function Learn() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {/* Header Halaman */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Jalur Pembelajaran
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', opacity: 0.8, lineHeight: '1.6' }}>
          Pilih modul di bawah ini untuk memulai. Kami menyarankan Anda untuk mengikuti urutan dari atas ke bawah jika Anda baru mengenal React.
        </p>
      </div>

      {/* Grid / List Semua Modul */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {curriculum.map((module) => (
          <ModuleCard key={module.moduleId} module={module} />
        ))}
      </div>
    </div>
  );
}