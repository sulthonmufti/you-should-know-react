export default function Badge({ level }) {
  const baseStyle = {
    padding: '0.25rem 0.75rem',
    borderRadius: 'var(--radius-pill)',
    fontSize: '0.875rem',
    fontWeight: '500',
    display: 'inline-block'
  };

  let colors = {};
  if (level === 'Dasar') {
    colors = { backgroundColor: 'var(--color-success)', color: '#000' };
  } else if (level === 'Menengah') {
    colors = { backgroundColor: 'var(--color-warning)', color: '#000' };
  } else if (level === 'Lanjutan') {
    colors = { backgroundColor: 'var(--color-danger)', color: '#fff' };
  } else {
    colors = { backgroundColor: 'var(--color-surface)', color: 'var(--color-text)' };
  }

  return (
    <span style={{ ...baseStyle, ...colors }}>
      {level}
    </span>
  );
}