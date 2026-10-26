import React from 'react';
import { comprobarNota } from './logica.js';

// 3.2. El PDF repeteix el 3.1; conservem un segon component per identificar-lo.
export default function ProgramaNotas() {
  const nota = 5;

  return (
    <div lang="es">
      <h3>Comprobador de notas</h3>
      <p className="entrada">Nota: {nota}</p>
      <p className="resultado">{comprobarNota(nota)}</p>
    </div>
  );
}
