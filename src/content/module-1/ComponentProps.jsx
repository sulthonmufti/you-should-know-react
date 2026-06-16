import CodeBlock from '../../components/content/CodeBlock';

export default function ComponentProps() {
  const componentPropsCode = `
// 1. MEMBUAT KOMPONEN (Seperti merancang Master Component)
// Parameter { text, variant, onClick } ini adalah "Props"
const CustomButton = ({ text, variant, onClick }) => {
  // Menentukan warna berdasarkan prop "variant"
  const bgColor = variant === 'danger' ? 'red' : 'blue';

  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: bgColor, color: 'white', padding: '10px 20px', borderRadius: '8px' }}
    >
      {text}
    </button>
  );
};

// 2. MENGGUNAKAN KOMPONEN (Seperti meletakkan Instance di frame)
const App = () => {
  return (
    <div className="button-group">
      {/* Menggunakan komponen berkali-kali dengan "Props" yang berbeda */}
      
      <CustomButton 
        text="Simpan Data" 
        variant="primary" 
        onClick={() => console.log('Menyimpan...')} 
      />
      
      <CustomButton 
        text="Hapus Akun" 
        variant="danger" 
        onClick={() => console.log('Menghapus...')} 
      />
    </div>
  );
};
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Component & Props
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Jika Anda terbiasa merancang antarmuka visual, konsep ini sangat identik dengan fitur "Component" pada perangkat desain modern. Daripada menggambar tombol secara manual di setiap halaman, Anda membuat satu elemen induk, lalu meletakkannya berkali-kali sebagai <em>instance</em> di berbagai layar.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-primary)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>A. Component (Komponen)</h3>
            <p style={{ opacity: 0.9 }}>
              Komponen adalah blok penyusun UI. Di React, komponen hanyalah sebuah <strong>Fungsi JavaScript biasa</strong> yang mengembalikan struktur tampilan (JSX). Komponen membagi UI yang kompleks menjadi potongan-potongan kecil yang independen dan dapat digunakan kembali (*reusable*).
            </p>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-default)', borderLeft: '4px solid var(--color-accent)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>B. Props (Properties)</h3>
            <p style={{ opacity: 0.9 }}>
              Bagaimana cara membedakan setiap <em>instance</em> komponen? Misalnya, Anda ingin satu tombol bertuliskan "Simpan" dan tombol lainnya "Batal". Di sinilah <strong>Props</strong> berperan. Props adalah data atau konfigurasi yang kita "lempar" dari komponen induk ke komponen anak untuk memodifikasi tampilannya.
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
          Mari kita lihat bagaimana sebuah komponen tombol dibuat satu kali, namun bisa menghasilkan tampilan dan fungsi yang berbeda berkat bantuan <code>props</code>:
        </p>
        
        <CodeBlock code={componentPropsCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis & Aturan Emas
        </h2>
        
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Ada dua aturan absolut yang wajib Anda ingat saat bekerja dengan aliran data antar komponen di ekosistem React:
        </p>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>One-Way Data Flow (Aliran Data Satu Arah):</strong><br />
            Data (Props) hanya bisa mengalir dari atas ke bawah. Dari komponen Induk (Parent) turun ke komponen Anak (Child). Komponen Anak tidak bisa melempar props kembali ke atas untuk mengubah Induknya secara langsung.
          </li>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>Props itu Read-Only (Hanya Baca):</strong><br />
            Sebuah komponen <strong>dilarang keras</strong> mengubah nilai props yang diterimanya. Jika komponen <code>CustomButton</code> menerima <code>text="Simpan"</code>, ia tidak boleh mencoba mengubahnya menjadi <code>text="Menyimpan"</code> di dalam fungsinya sendiri. Props adalah instruksi statis dari atas; jika tampilannya perlu berubah dari dalam, kita harus menggunakan <strong>State</strong> (yang akan dipelajari di materi selanjutnya).
          </li>
          <li>
            <strong style={{ color: 'var(--color-primary)' }}>Prop "Children":</strong><br />
            Selain melempar atribut spesifik seperti <code>text</code>, React memiliki prop khusus bernama <code>children</code>. Prop ini memungkinkan sebuah komponen untuk "membungkus" elemen lain di dalamnya, sama seperti struktur arsitektur <code>&lt;PageWrapper&gt;</code> yang telah kita gunakan di project ini.
          </li>
        </ul>
      </section>

    </div>
  );
}