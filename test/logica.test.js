import test from 'node:test';
import assert from 'node:assert/strict';
import {
  quadrat, doblarNombres, comprobarNota, comprobarEdad, clasificarEdad,
  clasificarEdadConFelicitacion, compruebaMayor, calcularPrecio,
} from '../src/logica.js';

test('2.3.2: una mateixa entrada dona el mateix quadrat', () => {
  assert.equal(quadrat(4), 16);
  assert.equal(quadrat(4), 16);
  assert.equal(quadrat(-3), 9);
  assert.equal(quadrat(0), 0);
});

test('2.4.1: map dobla els valors sense modificar la llista original', () => {
  const original = Object.freeze([1, 2, 3, 4]);
  const resultat = doblarNombres(original);
  assert.deepEqual(resultat, [2, 4, 6, 8]);
  assert.deepEqual(original, [1, 2, 3, 4]);
  assert.notEqual(resultat, original);
  assert.deepEqual(doblarNombres([]), []);
});

// Detecta errors de llindar: 5 ja és aprovat, 18 ja és major i 65 ja és tercera edat.
for (const [nota, esperat] of [[0, 'Suspendido'], [4.9, 'Suspendido'], [5, 'Aprobado'], [10, 'Aprobado']]) {
  test(`3.1–3.2: nota ${nota} → ${esperat}`, () => assert.equal(comprobarNota(nota), esperat));
}
for (const [edat, esperat] of [[15, 'Menor de edad'], [17, 'Menor de edad'], [18, 'Admitido. Mayor de edad'], [19, 'Admitido. Mayor de edad'], ['19', 'Admitido. Mayor de edad']]) {
  test(`3.3: edat ${JSON.stringify(edat)} → ${esperat}`, () => assert.equal(comprobarEdad(edat), esperat));
}
for (const [edat, esperat] of [[17, 'Menor de edad'], [18, 'Mayor de edad'], [64, 'Mayor de edad'], [65, 'Tercera edad'], [101, 'Tercera edad']]) {
  test(`3.4: edat ${edat} → ${esperat}`, () => assert.equal(clasificarEdad(edat), esperat));
}

// Detecta tant la prioritat de >100 com una confusió entre > i >=.
for (const [edat, esperat] of [[17, 'Menor de edad'], [18, 'Mayor de edad'], [64, 'Mayor de edad'], [65, 'Tercera edad'], [100, 'Tercera edad'], [101, 'Enhorabona']]) {
  test(`3.5: edat ${edat} → ${esperat}`, () => assert.equal(clasificarEdadConFelicitacion(edat), esperat));
}
for (const [n1, n2, esperat] of [[9, 8, 'el primero, 9 es mayor'], [8, 9, 'el segundo, 9 es mayor'], [9, 9, 'són iguals'], [0, 0, 'són iguals'], [-3, -5, 'el primero, -3 es mayor']]) {
  test(`3.6: comparar ${n1} i ${n2}`, () => assert.equal(compruebaMayor(n1, n2), esperat));
}

// 18–25 i 60 estan inclosos a 2 € per la interpretació acordada de l'enunciat.
for (const [edat, esperat] of [[0, 'Preu: 1€'], [17, 'Preu: 1€'], [18, 'Preu: 2€'], [25, 'Preu: 2€'], [26, 'Preu: 2€'], [59, 'Preu: 2€'], [60, 'Preu: 2€'], [61, 'Preu: Gratuït'], [100, 'Preu: Gratuït']]) {
  test(`3.7: edat ${edat} → ${esperat}`, () => assert.equal(calcularPrecio(edat), esperat));
}
