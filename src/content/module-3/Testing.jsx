import CodeBlock from '../../components/content/CodeBlock';

export default function Testing() {
  const testCode = `
// FILE: Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Komponen Button', () => {
  it('harus merender teks yang diberikan', () => {
    // 1. Render komponen di "browser virtual"
    render(<Button>Klik Saya</Button>);
    
    // 2. Cari elemen berdasarkan teks yang muncul di layar
    const buttonElement = screen.getByText(/Klik Saya/i);
    
    // 3. Ekspektasi (Assertion)
    expect(buttonElement).toBeInTheDocument();
  });

  it('harus memanggil fungsi saat diklik', () => {
    // Membuat fungsi bohongan (mock function)
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick}>Simpan</Button>);
    
    // Simulasi klik oleh pengguna
    fireEvent.click(screen.getByText(/Simpan/i));
    
    // Memastikan fungsi bohongan tadi dipanggil tepat 1 kali
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text)', lineHeight: '1.8' }}>
      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Teori Dasar: Mengapa Harus Repot Menulis Test?
        </h2>
        
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Pernahkah Anda memperbaiki satu fitur di halaman A, tapi tanpa sadar merusak fitur di halaman B? Itulah mimpi buruk <em>developer</em>. <strong>Automated Testing</strong> bertindak sebagai robot penjaga. Ia akan mengeklik, mengetik, dan membaca seluruh aplikasi Anda dalam hitungan detik setiap kali Anda menyimpan kode baru.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Contoh Implementasi: React Testing Library (RTL)
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Berikut adalah contoh penulisan tes menggunakan kombinasi <strong>Vitest</strong> dan <strong>React Testing Library</strong>.
        </p>
        <CodeBlock code={testCode} language="jsx" />
      </section>

      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
          3. Analisis: Filosofi Pengujian React
        </h2>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.9 }}>
          <li>
            <strong style={{ color: 'var(--color-success)' }}>Uji Perilakunya, Bukan Implementasinya:</strong><br />
            Jangan pernah menguji "Apakah komponen ini memiliki state bernilai <code>true</code>?". Pengguna Anda tidak peduli dengan <em>state</em>. Ujilah seperti pengguna nyata: "Jika saya klik tombol ini, apakah muncul teks peringatan di layar?". Inilah inti dari React Testing Library.
          </li>
        </ul>
      </section>
    </div>
  );
}