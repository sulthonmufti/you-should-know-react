import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Braces } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '70vh',
      textAlign: 'center',
      padding: '2rem',
      animation: 'fadeIn 0.5s ease-in-out'
    }}>
      
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <AlertTriangle size={100} color="var(--color-danger)" strokeWidth={1.5} />
        <Braces 
          size={40} 
          color="var(--color-bg)" 
          style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }} 
        />
      </div>
      
      <h1 style={{ 
        fontSize: '5rem', 
        color: 'var(--color-primary)', 
        marginBottom: '0.5rem', 
        lineHeight: '1',
        fontWeight: '800',
        letterSpacing: '5px'
      }}>
        404
      </h1>
      
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
        State Not Found!
      </h2>
      
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem 2rem', borderRadius: 'var(--radius-card)', border: '1px dashed var(--color-border)', marginBottom: '2.5rem', maxWidth: '600px' }}>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '1rem', lineHeight: '1.6' }}>
          Sepertinya komponen yang Anda cari gagal di-<em>render</em>, tidak pernah di-<em>mount</em>, atau mungkin terjebak di dalam <em>infinite loop</em> dimensi lain.
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.7, fontStyle: 'italic' }}>
          // Tenang saja, salah ketik URL adalah hal yang manusiawi.<br/>
          // Coba periksa kembali ejaan URL Anda.
        </p>
      </div>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', padding: '1rem 2rem', borderRadius: '50px' }}>
          <Home size={22} />
          Kembali ke Root Component (Home)
        </Button>
      </Link>
    </div>
  );
}