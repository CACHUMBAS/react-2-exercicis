import React from 'react';
import { quadrat, doblarNombres } from './logica.js';

export function FuncioPura() {
  const numero = 4;

  return (
    <div>
      <p>Una funció pura retorna el mateix resultat per a les mateixes entrades i no produeix efectes secundaris observables.</p>
      <pre><code>{'function quadrat(numero) {\n  return numero * numero;\n}'}</code></pre>
      <p className="resultado">quadrat({numero}) = {quadrat(numero)}</p>
      <p>És pura perquè només depèn de <code>numero</code>: no modifica variables externes ni l'entrada, no escriu al DOM i no fa peticions. Amb 4 sempre retorna 16. Mostrar el resultat a la pàgina és responsabilitat de React.</p>
    </div>
  );
}

export function ProgramacioFuncional() {
  const nombres = [1, 2, 3, 4];

  return (
    <div>
      <ul>
        <li><strong>Haskell:</strong> llenguatge purament funcional, amb immutabilitat i funcions com a base.</li>
        <li><strong>JavaScript:</strong> multiparadigma; permet funcions com a valors i transformacions amb <code>map</code>, <code>filter</code> i <code>reduce</code>.</li>
        <li><strong>Python:</strong> multiparadigma; ofereix funcions d'ordre superior, <code>map</code>, <code>filter</code> i eines de <code>functools</code>.</li>
        <li><strong>OCaml:</strong> de la família ML; admet programació funcional, funcions d'ordre superior i altres paradigmes.</li>
      </ul>
      <p><strong>Avantatges:</strong> menys dependència d'estat mutable, funcions més fàcils de provar i combinar, i transformacions de col·leccions més expressives. Evitar estat compartit també pot facilitar la concurrència.</p>
      <p>No implica que el codi sigui sempre més ràpid ni més curt. Es poden combinar els dos estils segons el problema; programació declarativa i funcional estan relacionades, però no són sinònims.</p>
      <pre><code>{'const dobles = nombres.map((numero) => numero * 2);'}</code></pre>
      <p className="resultado">[{nombres.join(', ')}] → [{doblarNombres(nombres).join(', ')}]</p>
      <p>La versió imperativa gestiona un índex i afegeix elements amb <code>push</code>; aquesta versió expressa la transformació i crea un array nou.</p>
      <p className="fuentes">Fonts: <a href="https://www.haskell.org/">Haskell</a> · <a href="https://docs.python.org/3/howto/functional.html">Python: Functional Programming HOWTO</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN: map</a>.</p>
    </div>
  );
}
