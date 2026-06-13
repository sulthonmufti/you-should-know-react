export default function Button({ children, variant = 'primary', onClick, ...props }) {
  // Gaya dasar yang dimiliki semua tombol
  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius-default)',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
  };

  // Gaya spesifik berdasarkan varian yang dipilih
  const variants = {
    primary: { backgroundColor: 'var(--color-primary)', color: '#000' },
    secondary: { backgroundColor: 'var(--color-secondary)', color: '#fff' },
    ghost: { backgroundColor: 'transparent', color: 'var(--color-text)', border: '1px solid var(--color-border)' },
    danger: { backgroundColor: 'var(--color-danger)', color: '#fff' }
  };

  return (
    <button style={{ ...baseStyle, ...variants[variant] }} onClick={onClick} {...props}>
      {children}
    </button>
  );
}