export default function ProgressBar({ progress = 0 }) {
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'var(--color-surface)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      height: '8px' // Ketebalan bar
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'var(--color-primary)',
        transition: 'width 0.3s ease' // Animasi pergerakan bar yang halus
      }} />
    </div>
  );
}