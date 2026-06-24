import { Search, Filter } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery, filterLevel, setFilterLevel }) {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '1rem', 
      marginBottom: '2rem', 
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      
      {/* Kotak Input Pencarian */}
      <div style={{ flex: 1, position: 'relative', minWidth: '250px' }}>
        <Search 
          size={20} 
          style={{ 
            position: 'absolute', 
            left: '12px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            color: 'var(--color-text)', 
            opacity: 0.5 
          }} 
        />
        <input
          type="text"
          placeholder="Cari materi React (contoh: Hooks, Props)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '0.75rem 1rem 0.75rem 2.5rem', 
            borderRadius: 'var(--radius-default)', 
            border: '1px solid var(--color-border)', 
            backgroundColor: 'var(--color-bg)', 
            color: 'var(--color-text)',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
      </div>

      {/* Dropdown Filter Level */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        backgroundColor: 'var(--color-surface)', 
        padding: '0.5rem 1rem', 
        borderRadius: 'var(--radius-default)', 
        border: '1px solid var(--color-border)' 
      }}>
        <Filter size={18} style={{ color: 'var(--color-text)', opacity: 0.5 }} />
        <select
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: 'var(--color-text)', 
            outline: 'none', 
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}
        >
          <option value="Semua">Semua Level</option>
          <option value="Dasar">Level Dasar</option>
          <option value="Menengah">Level Menengah</option>
          <option value="Lanjut">Level Lanjut</option>
        </select>
      </div>

    </div>
  );
}