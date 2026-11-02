import React, { useState } from 'react';
import styles from './ShippingCalculator.module.css';
import { cn } from '../../utils.js';
import { WeightInput } from '../WeightInput/WeightInput.jsx';

/** ShippingCalculator — peso + método aéreo/marítimo. El resultado es SOLO un ejemplo demo, no una tarifa real de Gran Azul. */
export function ShippingCalculator({ airRate = 3, seaRate = 2, className = '', ...rest }) {
  const [peso, setPeso] = useState(10);
  const [metodo, setMetodo] = useState('aereo');
  const rate = metodo === 'aereo' ? airRate : seaRate;
  const total = peso * rate;
  return (
    <div className={cn(styles.root, className)} {...rest}>
      <h3 className={styles.title}>Calcula tu envío</h3>
      <WeightInput label="Peso del paquete" value={peso} onChange={setPeso} />
      <div className={styles.methods} role="group" aria-label="Método de envío">
        <button type="button" className={cn(styles.method, metodo === 'aereo' && styles.active)} onClick={() => setMetodo('aereo')}>Aéreo</button>
        <button type="button" className={cn(styles.method, metodo === 'maritimo' && styles.active)} onClick={() => setMetodo('maritimo')}>Marítimo</button>
      </div>
      <p className={styles.result}>Ejemplo demo: <strong>{total} USD</strong> ({peso} lb × {rate} USD/lb)</p>
      <p className={styles.demo}>Solo un ejemplo para la demo. No son tarifas reales de Gran Azul.</p>
    </div>
  );
}
