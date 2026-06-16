import CodeBlock from '../../components/content/CodeBlock';

export default function AdvancedHooks() {
  const useRefCode = `
import { useRef, useState } from 'react';

const AutoFocusInput = () => {
  // 1. Membuat referensi kosong
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleFocusClick = () => {
    // 3. Mengakses DOM asli secara langsung untuk memicu fungsi fokus browser
    inputRef.current.focus();
  };

  return (
    <div className="card">
      {/* 2. Menautkan referensi ke elemen JSX */}
      <input 
        ref={inputRef} 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ketik sesuatu..." 
      />
      
      <button onClick={handleFocusClick}>
        Fokuskan Kursor ke Input
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
          1. Teori Dasar: Mengapa butuh useRef?
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Di materi sebelumnya, kita diajarkan untuk selalu menggunakan <code>useState</code> untuk menyimpan data dan mengendalikan UI secara deklaratif. Namun, ada kalanya kita perlu "melanggar" aturan tersebut dan menyentuh elemen HTML asli (DOM) secara langsung, misalnya untuk memutar video, mengatur fokus input, atau membaca ukuran elemen.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-warning)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Apa itu useRef?</h3>
            <p style={{ opacity: 0.9 }}>
              <code>useRef</code> (Reference) adalah sebuah <em>hook</em> yang bertindak seperti "kotak penyimpanan rahasia". Anda bisa menyimpan data apa pun di dalamnya (seperti DOM node atau angka). Keistimewaan kotak ini adalah: <strong>ketika isinya diubah, React tidak akan melakukan render ulang (re-render) pada komponen.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi (Example)
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Salah satu kasus penggunaan paling umum dari <code>useRef</code> adalah mengambil alih elemen input untuk memberikan fokus otomatis tanpa menggunakan <code>document.getElementById</code>.
        </p>
        
        <CodeBlock code={useRefCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: useState vs useRef
        </h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', textAlign: 'left', opacity: 0.9 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <th style={{ padding: '1rem', color: 'var(--color-primary)' }}>Fitur</th>
              <th style={{ padding: '1rem', color: 'var(--color-success)' }}>useState</th>
              <th style={{ padding: '1rem', color: 'var(--color-warning)' }}>useRef</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem' }}>Memicu Render Ulang?</td>
              <td style={{ padding: '1rem' }}>Ya</td>
              <td style={{ padding: '1rem' }}>Tidak</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem' }}>Sifat Perubahan</td>
              <td style={{ padding: '1rem' }}>Asinkron (Diantrekan)</td>
              <td style={{ padding: '1rem' }}>Sinkron (Berubah saat itu juga)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Kapan Digunakan?</td>
              <td style={{ padding: '1rem' }}>Data yang harus terlihat di layar</td>
              <td style={{ padding: '1rem' }}>Manipulasi DOM / Data di balik layar</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}