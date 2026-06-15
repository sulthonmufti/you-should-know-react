import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, language = 'jsx' }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div style={{ 
      margin: '2rem 0', 
      borderRadius: 'var(--radius-default)', 
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0.5rem 1rem', 
        backgroundColor: '#1E1E1E',
        borderBottom: '1px solid #333'
      }}>
        <span style={{ 
          color: '#A0A0A0', 
          fontSize: '0.8rem', 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {language}
        </span>
        
        <button 
          onClick={handleCopy} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: isCopied ? 'var(--color-success)' : '#A0A0A0', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontSize: '0.85rem',
            transition: 'color 0.2s'
          }}
        >
          {isCopied ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy</>}
        </button>
      </div>

      {/* main code block */}
      <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre 
            className={className} 
            style={{ 
              ...style, 
              padding: '1.5rem 1rem', 
              margin: 0, 
              overflowX: 'auto', 
              fontSize: '0.95rem'
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} style={{ display: 'table-row' }}>
                <span style={{ 
                  display: 'table-cell', 
                  textAlign: 'right', 
                  paddingRight: '1.5em', 
                  userSelect: 'none', 
                  opacity: 0.3 
                }}>
                  {i + 1}
                </span>
                
                <span style={{ display: 'table-cell' }}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}