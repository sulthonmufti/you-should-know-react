import CodeBlock from '../../components/content/CodeBlock';

export default function Deploy() {
  const deployCode = `
// PROSES DEPLOYMENT (CI/CD) DENGAN VERCEL

// 1. Push kode ke GitHub
git add .
git commit -m "feat: aplikasi siap rilis"
git push origin main

// 2. Hubungkan repositori GitHub ke akun Vercel Anda.
// Vercel akan otomatis mendeteksi bahwa ini adalah project Vite + React.

// 3. Vercel akan menjalankan perintah "build" di server mereka
npm run build 

// 4. Vite akan memampatkan (minify) ribuan file JSX Anda menjadi:
// 📂 dist/
//  ├── index.html
//  ├── assets/
//  │   ├── index-d8e4f1a2.js (JS murni yang sudah tidak berbentuk JSX)
//  │   └── index-2b4a1.css

// 5. Website Anda live di seluruh dunia dengan URL HTTPS!
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Dari Development ke Production
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Browser Chrome atau Safari <strong>TIDAK BISA</strong> membaca file <code>.jsx</code>. Selama masa pengembangan, alat seperti Vite menerjemahkan kode Anda secara langsung secara diam-diam. Namun untuk rilis ke publik (Production), kita harus melakukan proses yang disebut <strong>Build</strong>. Proses ini mengubah seluruh JSX menjadi JavaScript murni, mengecilkan ukuran file, dan membuang komentar agar website memuat sangat cepat.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: Ekosistem Modern
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Platform <em>cloud</em> modern seperti <strong>Vercel</strong> atau <strong>Netlify</strong> membuat proses ini terasa seperti sihir melalui konsep CI/CD (<em>Continuous Integration / Continuous Deployment</em>).
        </p>
        <CodeBlock code={deployCode} language="bash" />
      </section>

      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Self-Referential (Bukti Nyata)
        </h2>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-accent)' }}>Project Ini Sendiri!</strong><br />
            Apakah Anda sadar? Website "You Should Know React" yang sedang Anda baca ini menggunakan tumpukan teknologi (<em>stack</em>) persis yang dijelaskan di atas. Setiap kali kode baru ditambahkan ke repositori, sistem otomatis melakukan <em>build</em> dan mendistribusikannya ke CDN global. Inilah bentuk implementasi React di dunia nyata tingkat tertinggi.
          </li>
        </ul>
      </section>
    </div>
  );
}