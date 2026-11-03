import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import './base.css';
import './example.css';
import { Button } from './components/Button/Button.jsx';
import { CTABanner } from './components/CTABanner/CTABanner.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { HeroPanel } from './components/HeroPanel/HeroPanel.jsx';
import { Input } from './components/Input/Input.jsx';
import { OfficeCard } from './components/OfficeCard/OfficeCard.jsx';
import { SectionHeading } from './components/SectionHeading/SectionHeading.jsx';
import { ServiceCard } from './components/ServiceCard/ServiceCard.jsx';
import { ShipmentCard } from './components/ShipmentCard/ShipmentCard.jsx';
import { ShippingCalculator } from './components/ShippingCalculator/ShippingCalculator.jsx';
import { TrackingTimeline } from './components/TrackingTimeline/TrackingTimeline.jsx';

const SERVICES = [
  { number: '01', title: 'Enviar a Cuba', description: 'Haz llegar lo que más importa de la forma más fácil y segura.', items: ['Casillero virtual', 'Puerta a puerta', 'Oficinas Gran Azul', 'Carga comercial'], ctaLabel: 'Ver opciones', featured: true },
  { number: '02', title: 'Comprar para Cuba', description: 'Productos y soluciones para tu familia.', items: ['Combos familiares', 'Alimentos y bebidas', 'Electrodomésticos', 'Motos y vehículos', 'Ofertas especiales'], ctaLabel: 'Ver productos' },
  { number: '03', title: 'Trámites legales', description: 'Gestiona tus documentos desde cualquier lugar.', items: ['Documentos', 'Legalizaciones', 'Poderes y autorizaciones', 'Gestiones internacionales'], ctaLabel: 'Conocer trámites' },
  { number: '04', title: 'Viajar a Cuba', description: 'Vuelos, hoteles y experiencias para volver a lo que importa.', items: ['Vuelos', 'Hoteles', 'Traslados', 'Experiencias'], ctaLabel: 'Ver viajes' },
];

const OFFICES = [
  ['Miami', 'FL'], ['Orlando', 'FL'], ['Tampa', 'FL'], ['Houston', 'TX'],
  ['Dallas', 'TX'], ['Charlotte', 'NC'], ['Las Vegas', 'NV'], ['Chicago', 'IL'],
];

function ExamplePage() {
  const [theme, setTheme] = useState('claro');
  const [code, setCode] = useState('');
  const [tracked, setTracked] = useState(null);

  const track = (e) => {
    e.preventDefault();
    setTracked(code.trim() || 'GA-EJEMPLO');
  };

  return (
    <div data-theme={theme} className="ga-example">
      <header className="ga-example-header">
        <a className="ga-example-brand" href="#">
          <img src="/logo/gran-azul-completo.svg" alt="Gran Azul" width="120" height="37" />
          <span>Gran Azul</span>
        </a>
        <nav className="ga-example-nav" aria-label="Principal">
          <a href="#soluciones">Enviar a Cuba</a>
          <a href="#soluciones">Comprar</a>
          <a href="#soluciones">Trámites legales</a>
          <a href="#soluciones">Viajar</a>
        </nav>
        <div className="ga-example-header-actions">
          <Button variant="secondary" onClick={() => setTheme(theme === 'claro' ? 'oscuro' : 'claro')}>
            {theme === 'claro' ? 'Modo oscuro' : 'Modo claro'}
          </Button>
          <Button onClick={() => { window.location.href = '/storybook/'; }}>Ver Storybook</Button>
        </div>
      </header>

      <main>
        <HeroPanel>
          <p className="ga-example-eyebrow">Familias sin fronteras</p>
          <h1>Más cerca de Cuba, estés donde estés</h1>
          <p className="ga-example-hero-text">
            Envíos, compras, viajes y trámites legales, con la confianza de un equipo que te acompaña.
          </p>
          <div className="ga-example-hero-actions">
            <Button size="lg" arrow>Enviar a Cuba</Button>
            <Button size="lg" variant="secondary">Rastrear envío</Button>
          </div>
          <p className="ga-example-trust">Seguro y confiable · Miles de familias ya confían en nosotros · Más de 15 oficinas en EE. UU.</p>
        </HeroPanel>

        <section className="ga-example-section" aria-labelledby="rastreo">
          <SectionHeading
            eyebrow="Rastreo"
            title="Rastrea tu envío"
            text="Ingresa tu número de seguimiento y conoce el estado en tiempo real. Esta es una demo: cualquier código muestra un envío de ejemplo."
          />
          <form className="ga-example-track-form" onSubmit={track}>
            <Input label="Número de seguimiento" placeholder="Ej. GA-123456" value={code} onChange={(e) => setCode(e.target.value)} />
            <Button type="submit" arrow>Rastrear</Button>
          </form>
          {tracked && (
            <div className="ga-example-track-result">
              <ShipmentCard code={tracked} status="En tránsito" date="Ejemplo demo" />
              <TrackingTimeline current={1} />
            </div>
          )}
        </section>

        <section className="ga-example-section" id="soluciones" aria-labelledby="soluciones">
          <SectionHeading
            eyebrow="Nuestras soluciones"
            title="Todo lo que puedes hacer con Gran Azul"
            text="Cuatro formas de estar más cerca de los tuyos."
          />
          <div className="ga-example-grid">
            {SERVICES.map((s) => <ServiceCard key={s.number} {...s} />)}
          </div>
        </section>

        <section className="ga-example-section" aria-labelledby="pasos">
          <SectionHeading
            eyebrow="Tu envío, paso a paso"
            title="Un proceso simple, seguro y transparente"
          />
          <TrackingTimeline
            steps={['Compras', 'Lo recibimos', 'Procesamos', 'Enviamos', 'Tu familia recibe']}
            current={2}
          />
        </section>

        <section className="ga-example-section ga-example-two-col" aria-labelledby="calculadora">
          <div>
            <SectionHeading align="left" level="h1" eyebrow="Calculadora" title="Calcula tu envío" text="Peso y método, con el resultado marcado como ejemplo demo." />
            <ShippingCalculator />
          </div>
          <div>
            <SectionHeading align="left" level="h1" eyebrow="Siempre cerca de ti" title="Nuestras oficinas en Estados Unidos" text="Más de 15 oficinas en las principales ciudades para ofrecerte un mejor servicio." />
            <div className="ga-example-offices">
              {OFFICES.map(([city, state]) => <OfficeCard key={city} city={city} state={state} />)}
            </div>
          </div>
        </section>

        <section className="ga-example-section">
          <CTABanner title="¿Listo para enviar a Cuba?" text="Explora el sistema completo, componente por componente, en claro y oscuro.">
            <Button onClick={() => { window.location.href = '/storybook/'; }}>Abrir el Storybook</Button>
          </CTABanner>
        </section>
      </main>

      <Footer
        links={[
          { label: 'Enviar a Cuba', href: '#soluciones' },
          { label: 'Comprar', href: '#soluciones' },
          { label: 'Trámites legales', href: '#soluciones' },
          { label: 'Viajar', href: '#soluciones' },
          { label: 'Storybook', href: '/storybook/' },
        ]}
        copyright="© 2026 Gran Azul · Página de ejemplo del sistema de diseño, no un sitio comercial real."
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<ExamplePage />);
