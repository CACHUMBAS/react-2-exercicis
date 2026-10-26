import React from 'react';
import { calcularPrecio } from './logica.js';

export default function ProgramaPreu() {
  // L'exercici demana una constant: modifica-la i desa per canviar el resultat.
  const edad = 26;

  return (
    <div>
      <h3>Preu de l'entrada</h3>
      <p className="entrada">Edat: {edad} anys</p>
      <p className="resultado">{calcularPrecio(edad)}</p>
      <p>Menors de 18: 1 €. De 18 a 60: 2 €. Majors de 60: gratuït.</p>
    </div>
  );
}
