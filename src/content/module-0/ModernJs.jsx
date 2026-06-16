import CodeBlock from '../../components/content/CodeBlock';

export default function ModernJs() {
  const es6Code = `
// ❌ CARA LAMA (Vanilla JS Klasik)
function UserProfile(props) {
  var name = props.name;
  var age = props.age;
  
  var newHobbies = props.hobbies.concat(['Membaca']);

  return "Nama: " + name + ", Umur: " + age;
}

// ✅ CARA MODERN ES6+ (Standar React)
const UserProfile = ({ name, age, hobbies }) => {
  // Destructuring langsung di parameter
  
  // Menggunakan Spread Operator untuk array/object
  const newHobbies = [...hobbies, 'Membaca'];

  // Menggunakan Template Literals
  return \`Nama: \${name}, Umur: \${age}\`;
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          1. Teori Dasar: Mengapa ES6+ Penting untuk React?
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          React modern sangat mengandalkan pembaruan sintaks JavaScript yang diperkenalkan sejak tahun 2015 (ES6) hingga sekarang. Menguasai sintaks ini bukan sekadar gaya-gayaan, melainkan syarat mutlak agar kode Anda tidak berantakan (<em>spaghetti code</em>) dan lebih mudah dipelihara.
        </p>
        <p>Ada 4 konsep utama ES6+ yang akan Anda temui di hampir setiap baris kode React:</p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong>Arrow Functions:</strong> Penulisan fungsi yang lebih ringkas menggunakan <code>=&gt;</code>.</li>
          <li><strong>Destructuring:</strong> Membongkar nilai dari dalam objek atau array langsung ke variabel terpisah.</li>
          <li><strong>Spread/Rest Operator (<code>...</code>):</strong> Menggandakan atau menggabungkan array dan objek dengan sangat mudah. Penting untuk menjaga <em>immutability</em> data.</li>
          <li><strong>Template Literals (<code>\` \`</code>):</strong> Menggabungkan string dan variabel menggunakan <em>backtick</em> tanpa repot memakai tanda plus (<code>+</code>).</li>
        </ul>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          2. Contoh Implementasi (Example)
        </h2>
        <p>Perhatikan evolusi penulisan kode di bawah ini. Kode ES6+ jauh lebih bersih dan mudah dibaca:</p>
        
        <CodeBlock code={es6Code} language="javascript" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          3. Analisis & Bedah Kode
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Mari kita bedah mengapa React sangat menyukai fitur-fitur ini:
        </p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li>
            <strong>Destructuring <code>(&#123; name, age &#125;)</code>:</strong><br />
            Di React, data dikirim antar komponen melalui sebuah objek raksasa bernama <code>props</code>. Daripada menulis <code>props.name</code>, <code>props.age</code> berulang-ulang, kita langsung membongkarnya sejak awal fungsi. Ini menghemat banyak waktu mengetik dan membuat kode langsung ke intinya.
          </li>
          <li>
            <strong>Spread Operator <code>[...hobbies, 'Membaca']</code>:</strong><br />
            React memiliki aturan ketat bernama <em>Immutability</em>. Artinya, kita tidak boleh mengubah data (<em>state</em>) asli secara langsung (seperti menggunakan <code>.push()</code>). Kita harus selalu membuat <strong>salinan baru</strong>. Spread operator (<code>...</code>) adalah cara tercepat dan paling aman untuk menyalin seluruh isi array/objek lama, lalu menambahkan data barunya.
          </li>
          <li>
            <strong>Arrow Function <code>const Component = () =&gt; &#123;&#125;</code>:</strong><br />
            Selain lebih singkat, Arrow Function tidak memiliki ikatan <code>this</code> sendiri. Walaupun di dalam <em>Functional Component</em> modern hal ini sudah tidak terlalu jadi masalah, penulisan Arrow Function telah menjadi standar de facto di industri untuk mendeklarasikan komponen React.
          </li>
        </ul>
      </section>

    </div>
  );
}