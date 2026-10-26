import React from 'react';
import ProgramaNotas from './exercici1.jsx';
import ComprovarNotes from './Ejercicio2.jsx';
import ProgramaMayorEdad from './Exercici3.jsx';
import ProgramaMayorEdadAmpliado, { ProgramaMayorEdadOriginal } from './exercic4.jsx';
import ProgramaMayor from './Exercici6.jsx';
import ProgramaPreu from './Exercici7.jsx';
import { FuncioPura, ProgramacioFuncional } from './Teoria.jsx';

function Exercici({ numero, titol, fitxer, children }) {
  return (
    <section className="exercici" id={`ex-${numero}`} aria-labelledby={`titol-${numero}`}>
      <header className="capcalera-exercici">
        <h2 id={`titol-${numero}`}><span>{numero}</span> {titol}</h2>
        <code>{fitxer}</code>
      </header>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="saltar" href="#contingut">Salta al contingut</a>
      <header className="portada">
        <div className="contenidor">
          <p className="etiqueta">PROGRAMACIÓ WEB · UNITAT 2</p>
          <h1>React 2<span>Funcions i condicionals</span></h1>
          <p>Dos exercicis de teoria i set pràctiques resoltes, seguint l'ordre del document.</p>
          <nav aria-label="Apartats">
            <a href="#ex-2.3.2">Funcions pures</a>
            <a href="#ex-2.4.1">Programació funcional</a>
            <a href="#ex-3.1">Pràctiques</a>
            <a href="#ex-3.7">Exercici amb nota</a>
          </nav>
        </div>
      </header>
      <main className="contenidor" id="contingut">
        <aside className="indicacio">
          <strong>Com provar els exemples</strong>
          <p>Obre el fitxer indicat, canvia la constant i desa. Amb <code>npm run dev</code>, el navegador actualitza el resultat. Les funcions de càlcul són a <code>src/logica.js</code>.</p>
        </aside>
        <Exercici numero="2.3.2" titol="Una funció pura" fitxer="src/Teoria.jsx"><FuncioPura /></Exercici>
        <Exercici numero="2.4.1" titol="Programació funcional" fitxer="src/Teoria.jsx"><ProgramacioFuncional /></Exercici>
        <Exercici numero="3.1" titol="Condicional ternari" fitxer="src/exercici1.jsx"><ProgramaNotas /></Exercici>
        <Exercici numero="3.2" titol="Segon exemple de notes" fitxer="src/Ejercicio2.jsx">
          <ComprovarNotes />
          <p className="nota">El PDF repeteix el codi del 3.1. Es conserva també aquí per respectar la numeració.</p>
        </Exercici>
        <hr />
        <Exercici numero="3.3" titol="Majoria d'edat" fitxer="src/Exercici3.jsx">
          <ProgramaMayorEdad />
          <p className="nota">Prova proposada: canvia 19 per 15 per obtenir «Menor de edad».</p>
        </Exercici>
        <Exercici numero="3.4" titol="Tres franges d'edat" fitxer="src/exercic4.jsx">
          <ProgramaMayorEdadOriginal />
          <p className="nota">Menys de 18: menor. De 18 a 64: major. A partir de 65: tercera edat.</p>
        </Exercici>
        <Exercici numero="3.5" titol="Ampliació: més de cent anys" fitxer="src/exercic4.jsx">
          <ProgramaMayorEdadAmpliado />
          <p className="nota">La felicitació s'aplica a més de 100 anys; amb 100 encara correspon «Tercera edad».</p>
        </Exercici>
        <Exercici numero="3.6" titol="Major, menor o igual" fitxer="src/Exercici6.jsx">
          <ProgramaMayor />
          <p className="nota">Prova també 8 i 9, i després 9 i 9: «són iguals».</p>
        </Exercici>
        <Exercici numero="3.7" titol="Exercici amb nota · Tarifes" fitxer="src/Exercici7.jsx">
          <ProgramaPreu />
          <p className="nota">Criteri acordat: l'enunciat omet les edats de 18 a 25 i els 60 exactes. S'inclouen a la tarifa de 2 €.</p>
        </Exercici>
      </main>
      <footer className="contenidor">React_2.pdf · Respostes i instruccions completes al README del repositori.</footer>
    </>
  );
}
