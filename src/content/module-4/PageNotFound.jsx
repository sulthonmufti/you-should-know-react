import CodeBlock from '../../components/content/CodeBlock';

export default function PageNotFound() {
  const notFoundCode = `
// FILE: App.jsx
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound'; // Import komponen 404

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Route Wildcard (*) HARUS DITARUH DI PALING BAWAH */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Wildcard Routing & UX
        </h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Apa yang terjadi jika pengunjung salah mengetik URL? Misalnya mereka mengetik <code>/belajarr</code> dengan R ganda. Secara <em>default</em>, React Router akan menampilkan layar putih kosong (blank). Ini adalah pengalaman UX yang sangat buruk. Kita harus merancang jaring pengaman (<em>safety net</em>) berupa halaman 404.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          2. Contoh Implementasi Routing 404
        </h2>
        <CodeBlock code={notFoundCode} language="jsx" />
      </section>

      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Urutan itu Penting!
        </h2>
        <p style={{ opacity: 0.9 }}>
          Pada React Router versi lama (v5 ke bawah), rute dievaluasi dari atas ke bawah. Tanda Bintang <code>*</code> berarti "Cocok dengan karakter apapun". Jika Anda menaruh <code>Route path="*"</code> di paling atas, maka SEMUA halaman akan diarahkan ke 404. Meski React Router v6 sudah jauh lebih pintar dalam mencocokkan pola (<em>pattern matching</em>), menempatkan rute wildcard di paling bawah tetap menjadi standar emas koding.
        </p>
      </section>
    </div>
  );
}