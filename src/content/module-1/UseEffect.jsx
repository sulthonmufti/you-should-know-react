import CodeBlock from '../../components/content/CodeBlock';

export default function UseEffect() {
  const useEffectCode = `
import { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  // useEffect menerima 2 parameter: Fungsi Utama dan Array Dependensi
  useEffect(() => {
    // 1. KODE EFEK (Berjalan saat komponen pertama kali muncul)
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 2. KODE CLEANUP (Berjalan saat komponen dihancurkan/hilang dari layar)
    return () => {
      clearInterval(interval);
      console.log('Timer dibersihkan!');
    };
  }, []); // <-- Array Dependensi Kosong: Hanya jalan 1x saat pertama kali render

  return <div>Waktu berlalu: {seconds} detik</div>;
};
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Apa itu Side Effect?
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Komponen React dirancang idealnya sebagai <strong>Fungsi Murni (Pure Function)</strong>: Menerima data (Props/State) dan mengembalikan tampilan (JSX). Namun di dunia nyata, aplikasi kita perlu "keluar" dari siklus murni tersebut untuk melakukan tugas-tugas eksternal. Inilah yang disebut <strong>Side Effect</strong>.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Kapan kita menggunakan useEffect?</h3>
            <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
              <li>Mengambil data dari server (Fetch API / Database).</li>
              <li>Berinteraksi langsung dengan DOM di luar React (mengubah judul tab browser).</li>
              <li>Mengatur <em>Timer</em> (setTimeout / setInterval).</li>
              <li>Berlangganan (<em>subscribe</em>) ke layanan eksternal (seperti WebSockets atau Firebase).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi (Example)
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Pembuatan *Timer* adalah contoh klasik untuk memahami siklus hidup `useEffect`, termasuk bagaimana cara membersihkannya agar tidak membuat memori bocor (<em>memory leak</em>).
        </p>
        
        <CodeBlock code={useEffectCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Array Dependensi (Dependency Array)
        </h2>
        
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Rahasia terbesar menguasai <code>useEffect</code> ada pada argumen keduanya: <strong>Array Dependensi (<code>[]</code>)</strong>. Array ini mengatur <em>kapan</em> efek Anda harus dijalankan ulang oleh React.
        </p>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Tanpa Array <code>useEffect(() =&gt; &#123;...&#125;)</code>:</strong><br />
            SANGAT BERBAHAYA. Efek akan dijalankan <strong>setiap kali</strong> komponen dirender ulang. Jika di dalamnya ada fungsi <em>fetch data</em> yang mengubah <em>state</em>, ini akan memicu render ulang terus-menerus (<em>infinite loop</em>) yang bisa membuat browser <em>crash</em>.
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Array Kosong <code>useEffect(() =&gt; &#123;...&#125;, [])</code>:</strong><br />
            Efek HANYA akan dijalankan SATU KALI, yaitu saat komponen pertama kali muncul di layar (<em>mount</em>). Sangat cocok untuk memanggil data API awal.
          </li>
          <li>
            <strong style={{ color: 'var(--color-accent)' }}>Array Berisi State <code>useEffect(() =&gt; &#123;...&#125;, [userId])</code>:</strong><br />
            Efek akan dijalankan saat pertama kali muncul, DAN kapanpun nilai <code>userId</code> berubah. Jika <code>userId</code> berubah dari 1 ke 2, React akan menjalankan fungsi <em>cleanup</em> untuk ID 1, lalu menjalankan efek baru untuk ID 2.
          </li>
        </ul>
      </section>

    </div>
  );
}