import CodeBlock from '../../components/content/CodeBlock';

export default function FormHandling() {
  const formCode = `
import { useState } from 'react';

const RegistrationForm = () => {
  // 1. Siapkan state untuk menampung data form
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  // 2. Fungsi dinamis untuk menangani perubahan pada semua input
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Menggunakan spread operator untuk mempertahankan data yang tidak berubah
    setFormData(prev => ({
      ...prev,
      [name]: value 
    }));
  };

  // 3. Fungsi untuk menangani saat tombol submit ditekan
  const handleSubmit = (e) => {
    e.preventDefault(); // MENCEGAH browser melakukan reload halaman
    
    // Di sini biasanya kita mengirim formData ke backend/API
    console.log('Data yang dikirim:', formData);
    alert(\`Selamat datang, \${formData.username}!\`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="username">Username:</label>
        {/* Input ini dikontrol sepenuhnya oleh React (Controlled Component) */}
        <input 
          type="text" 
          id="username"
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit">Daftar Sekarang</button>
    </form>
  );
};
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Controlled Components
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Dalam HTML tradisional, elemen form seperti <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, dan <code>&lt;select&gt;</code> menyimpan "ingatan" (state) mereka sendiri di dalam browser. Jika Anda mengetik sesuatu, elemen tersebut langsung memperbarui nilainya sendiri.
        </p>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Cara React: Mengambil Alih Kendali</h3>
          <p style={{ opacity: 0.9 }}>
            React tidak menyukai hal itu. Di React, <em>State</em> harus selalu menjadi <em>Single Source of Truth</em> (Satu-satunya sumber kebenaran). Oleh karena itu, kita membuat <strong>Controlled Components</strong>. Kita memaksa nilai <code>value</code> pada input untuk selalu mengambil data dari <code>useState</code>, dan setiap kali pengguna mengetik, kita mencegatnya dengan <code>onChange</code> untuk memperbarui <em>state</em> tersebut.
          </p>
        </div>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi (Example)
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Perhatikan bagaimana kita menggunakan satu objek <em>state</em> untuk mengelola banyak input sekaligus. Ini jauh lebih efisien daripada membuat <code>useState</code> terpisah untuk setiap input.
        </p>
        
        <CodeBlock code={formCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: UX & Perilaku Browser
        </h2>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Wajib <code>e.preventDefault()</code>:</strong><br />
            Secara *default*, saat tombol <code>type="submit"</code> ditekan, browser akan me-<em>reload</em> seluruh halaman dan mencoba mengirim data ke URL tertentu. Di aplikasi React (SPA), *reload* halaman adalah pantangan besar karena akan me-reset semua memori aplikasi. Kita harus menghentikan perilaku bawaan ini dengan <code>e.preventDefault()</code>.
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Keuntungan Validasi Instan:</strong><br />
            Mengapa harus serepot ini? Karena nilai input selalu tersinkronisasi dengan <em>state</em> di setiap ketikan jari pengguna, kita bisa melakukan validasi secara <em>real-time</em>. Misalnya, langsung memunculkan pesan error merah jika password yang diketik kurang dari 8 karakter, memberikan <em>feedback</em> UI/UX yang sangat responsif layaknya aplikasi <em>mobile</em>.
          </li>
        </ul>
      </section>

    </div>
  );
}