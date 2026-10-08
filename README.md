# Matemáticas 1.º BGU

Sitio estudiantil: https://xavimena.github.io/matematicas-1-bgu/

Los dos primeros temas se organizan como rutas de aprendizaje:

- Números reales: ocho lecciones, ocho preguntas de diagnóstico, 24 de práctica y seis de cierre.
- Productos notables y factorización: diez lecciones, seis preguntas de diagnóstico, 30 de práctica y ocho de cierre, con ejemplos numéricos y desarrollo con la distributiva.

El progreso se conserva por separado al cambiar de tema durante la sesión. Cada lección enlaza los refuerzos concretos que necesita e incluye ejemplos explicados. Las notas del docente se conservan en `docs/metodologia-docente.md` y no se cargan en la página estudiantil. El tema 1.3 reúne seis bloques de práctica, seis preguntas de diagnóstico y ocho ejercicios de cierre. Sus enlaces de repaso abren la lección correspondiente de los temas 1.1 y 1.2; las respuestas se conservan al volver durante la sesión.

## Vista local

Desde esta carpeta:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8766. Los datos también están integrados para abrir `index.html` directamente; KaTeX y las fuentes requieren conexión a internet.

## Contenido y mantenimiento

Editar los archivos de `data/modules/`. Después de cambiar cualquier JSON, ejecutar:

```sh
python3 scripts/sync-data.py
```

Esto regenera `js/data-store.js` y evita versiones diferentes entre la fuente y los datos utilizados por la página. La interfaz de las rutas está en `js/learning-path.js`.

Las respuestas permanecen únicamente en memoria durante la sesión: cambiar de lección conserva la práctica; recargar la página la reinicia. No se guardan identidades ni calificaciones. Consultar una solución registra práctica con apoyo; el progreso de lecciones cuenta tres respuestas correctas comprobadas sin consultar las soluciones. Este indicador no sustituye la explicación del estudiante ni la valoración del docente.
