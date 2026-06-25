import { useState } from 'react';
import { curriculum } from '../../constants/curriculum';
import ModuleCard from './ModuleCard';
import SearchBar from '../../components/ui/SearchBar';

export default function Learn() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState('Semua');

  const filteredCurriculum = curriculum.map(module => {
    const filteredTopics = module.topics.filter(topic => {
      const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            topic.description.toLowerCase().includes(searchQuery.toLowerCase());
                            
      const matchesLevel = filterLevel === 'Semua' || topic.level === filterLevel;
      
      return matchesSearch && matchesLevel;
    });

    return { ...module, topics: filteredTopics };
  }).filter(module => module.topics.length > 0); 

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Jalur Pembelajaran
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', opacity: 0.8, lineHeight: '1.6' }}>
          Pilih modul di bawah ini atau gunakan kotak pencarian untuk menemukan materi secara spesifik.
        </p>
      </div>

      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        filterLevel={filterLevel} 
        setFilterLevel={setFilterLevel} 
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {filteredCurriculum.length > 0 ? (
          filteredCurriculum.map((module) => (
            <ModuleCard 
              key={module.moduleId} 
              module={module} 
              forceExpand={searchQuery !== '' || filterLevel !== 'Semua'} 
            />
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem', 
            backgroundColor: 'var(--color-surface)', 
            borderRadius: 'var(--radius-card)',
            border: '1px dashed var(--color-border)'
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Materi Tidak Ditemukan</h3>
            <p style={{ opacity: 0.7 }}>
              Pencarian untuk <strong>"{searchQuery}"</strong> pada level <strong>{filterLevel}</strong> tidak membuahkan hasil.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}