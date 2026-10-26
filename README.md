# React 2 · Funcions i condicionals

Entrega dels exercicis de **React_2.pdf** (pàgines impreses 10–24). Inclou les dues respostes teòriques, els set exercicis pràctics i les comprovacions dels casos límit.

## Executar el projecte

Cal Node.js **22.12 o superior** (comprovat amb Node 24). No cal instal·lar Vite globalment ni configurar claus.

```sh
git clone https://github.com/CACHUMBAS/react-2-exercicis.git
cd react-2-exercicis
npm ci
npm run dev
```

Obre l'adreça que indica la terminal (habitualment `http://127.0.0.1:5173`). `npm start` també inicia el servidor. Per aturar-lo, prem **Ctrl+C**.

En Windows, si PowerShell bloqueja `npm.ps1`, utilitza `npm.cmd ci` i `npm.cmd run dev`; no cal canviar la política d'execució.

El repositori és privat: per clonar-lo des de GitHub cal tenir-hi accés. El professor pot rebre accés de lectura o el ZIP del codi.

## On és cada exercici?

| Exercici | Solució | Resultat inicial |
| --- | --- | --- |
| 2.3.2 · Funció pura | [Respostes](docs/respostes.md#232-exemple-de-funció-pura), `src/Teoria.jsx` | `quadrat(4) = 16` i justificació |
| 2.4.1 · Llenguatges funcionals | [Respostes](docs/respostes.md#241-llenguatges-i-avantatges-de-la-programació-funcional), `src/Teoria.jsx` | Llenguatges, avantatges, exemple i fonts |
| 3.1 · Notes | [src/exercici1.jsx](src/exercici1.jsx) | 5 → `Aprobado` |
| 3.2 · Notes (segon exemple) | [src/Ejercicio2.jsx](src/Ejercicio2.jsx) | 5 → `Aprobado` |
| 3.3 · Majoria d'edat | [src/Exercici3.jsx](src/Exercici3.jsx) | 19 → `Admitido. Mayor de edad` |
| 3.4 · Franges d'edat | [src/exercic4.jsx](src/exercic4.jsx), `ProgramaMayorEdadOriginal` | 19 → `Mayor de edad` |
| 3.5 · Ampliació del 3.4 | [src/exercic4.jsx](src/exercic4.jsx), exportació per defecte | 101 → `Enhorabona` |
| 3.6 · Comparació | [src/Exercici6.jsx](src/Exercici6.jsx) | 9 i 8 → `el primero, 9 es mayor` |
| 3.7 · Exercici amb nota | [src/Exercici7.jsx](src/Exercici7.jsx) | 26 → `Preu: 2€` |

Tots es renderitzen a [src/App.jsx](src/App.jsx). El 3.3 apareix sota les notes i separat amb una línia, com demana el document.

Les funcions de càlcul estan agrupades a [src/logica.js](src/logica.js), amb comentaris que indiquen l'apartat. Els components les importen per no duplicar la lògica i per provar les mateixes funcions que s'executen a la pàgina. Es mantenen les constants dins de cada component i les funcions `inicio` dels exercicis d'edat. Els encapçalaments interiors fan servir `h3` per respectar la jerarquia dels apartats `h2`.

## Provar altres valors, com demana el PDF

Amb `npm run dev` actiu, edita la constant indicada, desa el fitxer i observa el navegador:

| Fitxer / constant | Valors que pots provar | Resultats esperats |
| --- | --- | --- |
| `exercici1.jsx` i `Ejercicio2.jsx`: `nota` | 4, 5 | `Suspendido`, `Aprobado` |
| `Exercici3.jsx`: `edad` | 19, 15, 18 | admès, menor, admès |
| `exercic4.jsx`, versió original: `edad` | 17, 18, 64, 65 | menor, major, major, tercera edat |
| `exercic4.jsx`, versió ampliada: `edad` | 100, 101 | `Tercera edad`, `Enhorabona` |
| `Exercici6.jsx`: `numero1`, `numero2` | (9, 8), (8, 9), (9, 9) | primer major, segon major, `són iguals` |
| `Exercici7.jsx`: `edad` | 17, 18, 25, 26, 59, 60, 61 | 1 €, 2 €, 2 €, 2 €, 2 €, 2 €, gratuït |

S'assumeixen edats vàlides en anys enters no negatius, notes entre 0 i 10 i números finits. L'enunciat treballa amb constants, no amb formularis.

## Particularitats de l'enunciat

1. **3.1 i 3.2 repeteixen el mateix codi.** Es conserven ambdós components. El nom `Ejercicio2.jsx` resol la referència que fa el PDF a l'import de `App.jsx`.
2. **3.5 amplia el 3.4 al mateix fitxer.** Es manté una exportació de la versió original per comparar-la amb la nova.
3. **3.7 deixa buits:** no especifica 18–25 ni 60. La interpretació acordada és cobrar **2 € de 18 a 60, inclosos**. El criteri queda visible tant aquí com a la pàgina.
4. Els exemples teòrics del document s'utilitzen com a explicació; les activitats a entregar són 2.3.2, 2.4.1 i 3.1–3.7. No es necessita cap backend.

## Verificació

```sh
npm test         # 36 casos: funcions pures, notes, edats, igualtat i tarifes
npm run build   # Compila React i genera dist/
npm run check   # Executa les dues comprovacions anteriors
npm run preview # Serveix la compilació per revisar-la
```

Les proves utilitzen `node:test`, inclòs amb Node: no cal cap llibreria de proves addicional. Els resultats esperats són valors literals independents de la implementació.

## Entrega

- Codi font: aquest repositori, amb `package-lock.json` per reproduir les dependències.
- Teoria completa: [docs/respostes.md](docs/respostes.md).
- Correspondència amb l'enunciat: [docs/requisits.md](docs/requisits.md).
- No s'inclouen `node_modules`, `dist`, credencials ni arxius d'altres projectes.
- El PDF del professor no es redistribueix; es referencia per nom i pàgines.

## Referències tècniques

- [React: createRoot](https://react.dev/reference/react-dom/client/createRoot).
- [Vite: Getting Started](https://vite.dev/guide/).
- Les fonts de la resposta de programació funcional estan citades a [docs/respostes.md](docs/respostes.md).
