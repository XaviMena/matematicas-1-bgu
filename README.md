# Matemáticas 1.º BGU

Sitio estudiantil: https://xavimena.github.io/matematicas-1-bgu/

La navegación sigue **trimestre → tema → subtema → lección**. Al abrir un tema, se muestran sus subtemas y se abre el último visitado de ese tema (o el primero). Cada selección del menú lleva al inicio del contenido; el subtema activo aparece en la ubicación del curso. Los enlaces anteriores siguen funcionando y cada trimestre recupera el último subtema visitado durante la sesión. La búsqueda incluye títulos de lecciones y admite palabras sin tildes.

En el primer trimestre:

- **Tema 1 · Números reales y expresiones algebraicas:** conserva los subtemas 1.1 (números reales), 1.2 (productos notables y factorización) y 1.3 (evaluación formativa).
- **Tema 2 · Sistemas de ecuaciones lineales:** cinco subtemas, con 11 lecciones de aprendizaje y seis bloques de evaluación formativa (2.5). En conjunto incluye 19 preguntas de diagnóstico, 51 de práctica y 23 de cierre. Avanza desde igualdad y pares ordenados hacia gráficos, sustitución, eliminación, casos especiales y problemas cotidianos. Incluye ejemplos acompañados, pasos para completar en el cuaderno, refuerzos y un explorador de tres tipos de sistemas. La evaluación formativa toma las páginas 24–25 como referencia de habilidades, con ejercicios adaptados, seis preguntas iniciales, 18 de práctica y ocho de cierre, sin nota ni tiempo límite.

Las notas para el docente están en `docs/metodologia-docente.md`. El libro delimita contenidos de referencia; la secuencia, las explicaciones y los ejercicios se adaptan para construir las bases antes de avanzar. Los trimestres 2 y 3 se muestran como pendientes.

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
