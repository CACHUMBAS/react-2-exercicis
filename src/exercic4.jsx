import React from 'react';
import { clasificarEdad, clasificarEdadConFelicitacion as comprobar } from './logica.js';

// 3.4: es conserva la versió original per comparar-la amb l'ampliació.
export function ProgramaMayorEdadOriginal() {
  const edad = 19;

  function inicio(dato) {
    const mayorEdad = clasificarEdad(dato);
    return mayorEdad;
  }

  return (
    <div lang="es">
      <h3>Programa de admisión</h3>
      <p className="entrada">Edad: {edad} años</p>
      <p className="resultado">{inicio(edad)}</p>
    </div>
  );
}

// 3.5: ampliació dins del mateix fitxer, tal com indica l'enunciat.
export default function ProgramaMayorEdad() {
  // 101 permet veure la nova branca. Amb 100 encara retorna "Tercera edad".
  const edad = 101;

  function inicio(dato) {
    const mayorEdad = comprobar(dato);
    return mayorEdad;
  }

  return (
    <div lang="es">
      <h3>Programa de admisión ampliado</h3>
      <p className="entrada">Edad: {edad} años</p>
      <p className="resultado">{inicio(edad)}</p>
    </div>
  );
}
