import React from 'react';
import styles from './WeightInput.module.css';
import { cn } from '../../utils.js';

/** WeightInput — peso en libras, con botones +/−. */
export function WeightInput({ label = 'Peso', value = 0, onChange, min = 0, step = 1, className = '', ...rest }) {
  const set = (next) => onChange && onChange(Math.max(min, next));
  return (
    <div className={cn(styles.root, className)} {...rest}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.row}>
        <button type="button" className={styles.btn} onClick={() => set((value || 0) - step)} aria-label="Quitar peso">−</button>
        <input className={styles.input} type="number" value={value} min={min} step={step} onChange={(e) => set(Number(e.target.value) || 0)} aria-label={label} />
        <span className={styles.unit}>lb</span>
        <button type="button" className={styles.btn} onClick={() => set((value || 0) + step)} aria-label="Añadir peso">+</button>
      </div>
    </div>
  );
}
