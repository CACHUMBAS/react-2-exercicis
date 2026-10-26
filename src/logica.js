// 2.3.2: funció pura. Només depèn del paràmetre i no modifica res extern.
export function quadrat(numero) {
  return numero * numero;
}

// 2.4.1: expressa la transformació desitjada sense un bucle imperatiu.
export function doblarNombres(nombres) {
  return nombres.map((numero) => numero * 2);
}

// 3.1 i 3.2: un 5 ja és aprovat.
export function comprobarNota(dato) {
  const respuesta = (dato >= 5) ? 'Aprobado' : 'Suspendido';
  return respuesta;
}

// 3.3: Number permet la conversió que demana el model del PDF.
export function comprobarEdad(valor) {
  const edadNum = Number(valor);
  const resultado = (edadNum < 18) ? 'Menor de edad' : 'Admitido. Mayor de edad';
  return resultado;
}

// 3.4: versió original, abans d'afegir la felicitació del 3.5.
export function clasificarEdad(valor) {
  const edad = Number(valor);
  const resultado = (edad < 18) ? 'Menor de edad'
    : (edad < 65) ? 'Mayor de edad'
      : 'Tercera edad';
  return resultado;
}

// 3.5: comprovem >100 primer, perquè no quedi ocult dins de "Tercera edad".
export function clasificarEdadConFelicitacion(valor) {
  const edad = Number(valor);
  const resultado = (edad > 100) ? 'Enhorabona'
    : (edad < 18) ? 'Menor de edad'
      : (edad < 65) ? 'Mayor de edad'
        : 'Tercera edad';
  return resultado;
}

// 3.6: si cap dels dos és major, són iguals (constants numèriques).
export function compruebaMayor(n1, n2) {
  const resultado = (n1 > n2) ? `el primero, ${n1} es mayor`
    : (n2 > n1) ? `el segundo, ${n2} es mayor`
      : 'són iguals';
  return resultado;
}

// 3.7: acord per als casos omesos al PDF: 18–25 i 60 també paguen 2 €.
export function calcularPrecio(valor) {
  const edad = Number(valor);
  const resultado = (edad > 60) ? 'Preu: Gratuït'
    : (edad < 18) ? 'Preu: 1€'
      : 'Preu: 2€';
  return resultado;
}
