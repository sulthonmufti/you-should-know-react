import CodeBlock from '../../components/content/CodeBlock';

export default function IntroReact() {
  const imperativeVsDeclarative = `
// ❌ CARA IMPERATIF (Vanilla JS)
// Kita harus memberi tahu browser "BAGAIMANA" cara mengubah UI langkah demi langkah
const btn = document.createElement('button');
btn.className = 'btn-primary';
btn.innerText = 'Klik Saya';
btn.onclick = function() {
  btn.innerText = 'Telah Diklik';
  btn.className = 'btn-success';
};
document.getElementById('app').appendChild(btn);


// ✅ CARA DEKLARATIF (React JSX)
// Kita hanya mendeskripsikan "APA" yang ingin ditampilkan berdasarkan state
const Tombol = ({ sudahDiklik, onClick }) => {
  return (
    <button 
      className={sudahDiklik ? 'btn-success' : 'btn-primary'} 
      onClick={onClick}
    >
      {sudahDiklik ? 'Telah Diklik' : 'Klik Saya'}
    </button>
  );
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Apa Sebenarnya React Itu?
        </h2>
        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
          React bukanlah sebuah *framework* raksasa (seperti Laravel atau Angular), melainkan sebuah <strong>Library JavaScript untuk membangun Antarmuka Pengguna (UI)</strong>. React diciptakan oleh Facebook dengan tiga pilar filosofi utama:
        </p>
        
        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>A. Component-Based (Berbasis Komponen)</h3>
            <p style={{ opacity: 0.9 }}>
              Sama halnya dengan merancang UI/UX, Anda tidak mendesain halaman sebagai satu gambar besar. Anda mendesain tombol, kartu, dan navbar secara terpisah. React menerapkan hal ini ke dalam kode. UI dipecah menjadi komponen-komponen kecil, mandiri, dan dapat digunakan kembali (*reusable*).
            </p>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-accent)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>B. Declarative (Deklaratif)</h3>
            <p style={{ opacity: 0.9 }}>
              Di React, Anda tidak perlu memerintahkan browser untuk menghapus elemen, menambah kelas, atau menyembunyikan teks secara manual. Anda cukup "mendeklarasikan" bagaimana UI seharusnya terlihat pada kondisi tertentu, dan React akan mengurus manipulasi DOM-nya.
            </p>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-success)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>C. Single Page Application (SPA)</h3>
            <p style={{ opacity: 0.9 }}>
              Website tradisional (MPA) memuat ulang seluruh halaman dari server setiap kali Anda berpindah tautan. React beroperasi sebagai SPA: halaman website hanya dimuat satu kali. Ketika Anda berpindah halaman, React hanya mengganti komponen visual di tengah layar secara instan, membuat aplikasi terasa secepat aplikasi *native* di *smartphone*.
            </p>
          </div>
        </div>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: Imperatif vs Deklaratif
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Untuk benar-benar memahami kehebatan React, kita harus membandingkannya dengan cara kerja JavaScript klasik. Perhatikan bagaimana pendekatan deklaratif membuat kode lebih ringkas dan mudah dibaca:
        </p>
        
        <CodeBlock code={imperativeVsDeclarative} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis & Bedah Arsitektur
        </h2>
        
        

        <h3 style={{ fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
          Rahasia Performa React: The Virtual DOM
        </h3>
        <p style={{ marginBottom: '1.5rem', opacity: 0.9, lineHeight: '1.8' }}>
          Manipulasi DOM (meminta browser mengubah elemen HTML di layar) adalah proses yang sangat "mahal" dan lambat bagi komputer. Jika Anda memiliki tabel dengan 10.000 baris dan hanya 1 baris yang berubah, JavaScript klasik mungkin akan menggambar ulang seluruh tabel.
        </p>
        
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)' }}>
          <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Bagaimana React menyelesaikannya?</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.9 }}>
            <li>React menyimpan salinan ringan dari seluruh UI Anda di memori komputer. Ini disebut <strong>Virtual DOM</strong>.</li>
            <li>Saat ada data (<em>state</em>) yang berubah, React akan membuat Virtual DOM baru.</li>
            <li>React kemudian membandingkan (<em>diffing</em>) Virtual DOM baru dengan Virtual DOM lama untuk mencari tahu <strong>persisnya bagian mana yang berubah</strong>.</li>
            <li>Terakhir, React hanya meng-<em>update</em> elemen spesifik tersebut ke Real DOM (browser). Proses yang sangat presisi ini membuat React luar biasa cepat.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}