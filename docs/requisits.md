# Requisits de l'entrega

Font: React_2.pdf, 15 pàgines (numeració impresa 10–24).

| Apartat | Pàgina impresa | Requisit |
| --- | --- | --- |
| 2.3.2 | 13 | Exemple de funció pura i justificació. |
| 2.4.1 | 15 | Llenguatges que permeten programació funcional i avantatges respecte de la imperativa. |
| 3.1 | 18 | Component de notes, constant 5 i ternari amb llindar 5. |
| 3.2 | 19 | Executar el segon exemple de notes (idèntic al 3.1). |
| 3.3 | 20–21 | Exercici3.jsx; comprovar i iniciar la lògica, constant 19; mostrar-lo sota les notes; verificar també 15. |
| 3.4 | 22 | exercic4.jsx; menor de 18, de 18 a 64 i tercera edat a partir de 65. |
| 3.5 | 22 | Ampliar el 3.4: estrictament més de 100 → Enhorabona. |
| 3.6 | 23 | Comparar dos números i incloure el cas d'igualtat. |
| 3.7 | 24 | Constant d'edat i tarifes amb condicionals. |

## Decisions per resoldre inconsistències

- El 3.1 i el 3.2 són iguals al PDF. Es conservaran tots dos, identificats separadament.
- El PDF alterna exercici1.jsx i Ejercicio2. S'inclouran els dos fitxers amb imports explícits i coherents.
- Es conservarà la versió original del 3.4 i la seva ampliació del 3.5 per poder comparar-les.
- El 3.7 no defineix 18–25 ni 60. L'usuari ha acordat aplicar 2 € també a aquests casos: menor de 18 → 1 €; 18–60 inclosos → 2 €; major de 60 → gratuït.
- Les edats dels exemples són anys enters no negatius i les notes estan entre 0 i 10. No es demana entrada de formulari.
- Aplicació React amb Vite, sense serveis externs ni claus. Dependències React, React DOM i Vite autoritzades per l'usuari.
- Respostes teòriques en català, seguint l'enunciat; missatges dels exemples conservats en l'idioma del PDF.
- Repositori nou i independent; treball en una branca. GitHub privat per defecte, coherent amb la preferència anterior de l'usuari.

## Verificació prevista

Proves de notes, límits 17/18, 64/65, 100/101, comparació en les tres direccions i tarifes 17/18/25/26/59/60/61; compilació de React i revisió al navegador.
