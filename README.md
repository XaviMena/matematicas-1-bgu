# Matemáticas 1.º BGU

Sitio estudiantil: https://xavimena.github.io/matematicas-1-bgu/

La navegación sigue **trimestre → tema → subtema → lección**. Al abrir un tema, se muestran sus subtemas y se abre el último visitado de ese tema (o el primero). Cada selección del menú lleva al inicio del contenido; el subtema activo aparece en la ubicación del curso. Los enlaces anteriores siguen funcionando y cada trimestre recupera el último subtema visitado durante la sesión. La búsqueda incluye títulos de lecciones y admite palabras sin tildes.

En el primer trimestre:

- **Tema 1 · Números reales y expresiones algebraicas:** conserva los subtemas 1.1 (números reales), 1.2 (productos notables y factorización) y 1.3 (evaluación formativa).
- **Tema 2 · Sistemas de ecuaciones lineales:** cinco subtemas, con 11 lecciones de aprendizaje y seis bloques de evaluación formativa (2.5). En conjunto incluye 19 preguntas de diagnóstico, 51 de práctica y 23 de cierre. Avanza desde igualdad y pares ordenados hacia gráficos, sustitución, eliminación, casos especiales y problemas cotidianos. Incluye ejemplos acompañados, pasos para completar en el cuaderno, refuerzos y un explorador de tres tipos de sistemas. La evaluación formativa toma las páginas 24–25 como referencia de habilidades, con ejercicios adaptados, seis preguntas iniciales, 18 de práctica y ocho de cierre, sin nota ni tiempo límite.

Las notas para el docente están en `docs/metodologia-docente.md`. El libro delimita contenidos de referencia; la secuencia, las explicaciones y los ejercicios se adaptan para construir las bases antes de avanzar. Los trimestres 2 y 3 se muestran como pendientes.

## Descargar cada tema en PDF

El botón **Descargar tema en PDF**, sobre el contenido, descarga el tema completo seleccionado: los tres subtemas del tema 1 o los cinco del tema 2, incluida su evaluación formativa. Las guías contienen diagnósticos, explicaciones, ejemplos, actividades de cuaderno, práctica y cierres, con respuestas y pistas al final. Los gráficos son versiones fijas de los exploradores de la página. La descarga no recoge respuestas ni progreso del estudiante y no necesita generar el documento en su dispositivo.

Los archivos publicados están en `assets/pdf/`. Un único generador utiliza los JSON fuente y KaTeX para conservar la notación matemática. Después de modificar contenidos, regenerar **antes de publicar** (Node.js, Playwright y Google Chrome instalados):

```sh
node scripts/build-pdfs.cjs
python3 scripts/sync-data.py
```

Playwright puede estar instalado en el proyecto o disponible mediante `NODE_PATH`. La generación necesita conexión para cargar la misma versión de KaTeX que la página. `js/pdf-catalog.js` se regenera con las rutas y versiones de los archivos; el botón se oculta en trimestres sin temas preparados.

Revisión de coherencia del tema 2 con el tema 1 (11 de octubre de 2026): ambos usan la misma interfaz y la secuencia diagnóstico → bases → explicación y ejemplo → práctica con apoyo → cierre. Los métodos del tema 2 se apoyan en operaciones, fracciones y distributiva del tema 1; se comprobaron los destinos de los enlaces de repaso, las respuestas de los ejercicios y los ejemplos de sistemas. El tema 2 incorpora comprobación en ambas ecuaciones y actividades de cuaderno. Su primera lección añade dos preguntas obligatorias de base antes de mostrar la explicación; esa diferencia se conserva. Las guías impresas presentan esas preguntas antes del desarrollo y remiten al solucionario para el refuerzo.

## Vista local

Desde esta carpeta:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8766. Los datos también están integrados para abrir `index.html` directamente; KaTeX y las fuentes requieren conexión a internet.

## Contenido y mantenimiento

En `data/curriculum.json`, cada trimestre contiene grupos de tema (`unidades`) y cada grupo contiene sus subtemas (`temas`). Esta organización conserva los identificadores existentes. Para añadir un tema, crea un grupo con `id`, `numero`, `titulo` y su lista de subtemas, cada uno con `id`, `numero`, `titulo`, `archivo` y `descripcion`.

Editar los archivos de `data/modules/`. Después de cambiar cualquier JSON, ejecutar:

```sh
python3 scripts/sync-data.py
```

Esto regenera `js/data-store.js` y evita versiones diferentes entre la fuente y los datos utilizados por la página. La interfaz de las rutas está en `js/learning-path.js`.

Las respuestas permanecen únicamente en memoria durante la sesión: cambiar de lección conserva la práctica; recargar la página la reinicia. No se guardan identidades ni calificaciones. Consultar una solución registra práctica con apoyo; el progreso de lecciones cuenta tres respuestas correctas comprobadas sin consultar las soluciones. Este indicador no sustituye la explicación del estudiante ni la valoración del docente.
