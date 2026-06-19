import CodeBlock from '../../components/content/CodeBlock';

export default function FirebaseAuth() {
  const authCode = `
import { useState, useEffect } from 'react';
// Import library Firebase (pastikan sudah di-install via npm)
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebaseConfig'; // File konfigurasi inisialisasi Firebase Anda

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function AuthDemo() {
  const [user, setUser] = useState(null);

  // Listener untuk memantau status login (tetap login meski halaman di-refresh)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Gagal login:", error.message);
    }
  };

  const handleLogout = () => signOut(auth);

  return (
    <div className="card">
      {user ? (
        <div>
          <img src={user.photoURL} alt="Profil" style={{ borderRadius: '50%' }} />
          <h3>Halo, {user.displayName}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login dengan Google</button>
      )}
    </div>
  );
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Backend-as-a-Service (BaaS)
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Dulu, untuk membuat fitur Login, Anda harus membangun server dari nol, mengamankan <em>password</em> dengan *hashing* (enkripsi), mengatur *cookies*, dan mencegah serangan peretas. Ini membutuhkan waktu berbulan-bulan.
        </p>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid #FFCA28' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Revolusi Firebase</h3>
          <p style={{ opacity: 0.9 }}>
            Google merilis <strong>Firebase</strong>, sebuah BaaS yang menangani semua kerumitan server di belakang layar. Anda cukup memanggil satu atau dua baris kode di React, dan Firebase akan mengurus keamanan <em>database</em>, pengiriman email verifikasi, hingga integrasi login via Google, GitHub, atau Apple.
          </p>
        </div>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: Login via Google
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Perhatikan betapa ringkasnya kita membuat sistem login tingkat produksi (<em>production-grade</em>) yang dilengkapi dengan pendeteksi sesi otomatis.
        </p>
        
        <CodeBlock code={authCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Mengapa butuh <code>onAuthStateChanged</code>?
        </h2>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Masalah SPA (Single Page Application):</strong><br />
            Di React, semua data di dalam <code>useState</code> akan hancur dan kembali ke nilai awal (kosong) jika pengguna menekan tombol *Refresh* (F5) di browser. Jika kita hanya mengandalkan tombol login, pengguna harus login ulang setiap kali mereka me-<em>refresh</em> halaman.
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Solusi Firebase Observer:</strong><br />
            Fungsi <code>onAuthStateChanged</code> adalah sebuah "Pengamat" (*Observer*). Ia ditempatkan di dalam <code>useEffect</code> agar selalu menyala di latar belakang. Saat halaman di-<em>refresh</em>, fungsi ini akan bertanya ke *server* Firebase: <em>"Apakah browser ini memiliki token login yang masih aktif?"</em> Jika ya, ia akan otomatis mengisi ulang <em>state</em> pengguna, memberikan ilusi bahwa pengguna tidak pernah *logout*.
          </li>
        </ul>
      </section>

    </div>
  );
}