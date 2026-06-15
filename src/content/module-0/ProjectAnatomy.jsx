import CodeBlock from '../../components/content/CodeBlock';

export default function ProjectAnatomy() {
  const viteConfigCode = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
  `;

  const mainJsxCode = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          1. Teori Dasar: Membedah Struktur Vite & React
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Berbeda dengan website HTML tradisional di mana Anda membuka file <code>index.html</code> langsung di browser, aplikasi React modern menggunakan <em>bundler</em> (seperti Vite) untuk menerjemahkan kode JSX menjadi JavaScript murni yang dipahami browser.
        </p>
        <p>
          Di dalam project ini, terdapat tiga elemen kunci penyusun anatominya:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong>package.json</strong>: Berisi daftar *library* pendukung (dependencies) seperti <code>react-router-dom</code> atau <code>lucide-react</code>.</li>
          <li><strong>index.html</strong>: Titik masuk utama. Di sinilah terdapat sebuah div kosong dengan id <code>root</code>.</li>
          <li><strong>src/main.jsx</strong>: File jembatan yang menghubungkan komponen React dengan file HTML.</li>
        </ul>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          2. Contoh Implementasi (Example)
        </h2>
        <p>Mari kita lihat bagaimana file <code>main.jsx</code> (titik awal aplikasi React) ditulis:</p>
        
        <CodeBlock code={mainJsxCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          3. Analisis & Bedah Kode
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Mengapa kode di atas ditulis seperti itu? Mari kita bedah per baris:
        </p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li>
            <strong><code>ReactDOM.createRoot()</code></strong>: Fungsi ini bertugas mencari elemen ber-id <code>root</code> di dalam <code>index.html</code>. Ia akan mengubah <code>div</code> kosong tersebut menjadi "akar" (root) dari seluruh komponen visual React.
          </li>
          <li>
            <strong><code>&lt;React.StrictMode&gt;</code></strong>: Ini adalah alat bantu pembungkus dari React. Ia tidak merender apa pun ke layar, tetapi bertugas mencari potensi *bug* dan peringatan di dalam kode Anda selama masa *development*.
          </li>
          <li>
            <strong><code>&lt;App /&gt;</code></strong>: Ini adalah komponen utama aplikasi kita. Seluruh halaman, <em>navbar</em>, <em>footer</em>, dan logika <em>routing</em> yang telah kita bangun berada di dalam komponen ini.
          </li>
        </ul>
      </section>

    </div>
  );
}