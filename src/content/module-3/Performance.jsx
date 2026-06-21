import CodeBlock from '../../components/content/CodeBlock';

export default function Performance() {
  const memoCode = `
import { useState, useMemo, memo } from 'react';

// 1. React.memo: Mencegah komponen anak dirender ulang jika props-nya TIDAK berubah
const MahalComponent = memo(({ data }) => {
  console.log('Komponen Mahal di-render!');
  return <div>Data: {data}</div>;
});

export default function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 2. useMemo: Mengingat hasil kalkulasi berat agar tidak dihitung ulang tiap ketik
  const kalkulasiBerat = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) { result += i; } // Simulasi proses berat
    return result;
  }, []); // Array kosong = hanya hitung 1x saat pertama kali muncul

  return (
    <div className="card">
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Ketik..." />
      <button onClick={() => setCount(count + 1)}>Klik: {count}</button>
      
      <p>Hasil Kalkulasi: {kalkulasiBerat}</p>
      
      {/* Komponen ini TIDAK akan ikut ter-render saat input/tombol ditekan */}
      <MahalComponent data="Data Statis" />
    </div>
  );
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Optimasi Performa React
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Di React, jika komponen induk (<em>Parent</em>) mengalami pembaruan *state*, maka <strong>seluruh komponen anak (<em>Child</em>) di dalamnya akan otomatis dirender ulang</strong> secara <em>default</em>. Di aplikasi kecil, ini tidak terasa. Namun di aplikasi raksasa, merender ulang tabel berisi 10.000 baris hanya karena Anda mengetik satu huruf di kolom <em>Search</em> akan membuat halaman membeku (<em>lag</em>).
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: Memoization
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Kita menggunakan teknik <em>Memoization</em> (Mengingat). React menyediakan alat seperti <code>React.memo</code> untuk komponen, dan <code>useMemo</code> / <code>useCallback</code> untuk data dan fungsi.
        </p>
        <CodeBlock code={memoCode} language="jsx" />
      </section>

      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Jebakan Optimasi Prematur
        </h2>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Jangan gunakan memo untuk semuanya!</strong><br />
            Menyimpan data di dalam memori (memoization) juga memakan RAM browser. Jika Anda membungkus tombol sederhana dengan <code>React.memo</code>, biaya pengecekan memorinya justru lebih mahal daripada biaya merender ulang tombol itu sendiri. Gunakan hanya pada komponen yang memiliki grafik berat, tabel panjang, atau animasi kompleks.
          </li>
        </ul>
      </section>
    </div>
  );
}