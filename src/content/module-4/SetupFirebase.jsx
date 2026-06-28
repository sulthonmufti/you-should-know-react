import CodeBlock from '../../components/content/CodeBlock';

export default function SetupFirebase() {
  const envCode = `
# FILE: .env di root folder (JANGAN DI-COMMIT KE GITHUB)
VITE_FIREBASE_API_KEY="AIzaSyB-xxxxxxxxxxxxxxx"
VITE_FIREBASE_AUTH_DOMAIN="you-should-know-react.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="you-should-know-react"

# FILE: src/config/firebase.js
import { initializeApp } from "firebase/app";

// Memanggil variabel environment dengan sintaks khusus Vite (import.meta.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

export const app = initializeApp(firebaseConfig);
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Environment Variables (.env)
        </h2>
        
                
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Saat mendaftarkan project di Firebase Console, Anda akan mendapatkan kunci rahasia (API Key). Anda <strong>TIDAK BOLEH</strong> menaruh kunci ini langsung di file JavaScript (<em>hardcode</em>). Jika Anda mengunggahnya ke GitHub, <em>bot hacker</em> akan mencuri kunci tersebut dan menggunakannya untuk menambang kripto atau merusak database Anda. Solusinya adalah file <code>.env</code> (Environment).
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          2. Contoh Implementasi di Project Ini
        </h2>
        <CodeBlock code={envCode} language="javascript" />
      </section>

      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Vite vs Create React App (CRA)
        </h2>
        <p style={{ opacity: 0.9 }}>
          Jika Anda menggunakan CRA, variabel .env harus diawali dengan <code>REACT_APP_</code>. Namun, karena project canggih ini dibangun menggunakan Vite, kita wajib mengawali nama variabel dengan <code>VITE_</code>. Vite tidak akan membaca variabel yang tidak memiliki awalan tersebut sebagai fitur keamanan bawaan.
        </p>
      </section>
    </div>
  );
}