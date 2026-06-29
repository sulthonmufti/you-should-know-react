import { useState } from 'react';
import { Folder, FolderOpen, FileJson, FileCode2, FileType2, FileImage } from 'lucide-react';

// Data struktur folder statis
const folderStructure = [
  {
    name: 'public', type: 'folder',
    children: [
      { name: 'favicon.svg', type: 'image', desc: 'Ikon tab browser website Anda.' },
      { name: 'og-image.png', type: 'image', desc: 'Gambar thumbnail yang muncul saat website dibagikan di sosial media.' }
    ]
  },
  {
    name: 'src', type: 'folder',
    children: [
      { name: 'main.jsx', type: 'react', desc: 'File entry-point! Di sinilah React "menyuntikkan" seluruh aplikasinya ke dalam file HTML kosong.' },
      { name: 'App.jsx', type: 'react', desc: 'Komponen Induk (Root). Semua router, tema, dan halaman berada di dalam komponen ini.' },
      { name: 'styles.css', type: 'css', desc: 'File CSS global untuk mengatur variabel warna dan reset margin.' }
    ]
  },
  { name: '.env', type: 'config', desc: 'File sangat rahasia! Tempat menyimpan API Key Firebase (Jangan pernah di-upload ke GitHub).' },
  { name: 'index.html', type: 'html', desc: 'File HTML tunggal di Single Page Application. Hanya berisi div ber-id "root".' },
  { name: 'package.json', type: 'json', desc: 'KTP dari project ini. Berisi daftar library yang diinstal (seperti react-router-dom) dan perintah untuk menjalankan server.' },
  { name: 'vite.config.js', type: 'config', desc: 'Konfigurasi alat build Vite. Jauh lebih cepat dari Webpack bawaan Create React App.' }
];

export default function FileTreeView({ onSelectFile }) {
  return (
    <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-default)', border: '1px solid var(--color-border)' }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Anatomi Folder (Klik File!)</h3>
      <div>
        {folderStructure.map((node, index) => (
          <TreeNode key={index} node={node} onSelectFile={onSelectFile} />
        ))}
      </div>
    </div>
  );
}

// Komponen Rekursif untuk Pohon Folder
function TreeNode({ node, onSelectFile }) {
  const [isOpen, setIsOpen] = useState(true);

  const getIcon = (type, open) => {
    switch (type) {
      case 'folder': return open ? <FolderOpen size={18} color="#FACC15" /> : <Folder size={18} color="#FACC15" />;
      case 'react': return <FileCode2 size={18} color="#61DAFB" />;
      case 'html': return <FileType2 size={18} color="#E44D26" />;
      case 'css': return <FileType2 size={18} color="#264DE4" />;
      case 'json': return <FileJson size={18} color="#FACC15" />;
      case 'image': return <FileImage size={18} color="#4ADE80" />;
      default: return <FileCode2 size={18} color="#A0A0A0" />;
    }
  };

  if (node.type === 'folder') {
    return (
      <div style={{ marginLeft: '1rem' }}>
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.25rem 0', userSelect: 'none' }}
        >
          {getIcon(node.type, isOpen)}
          <span style={{ fontWeight: '600' }}>{node.name}</span>
        </div>
        {isOpen && node.children && (
          <div style={{ borderLeft: '1px solid var(--color-border)', marginLeft: '8px' }}>
            {node.children.map((child, index) => (
              <TreeNode key={index} node={child} onSelectFile={onSelectFile} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      onClick={() => onSelectFile(node)}
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.25rem 0', marginLeft: '1rem' }}
      className="file-node"
    >
      {getIcon(node.type)}
      <span>{node.name}</span>
    </div>
  );
}