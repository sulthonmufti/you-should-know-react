import CodeBlock from '../../components/content/CodeBlock';

export default function Firestore() {
  const firestoreCode = `
import { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

export default function GlobalChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // 1. MENDENGARKAN DATA SECARA REAL-TIME
  useEffect(() => {
    // Membuat rujukan (query) ke tabel 'chat' dan mengurutkan berdasarkan waktu
    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    
    // onSnapshot akan terpicu SETIAP KALI ada perubahan data di database
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(data);
    });

    return () => unsubscribe(); // Cleanup saat komponen hilang
  }, []);

  // 2. MENAMBAH DATA KE DATABASE
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage) return;

    await addDoc(collection(db, 'chats'), {
      text: newMessage,
      createdAt: new Date(),
      user: 'Guest'
    });
    setNewMessage(''); // Kosongkan input setelah terkirim
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Ketik pesan..." 
        />
        <button type="submit">Kirim</button>
      </form>

      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            <strong>{msg.user}:</strong> {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      
      {/* BAGIAN 1: TEORI */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Database NoSQL & Firestore
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Cloud Firestore adalah database NoSQL berbasis dokumen. Jika Anda terbiasa dengan database relasional (SQL) seperti MySQL yang berbentuk tabel dan baris kaku, NoSQL bekerja lebih seperti folder di komputer Anda.
        </p>

        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.9 }}>
          <li><strong>Collection (Koleksi):</strong> Ibarat "Folder" (contoh: folder <code>users</code>).</li>
          <li><strong>Document (Dokumen):</strong> Ibarat "File" di dalam folder tersebut. Berisi data dalam format mirip JSON (contoh: file <code>user_123</code> yang berisi nama dan umur).</li>
        </ul>
      </section>

      {/* BAGIAN 2: CONTOH */}
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: Real-Time Chat
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Kekuatan utama Firestore adalah <strong>Real-Time Synchronization</strong>. Perhatikan bagaimana kita membuat aplikasi *chat* ala WhatsApp di bawah ini tanpa perlu memuat ulang (<em>refresh</em>) layar atau menekan tombol ambil data.
        </p>
        
        <CodeBlock code={firestoreCode} language="jsx" />
      </section>

      {/* BAGIAN 3: ANALISIS */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: <code>getDocs</code> vs <code>onSnapshot</code>
        </h2>
        
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-accent)' }}>getDocs (Ambil Sekali):</strong><br />
            Mirip seperti Fetch API biasa. Kita meminta data ke server, server memberikan data, lalu koneksi terputus. Jika ada pesan baru yang masuk ke database sedetik kemudian, layar kita tidak akan tahu sampai kita memanggil <code>getDocs</code> lagi. Cocok untuk data yang jarang berubah (seperti profil user atau daftar produk statis).
          </li>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>onSnapshot (Soket Real-Time):</strong><br />
            Ini membuka "Pipa Komunikasi" permanen antara aplikasi React Anda dan server Firebase. Jika pengguna lain di ujung dunia menambahkan pesan ke database, Firebase akan secara otomatis memompa data tersebut melalui pipa ini langsung ke fungsi <code>setMessages</code> Anda. Hasilnya? Pesan muncul di layar seketika bak sihir!
          </li>
        </ul>
      </section>

    </div>
  );
}