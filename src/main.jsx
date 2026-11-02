import React from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import './base.css';

function App() {
  return (
    <main style={{ padding: 32, fontFamily: 'var(--ga-font-sans)' }}>
      <h1 style={{ fontSize: 'var(--ga-text-display)' }}>Gran Azul DS</h1>
      <p style={{ color: 'var(--ga-muted)' }}>
        Sistema de diseño para envíos, compras, trámites y viajes a Cuba.
        Abre Storybook para ver los componentes en claro y oscuro.
      </p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
