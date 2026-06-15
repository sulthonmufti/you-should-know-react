import { Rocket, TrendingUp, Unlock, Code2 } from 'lucide-react';

export default function WhyThisProject() {
  const features = [
    {
      icon: <Rocket size={40} strokeWidth={1.5} color="var(--color-primary)" />,
      title: "Praktik Langsung",
      description: "Tidak hanya teori. Setiap materi akan dilengkapi dengan demo kode interaktif yang bisa Anda lihat langsung hasilnya."
    },
    {
      icon: <TrendingUp size={40} strokeWidth={1.5} color="var(--color-primary)" />,
      title: "Dari Nol Hingga Mahir",
      description: "Kurikulum dirancang progresif. Mulai dari fundamental JavaScript, React Hooks, hingga manajemen State global."
    },
    {
      icon: <Unlock size={40} strokeWidth={1.5} color="var(--color-primary)" />,
      title: "100% Gratis & Terbuka",
      description: "Tidak ada biaya langganan, tidak ada paywall. Ilmu berkualitas dan terstruktur ini bisa diakses oleh siapa saja."
    },
    {
      icon: <Code2 size={40} strokeWidth={1.5} color="var(--color-primary)" />,
      title: "Self-Referential",
      description: "Website edukasi ini sendiri dibangun dengan React. Anda sedang melihat hasil akhir dari apa yang akan Anda pelajari!"
    }
  ];

  return (
    <section style={{ 
      padding: '4rem 2rem', 
      backgroundColor: 'var(--color-surface)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--color-border)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Mengapa Belajar di Sini?
        </h2>
        <p style={{ color: 'var(--color-text)', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Kami memadukan teori terstruktur dengan pengalaman praktik langsung yang jauh lebih efektif dari sekadar menonton video tutorial.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{ 
            padding: '2rem', 
            backgroundColor: 'var(--color-bg)', 
            borderRadius: 'var(--radius-default)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'transform 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
            <p style={{ color: 'var(--color-text)', opacity: 0.8, lineHeight: '1.6', fontSize: '0.95rem' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}