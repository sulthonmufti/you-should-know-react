import CodeBlock from '../../components/content/CodeBlock';

export default function HtmlCss() {
  const htmlVsJsxCode = `
// ❌ CARA HTML TRADISIONAL (Akan error di React)
<div class="card" style="background-color: blue; margin-top: 10px;">
  <label for="username">Username</label>
  <input type="text" id="username">
  <br>
</div>

// ✅ CARA JSX (Benar di React)
<div className="card" style={{ backgroundColor: 'blue', marginTop: '10px' }}>
  <label htmlFor="username">Username</label>
  <input type="text" id="username" />
  <br />
</div>
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--color-text)', lineHeight: '1.8' }}>

      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          1. Teori Dasar: JSX, si "HTML" Berwujud JavaScript
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Saat Anda menulis UI di React, Anda sebenarnya tidak sedang menulis HTML, melainkan <strong>JSX</strong>. JSX adalah ekstensi sintaks dari JavaScript yang memungkinkan kita menulis struktur mirip HTML langsung di dalam file JavaScript (atau JSX/TSX).
        </p>
        <p>Karena JSX pada dasarnya akan dikonversi menjadi JavaScript, ada 4 aturan emas yang berbeda dari HTML biasa:</p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong>Atribut Class:</strong> Menggunakan <code>className</code>, bukan <code>class</code>.</li>
          <li><strong>Atribut Label:</strong> Menggunakan <code>htmlFor</code>, bukan <code>for</code>.</li>
          <li><strong>Inline Styles:</strong> Ditulis sebagai objek JavaScript dengan format <em>camelCase</em>, bukan string CSS biasa.</li>
          <li><strong>Tag Penutup:</strong> Semua tag <strong>wajib</strong> ditutup. Tag tunggal (seperti <code>img</code>, <code>br</code>, <code>input</code>) harus ditulis dengan garis miring di akhir (contoh: <code>&lt;img /&gt;</code>).</li>
        </ul>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          2. Contoh Implementasi (Example)
        </h2>
        <p>Perhatikan perbandingan langsung antara penulisan HTML konvensional dengan JSX di bawah ini:</p>

        <CodeBlock code={htmlVsJsxCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          3. Analisis & Bedah Kode
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Mengapa React menerapkan aturan yang tampaknya "menyusahkan" ini? Mari kita bedah alasannya secara teknis:
        </p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li>
            <strong>Mengapa <code>className</code> dan <code>htmlFor</code>?</strong><br />
            JSX akan diubah menjadi JavaScript murni (<code>React.createElement</code>). Dalam bahasa JavaScript, kata <code>class</code> (untuk membuat kelas OOP) dan <code>for</code> (untuk perulangan) adalah <em>reserved keywords</em> (kata yang sudah dipesan/dilarang dipakai untuk nama variabel). Oleh karena itu, React meminjam penamaan dari DOM API, yaitu <code>className</code> dan <code>htmlFor</code>.
          </li>
          <li>
            <strong>Mengapa objek untuk <code>style</code>?</strong><br />
             <br/>
            Sintaks <code>style=&#123;&#123; backgroundColor: 'blue' &#125;&#125;</code> terlihat aneh karena ada dua kurung kurawal. Kurung kurawal pertama <code>&#123; &#125;</code> menandakan bahwa kita akan memasukkan kode JavaScript ke dalam JSX. Kurung kurawal kedua <code>&#123; backgroundColor: 'blue' &#125;</code> adalah wujud objek JavaScript itu sendiri. Format <em>camelCase</em> digunakan karena properti CSS di JavaScript DOM memang dimanipulasi dengan cara tersebut (misal: <code>document.body.style.backgroundColor</code>).
          </li>
        </ul>
      </section>

    </div>
  );
}