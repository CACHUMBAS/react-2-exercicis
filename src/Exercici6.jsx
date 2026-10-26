import React from 'react';
import { compruebaMayor } from './logica.js';

export default function ProgramaMayor() {
  const numero1 = 9;
  const numero2 = 8;

  return (
    <div>
      <h3>Comparador de números</h3>
      <p className="entrada">Primer número: {numero1} · Segon número: {numero2}</p>
      <p className="resultado">{compruebaMayor(numero1, numero2)}</p>
    </div>
  );
}
