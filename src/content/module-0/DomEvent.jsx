import CodeBlock from '../../components/content/CodeBlock';

export default function DomEvent() {
  const domEventCode = `
// ❌ CARA VANILLA JS (DOM Manipulation & Event Listener)
// 1. Tangkap elemen dari DOM
const button = document.getElementById('myButton');

// 2. Definisikan fungsi (Event Handler)
function handleClick(event) {
  event.preventDefault();
  console.log('Tombol diklik!');
}

// 3. Pasang pendengar kejadian (Event Listener)
button.addEventListener('click', handleClick);

// (Jangan lupa: di aplikasi besar, Anda harus menghapus listener ini secara 
// manual dengan removeEventListener agar tidak terjadi memory leak)


// ✅ CARA REACT (Synthetic Events)
// Lebih deklaratif, event dipasang langsung di elemen JSX
const MyComponent = () => {
  
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Tombol diklik!');
  };

  return (
    <button onClick={handleClick}>
      Klik Saya
    </button>
  );
};
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: DOM & Event Handling
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Sebelum React bisa membuat antarmuka yang interaktif, kita harus memahami bagaimana browser berinteraksi dengan pengguna. Ada dua konsep utama di sini: <strong>DOM</strong> dan <strong>Events</strong>.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Apa itu DOM?</h3>
            <p style={{ opacity: 0.9 }}>
              DOM (<em>Document Object Model</em>) adalah representasi struktural dari dokumen HTML Anda. Browser mengubah tag HTML menjadi objek-objek JavaScript yang membentuk struktur pohon (<em>tree</em>). Dengan DOM, JavaScript bisa mengubah struktur, gaya, dan isi halaman web.
            </p>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-accent)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Apa itu Event Handling?</h3>
            <p style={{ opacity: 0.9 }}>
              <em>Event</em> adalah kejadian atau aksi yang terjadi di sistem, seperti klik mouse, ketikan keyboard, atau halaman selesai dimuat. <em>Event Handling</em> adalah cara kita memerintahkan JavaScript untuk "mendengarkan" kejadian tersebut dan menjalankan fungsi tertentu sebagai responnya.
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
          Perhatikan perbedaan cara kita merespon klik tombol menggunakan Vanilla JS konvensional dibandingkan dengan cara React:
        </p>
        
        <CodeBlock code={domEventCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Synthetic Events di React
        </h2>
        
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Sekilas, cara React menuliskan <code>onClick</code> terlihat seperti memutar waktu mundur ke era HTML jadul (<em>inline onclick attributes</em>). Namun di balik layar, React melakukan optimasi yang luar biasa:
        </p>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>Konsistensi Antar-Browser (SyntheticEvent):</strong><br />
            Browser seperti Chrome, Safari, dan Firefox terkadang menangani <em>event</em> dengan cara yang sedikit berbeda. React membungkus semua <em>event</em> asli dari browser ke dalam sebuah objek yang disebut <strong>SyntheticEvent</strong>. Ini menjamin kode Anda akan berjalan identik di semua browser tanpa perlu repot menulis kode pengecekan kompatibilitas.
          </li>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>Event Delegation (Delegasi Event):</strong><br />
            Di Vanilla JS, jika Anda memiliki 1000 baris tabel dan menambahkan <code>addEventListener</code> ke setiap tombol hapus, browser akan sangat terbebani. React sangat cerdas; ia tidak memasang 1000 <em>event listener</em>. React hanya memasang <strong>satu</strong> <em>event listener</em> utama di elemen paling akar (root), lalu mendelegasikan <em>event</em> tersebut ke komponen yang tepat. Ini membuat aplikasi React sangat hemat memori.
          </li>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>Penamaan camelCase:</strong><br />
            Ingat aturan JSX? Di React, nama <em>event</em> selalu menggunakan format camelCase (misal: <code>onClick</code>, bukan <code>onclick</code>; <code>onChange</code>, bukan <code>onchange</code>).
          </li>
        </ul>
      </section>

    </div>
  );
}