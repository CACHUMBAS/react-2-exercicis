import React from 'react';
import { comprobarEdad as comprobar } from './logica.js';

export default function ProgramaMayorEdad() {
  // Canvia 19 per 15, desa el fitxer i comprova "Menor de edad".
  const edad = 19;

  function inicio(dato) {
    const mensaje = comprobar(dato);
    return mensaje;
  }

  return (
    <div lang="es">
      <h3>Programa de admisión</h3>
      <p className="entrada">Resultado para la edad {edad} años:</p>
      <p className="resultado">{inicio(edad)}</p>
    </div>
  );
}
