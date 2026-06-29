import { useState } from 'react';
import FileTreeView from '../../components/ui/FileTreeView';

export default function ProjectStructure() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Struktur Project React
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', opacity: 0.8 }}>
          Mari kita bedah arsitektur di balik project yang sedang Anda lihat ini. 
          Klik pada nama file di struktur sebelah kiri untuk melihat fungsinya!
        </p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Kolom Kiri: Visualisasi Tree Interaktif */}
        <div style={{ flex: '1 1 300px' }}>
          <FileTreeView onSelectFile={setSelectedFile} />
        </div>

        {/* Kolom Kanan: Detail Penjelasan */}
        <div style={{ flex: '2 1 400px', backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
          {selectedFile ? (
            <div>
              <h2 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                📄 {selectedFile.name}
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {selectedFile.desc}
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', opacity: 0.5, marginTop: '2rem' }}>
              <p>👈 Klik salah satu file (bukan folder) di sebelah kiri untuk melihat penjelasannya di sini.</p>
            </div>
          )}
        </div>
      </div>

      {/* Bagian Diagram Alur */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>
          Diagram Alur: Bagaimana React Bekerja?
        </h2>
        <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>1. Anda menulis JSX di <code>App.jsx</code></p>
          <p>⬇️ (Babel/Vite mengubah JSX menjadi Javascript murni)</p>
          <p style={{ fontWeight: 'bold', margin: '1rem 0' }}>2. React membaca Javascript dan membuat "Virtual DOM" (Peta UI di memori)</p>
          <p>⬇️ (React membandingkan Virtual DOM dengan layar pengguna saat ini)</p>
          <p style={{ fontWeight: 'bold', margin: '1rem 0' }}>3. <code>main.jsx</code> menyuntikkan hasil akhir ke <code>&lt;div id="root"&gt;</code> di <code>index.html</code></p>
        </div>
      </div>

    </div>
  );
}