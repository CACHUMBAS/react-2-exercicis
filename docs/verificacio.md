# Verificació de l'entrega

Comprovacions efectuades el 26 d'octubre de 2026:

- `npm test`: 36 casos superats. Es comproven les funcions que importen els components, inclosos els límits de notes i edats.
- `npm run build`: compilació de React completada amb Vite.
- Navegador: visibles els nou apartats, en ordre, i els resultats inicials indicats al README.
- Prova del PDF 3.3: canvi temporal de `const edad = 19` a `15`; el navegador mostra `Menor de edad`. Constant restaurada a 19 després de comprovar-ho.
- Prova 3.6: canvi temporal del segon número a 9; amb 9 i 9, el navegador mostra `són iguals`. Constant restaurada a 8.
- Consola del navegador: cap error durant aquestes comprovacions.

Els 36 casos automàtics inclouen 17/18, 64/65, 100/101 i 59/60/61. La verificació de 18–25 i 60 aplica la interpretació acordada, explicada al README.
