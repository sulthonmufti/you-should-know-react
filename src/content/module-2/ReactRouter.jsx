import CodeBlock from '../../components/content/CodeBlock';

export default function ReactRouter() {
  const routerCode = `
// 1. MEMBUNGKUS APLIKASI (Biasanya di main.jsx)
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// ----------------------------------------------------

// 2. MENDEFINISIKAN RUTE (Biasanya di App.jsx)
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topic from './pages/Topic';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>Halaman Tentang</div>} />
      
      {/* Rute Dinamis: Menangkap variabel dari URL */}
      <Route path="/learn/:moduleId/:topicId" element={<Topic />} />
    </Routes>
  );
}

// ----------------------------------------------------

// 3. BERPINDAH HALAMAN (Biasanya di Navbar atau Sidebar)
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* ❌ JANGAN GUNAKAN TAG <a> KARENA AKAN ME-RELOAD HALAMAN */}
      {/* <a href="/about">Tentang</a> */}

      {/* ✅ GUNAKAN <Link> UNTUK NAVIGASI INSTAN */}
      <Link to="/about">Tentang</Link>

      {/* ✅ GUNAKAN <NavLink> JIKA BUTUH STYLING SAAT AKTIF */}
      <NavLink 
        to="/learn" 
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
      >
        Belajar
      </NavLink>
    </nav>
  );
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: SPA & Client-Side Routing
        </h2>
        
        
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', marginTop: '1rem' }}>
          Website tradisional bekerja dengan konsep <strong>Multi-Page Application (MPA)</strong>. Setiap kali Anda mengeklik sebuah link, browser akan membuang halaman saat ini, meminta dokumen HTML baru ke server, dan menggambar ulang semuanya dari nol. Ini menyebabkan jeda atau "kedipan" putih.
        </p>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Keajaiban Single Page Application (SPA)</h3>
          <p style={{ opacity: 0.9 }}>
            React menggunakan pendekatan SPA. Secara harfiah, website React hanya memiliki <strong>satu</strong> file <code>index.html</code>. Lalu bagaimana kita bisa berpindah halaman? Di sinilah <em>library</em> pihak ketiga bernama <strong>React Router</strong> (<code>react-router-dom</code>) bekerja. Ia "membajak" URL browser Anda, dan secara cerdas hanya mengganti komponen React di tengah layar tanpa pernah meminta dokumen HTML baru ke server. Hasilnya? Navigasi terasa instan secepat kilat.
          </p>
        </div>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: Self-Referential
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Buktikan sendiri! Coba klik menu di Sidebar kiri Anda. Layar berganti seketika tanpa ada proses <em>loading</em> (logo *refresh* di browser tidak berputar). Potongan kode di bawah ini adalah struktur persis yang digunakan untuk membangun website "You Should Know React" ini:
        </p>
        
        <CodeBlock code={routerCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Fitur Krusial Router
        </h2>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Dosa Besar: Menggunakan <code>&lt;a href="..."&gt;</code></strong><br />
            Jika Anda menggunakan tag <code>&lt;a&gt;</code> HTML standar di dalam aplikasi React, Anda akan merusak sistem SPA. Browser akan dipaksa me-<em>reload</em> halaman, dan semua data state (seperti <em>progress belajar</em> Anda yang belum tersimpan di server atau input form yang sedang diketik) akan terhapus. Selalu gunakan <code>&lt;Link to="..."&gt;</code>.
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Dynamic Routing (Rute Dinamis):</strong><br />
            Perhatikan URL di atas browser Anda saat ini. Kemungkinan tertulis <code>/learn/module-2/react-router</code>. Anda tidak perlu membuat ratusan file rute untuk ratusan materi. Dengan pola <code>:moduleId/:topicId</code>, React Router menangkap teks tersebut sebagai variabel, dan kita mengekstraknya menggunakan Hook <code>useParams()</code> untuk mencari data di file <em>curriculum</em>.
          </li>
          <li>
            <strong style={{ color: 'var(--color-accent)' }}>Active Link Styling (<code>&lt;NavLink&gt;</code>):</strong><br />
            Pernahkah Anda bertanya mengapa menu "2.5 React Router" di Sidebar sebelah kiri Anda saat ini warnanya berubah menjadi biru terang? Itu karena kita menggunakan <code>&lt;NavLink&gt;</code>, yang memiliki fitur ajaib untuk mendeteksi apakah URL saat ini sama persis dengan rute yang ditujunya.
          </li>
        </ul>
      </section>

    </div>
  );
}