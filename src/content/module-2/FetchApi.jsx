import CodeBlock from '../../components/content/CodeBlock';

export default function FetchApi() {
  const fetchCode = `
import { useState, useEffect } from 'react';

const PostList = () => {
  // 1. Siapkan 3 state krusial untuk request jaringan
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. Lakukan Fetch API di dalam useEffect dengan array dependensi kosong
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((response) => {
        if (!response.ok) throw new Error('Gagal mengambil data dari server');
        return response.json();
      })
      .then((data) => {
        setPosts(data);      // Simpan data
        setIsLoading(false); // Matikan loading
      })
      .catch((err) => {
        setError(err.message); // Tangkap error
        setIsLoading(false);
      });
  }, []);

  // 3. Render kondisional (Conditional Rendering)
  if (isLoading) return <p>Memuat data post...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
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
          1. Teori Dasar: Fetching Data di React
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          React pada dasarnya tidak memiliki opini tentang bagaimana cara Anda mengambil data. Berbeda dengan framework seperti Angular yang punya modul HTTP bawaan, di React kita murni menggunakan fitur bawaan JavaScript yaitu <code>fetch()</code> atau menggunakan <em>library</em> pihak ketiga seperti Axios.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Kombinasi Emas: useEffect + useState</h3>
            <p style={{ opacity: 0.9 }}>
              Untuk mengambil data, kita tidak boleh menaruh fungsi <code>fetch</code> langsung di akar komponen karena akan memicu pemanggilan tiada henti (<em>infinite loop</em>). Kita harus membungkus proses pengambilan data di dalam <code>useEffect</code> (sebagai efek samping), lalu menyimpan hasilnya ke dalam <code>useState</code> agar layar bisa di-render ulang dengan data baru.
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
          Berikut adalah pola standar industri untuk mengambil data dari REST API. Kita menggunakan <strong>JSONPlaceholder</strong>, sebuah API gratis untuk menguji coba pengambilan data (berisi data tiruan/<em>mock data</em>).
        </p>
        
        <CodeBlock code={fetchCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: 3 Serangkai State Jaringan
        </h2>
        
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Mengapa kita butuh 3 state (<code>posts</code>, <code>isLoading</code>, dan <code>error</code>)? Karena pengambilan data lewat internet itu tidak bisa diprediksi. Server bisa <em>down</em>, atau koneksi pengguna bisa lambat.
        </p>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>Loading State (UX yang baik):</strong><br />
            Tanpa <code>isLoading</code>, pengguna akan melihat layar kosong selama 1-2 detik saat data sedang diambil. Ini memberikan kesan aplikasi Anda rusak. Selalu berikan <em>feedback</em> visual bahwa sistem sedang bekerja.
          </li>
          <li>
            <strong style={{ color: 'var(--color-danger)' }}>Error Handling:</strong><br />
            Blok <code>.catch()</code> sangat vital. Jika permintaan gagal dan Anda tidak menangkap <em>error</em>-nya, komponen Anda akan <em>crash</em> atau menampilkan <em>undefined</em> ke layar pengguna.
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Kenapa di dalam <code>useEffect([], )</code>?</strong><br />
            Array dependensi kosong memastikan <code>fetch</code> hanya terjadi <strong>satu kali</strong> tepat setelah komponen ditambahkan ke layar (<em>mount</em>).
          </li>
        </ul>
      </section>

    </div>
  );
}