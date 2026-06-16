import CodeBlock from '../../components/content/CodeBlock';

export default function UseState() {
  const useStateCode = `
import { useState } from 'react';

const InteractiveCounter = () => {
  // ❌ JANGAN gunakan variabel biasa untuk data yang tampil di UI:
  // let count = 0; 
  // count++; (Nilai berubah di latar belakang, tapi layar TIDAK AKAN update!)

  // ✅ LAKUKAN INI:
  // Destructuring array: [nilaiSaatIni, fungsiUntukMengubahNilai]
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Memanggil fungsi 'setCount' akan mengubah data sekaligus
    // memerintahkan React untuk menggambar ulang (re-render) komponen ini.
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Anda telah menekan tombol {count} kali</h3>
      <button onClick={handleIncrement} style={{ background: 'blue', color: 'white' }}>
        Tambah +1
      </button>
    </div>
  );
};
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Apa itu State?
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          <strong>State</strong> adalah "ingatan" dari sebuah komponen. Di antarmuka yang interaktif, layar perlu diperbarui saat pengguna melakukan sesuatu—misalnya mengklik tombol, mengetik di form, atau membuka menu dropdown.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hooks: <code>useState</code></h3>
            <p style={{ opacity: 0.9 }}>
              Untuk memberikan "ingatan" pada komponen, React menyediakan sebuah fungsi bawaan yang disebut <strong>Hook</strong>, dan yang paling sering digunakan adalah <code>useState</code>. Fungsi ini memungkinkan komponen untuk melacak nilai yang bisa berubah-ubah dari waktu ke waktu.
            </p>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-danger)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Perbedaan Fatal: Props vs State</h3>
            <ul style={{ paddingLeft: '1.5rem', opacity: 0.9, marginTop: '0.5rem' }}>
              <li><strong>Props:</strong> Data dari luar. Dilempar dari komponen induk. Sifatnya <em>Read-Only</em> (tidak boleh diubah oleh komponen itu sendiri).</li>
              <li><strong>State:</strong> Data dari dalam. Dimiliki dan dikendalikan sepenuhnya oleh komponen itu sendiri. Sifatnya <em>Mutable</em> (bisa dan dirancang untuk diubah).</li>
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
          Perhatikan sintaks pembongkaran array (<em>Array Destructuring</em>) yang kita gunakan di bawah ini. Ini adalah pemanfaatan langsung dari materi <strong>Modern JavaScript ES6+</strong> yang sudah Anda pelajari sebelumnya:
        </p>
        
        <CodeBlock code={useStateCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis & Mekanika Re-Render
        </h2>
        
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Banyak pemula bertanya: <em>"Kenapa repot-repot menggunakan <code>useState</code> dan fungsi <code>setCount</code>? Kenapa tidak memakai variabel <code>let count = 0</code> dan <code>count++</code> saja?"</em>
        </p>
        
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Triger Perekaman Ulang (Re-rendering)</h3>
          <p style={{ opacity: 0.9, marginBottom: '1rem' }}>
            JavaScript memang akan berhasil menambahkan angka pada variabel biasa di latar belakang memori. <strong>NAMUN</strong>, React tidak akan tahu bahwa variabel itu berubah, sehingga React tidak akan memperbarui teks di layar (DOM).
          </p>
          <p style={{ opacity: 0.9 }}>
            Fungsi <code>setCount</code> (atau fungsi <em>setter</em> lainnya) bertindak sebagai pelatuk alarm. Saat fungsi ini dipanggil, ia melakukan dua hal sekaligus:
          </p>
          <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.9 }}>
            <li>Memperbarui nilai variabel <code>count</code> dengan nilai yang baru.</li>
            <li><strong>Memberi tahu React:</strong> <em>"Hei, ada dataku yang berubah! Tolong jalankan ulang fungsi komponen ini dan perbarui layar agar sesuai dengan data baruku!"</em></li>
          </ol>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)', marginTop: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-warning)' }}>Aturan Emas Hooks</h3>
          <p style={{ opacity: 0.9 }}>
            Hooks (semua fungsi yang diawali dengan kata <code>use</code>, seperti <code>useState</code>, <code>useContext</code>) memiliki aturan ketat: <strong>Hanya boleh dipanggil di level paling atas (top-level) dari komponen React Anda.</strong> Anda dilarang memanggil hooks di dalam <em>loops</em> (perulangan), <em>conditions</em> (if/else), atau fungsi JavaScript biasa.
          </p>
        </div>
      </section>

    </div>
  );
}