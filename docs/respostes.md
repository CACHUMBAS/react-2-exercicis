# React 2 · Respostes teòriques

## 2.3.2. Exemple de funció pura

```js
function quadrat(numero) {
  return numero * numero;
}

quadrat(4); // 16
quadrat(4); // 16
quadrat(-3); // 9
```

Una funció pura compleix dues propietats:

1. **És determinista:** per a les mateixes entrades sempre retorna el mateix resultat. En aquest cas, el quadrat de 4 sempre és 16; no depèn de l'hora, de valors aleatoris ni d'estat extern mutable.
2. **No té efectes secundaris observables:** no modifica l'argument ni variables externes, no canvia el DOM, no fa peticions i no llegeix ni escriu fitxers.

Per això `quadrat` és pura. La seva responsabilitat és calcular i retornar un valor. El component React s'encarrega de presentar-lo. Crear una variable local per calcular el resultat no faria impura la funció: el criteri important és no alterar estat observable des de fora.

El fet de tenir paràmetres o utilitzar `return` no garanteix, per si sol, la puresa. Una funció que retorna un nombre aleatori és impura; una funció sense paràmetres que sempre retorna 42 pot ser pura. Els indicadors del PDF són orientatius, no una definició absoluta.

Implementació executable: `src/logica.js`, funció `quadrat`. Presentació: `src/Teoria.jsx`.

## 2.4.1. Llenguatges i avantatges de la programació funcional

| Llenguatge | Com permet treballar funcionalment |
| --- | --- |
| Haskell | És purament funcional. Fa servir funcions, immutabilitat i transparència referencial; els efectes es representen explícitament. |
| JavaScript | És multiparadigma. Les funcions són valors que es poden passar i retornar. `map`, `filter` i `reduce` permeten transformar col·leccions; es poden escriure funcions pures. |
| Python | És multiparadigma. Admet funcions d'ordre superior, `map`, `filter`, generadors i eines com `functools`. |
| OCaml | Pertany a la família ML i admet programació funcional amb funcions d'ordre superior, juntament amb altres paradigmes. |

### Comparació amb l'estil imperatiu

Exemple imperatiu en JavaScript:

```js
const nombres = [1, 2, 3, 4];
const dobles = [];

for (let i = 0; i < nombres.length; i++) {
  dobles.push(nombres[i] * 2);
}
// dobles: [2, 4, 6, 8]
```

Exemple funcional/declaratiu equivalent:

```js
function doblarNombres(nombres) {
  return nombres.map((numero) => numero * 2);
}

doblarNombres([1, 2, 3, 4]); // [2, 4, 6, 8]
```

La primera versió especifica les passes: inicialitzar el resultat, gestionar l'índex i afegir elements. La segona expressa la transformació que volem aplicar a cada valor. En aquest exemple, `map` crea un array nou i la funció que rep no modifica l'original.

Avantatges:

- **Facilitat de prova:** les funcions pures es poden comprovar amb entrades i resultats coneguts, sense preparar estat global.
- **Menys errors per mutacions inesperades:** evitar modificacions de dades compartides redueix dependències ocultes.
- **Composició i reutilització:** es poden combinar funcions petites per construir operacions més grans.
- **Llegibilitat:** les transformacions de dades poden expressar directament la intenció, evitant índexs i acumuladors manuals.
- **Concurrència:** reduir l'estat mutable compartit pot facilitar executar càlculs independents; no fa que qualsevol programa sigui automàticament paral·lel.

No sempre és l'opció més ràpida ni la més breu: crear còpies pot consumir memòria i alguns algoritmes s'expressen millor amb bucles. Els llenguatges multiparadigma permeten combinar estils. Declaratiu i funcional estan relacionats, però no són sinònims: SQL és declaratiu i no equival a programació funcional pura.

### Fonts consultades

- [Haskell: descripció oficial del llenguatge](https://www.haskell.org/).
- [Python: Functional Programming HOWTO](https://docs.python.org/3/howto/functional.html), que també identifica la família ML i OCaml.
- [MDN: Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Criteris dels exercicis pràctics

- **3.1 i 3.2:** `dato >= 5` retorna `Aprobado`; en cas contrari, `Suspendido`. El PDF conté dos exemples idèntics i tots dos es mostren.
- **3.3:** `Number(valor)` converteix el valor; menys de 18 retorna `Menor de edad` i a partir de 18, `Admitido. Mayor de edad`. `inicio` obté el missatge i el retorna per renderitzar-lo.
- **3.4:** ternaris encadenats separen menors de 18, persones de 18 a 64 i persones de 65 o més.
- **3.5:** s'afegeix `edad > 100` abans dels altres casos. Així, 101 retorna `Enhorabona` i 100 encara retorna `Tercera edad`.
- **3.6:** es comprova si el primer número és major; si no, si ho és el segon. Si cap condició es compleix, els números són iguals i es mostra literalment `són iguals`.
- **3.7:** `edad > 60` dona `Preu: Gratuït`; `edad < 18` dona `Preu: 1€`; la resta dona `Preu: 2€`.

**Interpretació explícita del 3.7:** el PDF deixa sense cobrir les edats de 18 a 25 i els 60 exactes. Per acord amb l'usuari, es cobra 2 € en aquests casos. Aquesta ampliació no es presenta com una condició escrita a l'enunciat.
