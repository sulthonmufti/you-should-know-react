import { Github, Heart, Code2, BookOpen } from 'lucide-react';
import Button from '../../components/ui/Button';

export default function About() {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', width: '100%', lineHeight: '1.8' }}>
      
      {/* HEADER SECTION */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Tentang Proyek Ini
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', opacity: 0.8 }}>
          Belajar React, Pakai React, Buktikan React.
        </p>
      </div>

      {/* STORY SECTION */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <BookOpen size={28} color="var(--color-primary)" />
          <h2 style={{ fontSize: '1.8rem' }}>Cerita di Balik "You Should Know React"</h2>
        </div>
        <p style={{ marginBottom: '1rem' }}>
          Proyek ini lahir dari sebuah kegelisahan sederhana: <strong>Mengapa belajar React harus mahal dan membingungkan?</strong> Banyak pemula tersesat dalam lautan tutorial YouTube yang tidak terstruktur, atau terpaksa membayar <em>bootcamp</em> jutaan rupiah hanya untuk memahami fundamental.
        </p>
        <p>
          Kami percaya bahwa pendidikan teknologi berkualitas harus dapat diakses oleh siapa saja secara gratis. Oleh karena itu, platform ini dibangun dengan kurikulum yang progresif, bahasa yang membumi, dan pendekatan visual yang interaktif.
        </p>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section style={{ marginBottom: '4rem', padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Code2 size={28} color="var(--color-accent)" />
          <h2 style={{ fontSize: '1.8rem' }}>Filosofi Self-Referential</h2>
        </div>
        <p style={{ marginBottom: '1rem' }}>
          Kami memegang teguh prinsip <em>"Eat your own dog food"</em>. Artinya, platform edukasi ini sendiri <strong>dibangun menggunakan teknologi yang sedang Anda pelajari</strong>.
        </p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.9 }}>
          <li>Saat Anda belajar tentang <code>React Router</code>, Anda sebenarnya sedang menggunakan navigasi <em>Single Page Application</em> website ini.</li>
          <li>Saat Anda belajar tentang <code>Context API</code>, Anda bisa melihat implementasi aslinya pada fitur <em>Dark Mode</em> di situs ini.</li>
          <li>Saat Anda belajar tentang <code>Components</code>, Anda sedang berinteraksi dengan puluhan komponen <em>reusable</em> di halaman materi.</li>
        </ul>
      </section>

      {/* CONTRIBUTION SECTION */}
      <section style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Github size={28} color="var(--color-text)" />
          <h2 style={{ fontSize: '1.8rem' }}>Open Source & Kontribusi</h2>
        </div>
        <p style={{ marginBottom: '1.5rem' }}>
          Platform ini adalah proyek <em>open-source</em> (sumber terbuka) yang berarti siapa saja dapat melihat kode sumbernya, melaporkan <em>bug</em>, memperbaiki <em>typo</em>, atau menambahkan materi baru. Kami sangat menyambut kontribusi dari komunitas!
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/username/you-should-know-react" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Github size={20} />
              Lihat Source Code di GitHub
            </Button>
          </a>
          <a href="https://github.com/username/you-should-know-react/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Heart size={20} />
              Panduan Kontribusi
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
}