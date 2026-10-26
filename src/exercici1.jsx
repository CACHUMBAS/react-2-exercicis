import React from 'react';
import { comprobarNota } from './logica.js';

// 3.1. La funció del PDF és a logica.js per poder provar-la sense navegador.
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
