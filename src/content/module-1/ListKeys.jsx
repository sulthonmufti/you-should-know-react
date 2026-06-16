import CodeBlock from '../../components/content/CodeBlock';

export default function ListKeys() {
  const mapCode = `
const users = [
  { id: 'u1', name: 'Andi', role: 'Admin' },
  { id: 'u2', name: 'Budi', role: 'User' },
  { id: 'u3', name: 'Citra', role: 'Editor' }
];

const UserList = () => {
  return (
    <ul>
      {/* Menggunakan .map() untuk merender array menjadi elemen JSX */}
      {users.map((user) => (
        // ATURAN EMAS: Elemen terluar di dalam .map() WAJIB memiliki prop 'key' yang unik!
        <li key={user.id} className="user-card">
          <h4>{user.name}</h4>
          <span>Role: {user.role}</span>
        </li>
      ))}
    </ul>
  );
};
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Render Daftar dengan Map
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Dalam pengembangan web, kita hampir selalu berurusan dengan data berbentuk daftar (<em>list</em>/<em>array</em>), seperti daftar produk, komentar, atau daftar materi di <em>sidebar</em> web ini. Di Vanilla JS, kita biasa menggunakan perulangan <code>for</code> atau <code>forEach</code> untuk merender elemen satu per satu.
        </p>

        <p style={{ fontSize: '1.1rem' }}>
          Di React, cara paling elegan dan standar industri untuk merender daftar adalah menggunakan metode bawaan JavaScript yaitu <strong><code>Array.prototype.map()</code></strong> langsung di dalam sintaks JSX kita.
        </p>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi (Example)
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Di bawah ini adalah contoh bagaimana kita memetakan <em>array of objects</em> menjadi daftar kartu pengguna (<em>User Card</em>).
        </p>
        
        <CodeBlock code={mapCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Mengapa "Key" Sangat Krusial?
        </h2>
        
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Jika Anda lupa menambahkan properti <code>key</code> saat melakukan <code>.map()</code>, aplikasi Anda mungkin tetap jalan, namun React akan marah besar di <em>console browser</em>. Mengapa React sangat cerewet soal ini?
        </p>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>Identitas Virtual DOM:</strong><br />
            <code>Key</code> membantu React mengidentifikasi item mana yang berubah, ditambahkan, atau dihapus. Tanpa <em>key</em>, jika satu item disisipkan di tengah daftar, React akan kebingungan dan memilih untuk menghancurkan lalu menggambar ulang <strong>seluruh isi daftar</strong> dari awal. Ini sangat mematikan performa.
          </li>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Dosa Besar: Menggunakan Index sebagai Key:</strong><br />
            Seringkali pemula menulis <code>key=&#123;index&#125;</code>. Ini sangat berbahaya jika urutan daftar Anda bisa berubah (misal: disortir atau item dihapus). Karena <em>index</em> selalu urut (0, 1, 2...), React bisa salah mengira bahwa item yang tersisa adalah item lama, sehingga data di dalam komponen (seperti nilai input di dalam <em>list</em>) bisa tertukar letaknya!
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Solusi Terbaik:</strong><br />
            Gunakan ID unik dari <em>database</em> Anda (seperti UUID, ID dokumen Firebase, atau Primary Key SQL) sebagai nilai dari properti <code>key</code>.
          </li>
        </ul>
      </section>

    </div>
  );
}