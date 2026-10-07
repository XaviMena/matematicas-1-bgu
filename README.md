# Matemáticas 1.º BGU

Sitio estudiantil: https://xavimena.github.io/matematicas-1-bgu/

El primer tema se organiza como una ruta de aprendizaje con diagnóstico, ocho lecciones, 24 preguntas de práctica y seis ejercicios de cierre. Cada lección enlaza los refuerzos concretos que necesita e incluye ejemplos explicados. Las notas del docente se conservan en `docs/metodologia-docente.md` y no se cargan en la página estudiantil. Los temas posteriores conservan su contenido preliminar.

## Vista local

Desde esta carpeta:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8766. Los datos también están integrados para abrir `index.html` directamente; KaTeX y las fuentes requieren conexión a internet.

## Contenido y mantenimiento

Editar `data/modules/t1-u1-tema1.json`. Después de cambiar cualquier JSON, ejecutar:

```sh
python3 scripts/sync-data.py
```

Esto regenera `js/data-store.js` y evita versiones diferentes entre la fuente y los datos utilizados por la página. La interfaz del primer tema está en `js/learning-path.js`.

Las respuestas permanecen únicamente en memoria durante la sesión: cambiar de lección conserva la práctica; recargar la página la reinicia. No se guardan identidades ni calificaciones. Consultar una solución registra práctica con apoyo; el progreso de lecciones cuenta tres respuestas correctas comprobadas sin consultar las soluciones. Este indicador no sustituye la explicación del estudiante ni la valoración del docente.
