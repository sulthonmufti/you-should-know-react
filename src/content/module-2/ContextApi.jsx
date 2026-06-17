import CodeBlock from '../../components/content/CodeBlock';

export default function ContextApi() {
  const contextCode = `
// FILE: ThemeContext.jsx (Di dalam project ini!)
import { createContext, useState, useEffect } from 'react';

// 1. MEMBUAT CONTEXT (Membuat saluran pemancar radio)
export const ThemeContext = createContext();

// 2. MEMBUAT PROVIDER (Stasiun radionya yang menyimpan data)
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 3. Memancarkan value (theme dan toggleTheme) ke bawah
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ----------------------------------------------------

// FILE: Navbar.jsx
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Navbar() {
  // 4. MENGGUNAKAN CONTEXT (Menangkap sinyal radio)
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Tema saat ini: {theme}
    </button>
  );
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Masalah "Prop Drilling"
        </h2>
        
        
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Kita sudah belajar bahwa data di React mengalir dari atas ke bawah melalui <em>Props</em>. Namun bayangkan skenario ini: Anda punya komponen tingkat teratas <code>App</code>, yang memiliki anak <code>Layout</code>, yang memiliki anak <code>Header</code>, yang memiliki anak <code>Navbar</code>, yang memiliki anak <code>Button</code>.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Jika <code>Button</code> membutuhkan data dari <code>App</code>, Anda harus melempar props tersebut melewati 3 lapisan komponen di tengahnya yang sebenarnya sama sekali tidak membutuhkan data itu. Fenomena melelahkan ini disebut <strong>Prop Drilling</strong>. Di sinilah <strong>Context API</strong> datang sebagai pahlawan. Context bertindak seperti lubang cacing (<em>teleportasi</em>) yang memungkinkan Anda melempar data langsung ke komponen manapun di bawahnya tanpa harus melewati perantara.
        </p>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: Self-Referential
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Karena project ini berprinsip <em>Self-Referential</em> (Membuktikan apa yang diajarkan), kita tidak perlu mencari contoh jauh-jauh. Perhatikan potongan kode di bawah ini, ini adalah cara kerja nyata dari fitur <strong>Dark Mode</strong> yang sedang Anda gunakan di website ini!
        </p>
        
        <CodeBlock code={contextCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Kapan TIDAK Menggunakan Context?
        </h2>
        
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Melihat betapa mudahnya Context API, banyak developer tergoda untuk menaruh <strong>semua</strong> data (state) ke dalam Context. Itu adalah jebakan Batman.
        </p>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Masalah Performa (Re-render):</strong><br />
            Setiap kali data di dalam sebuah Context berubah, <strong>semua</strong> komponen yang berlangganan (mendengarkan) Context tersebut akan dirender ulang, terlepas dari apakah mereka benar-benar membutuhkan data yang spesifik itu atau tidak. 
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Gunakan Hanya Untuk Data Global:</strong><br />
            Gunakan Context hanya untuk data yang benar-benar bersifat global dan tidak terlalu sering berubah secara drastis dalam satu detik. Contoh ideal: Tema (Dark/Light), Data Autentikasi User (Login/Logout), Pengaturan Bahasa (i18n), atau status Progres Belajar.
          </li>
        </ul>
      </section>

    </div>
  );
}