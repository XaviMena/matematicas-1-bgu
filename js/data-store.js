// Generado por scripts/sync-data.py; editar los JSON fuente.
window.CURRICULUM_DATA = {
  "curso": "Matemáticas 1.º BGU",
  "periodo": "2026-2027",
  "textoReferencia": "Texto oficial MINEDUC (Año 2025-2026)",
  "ministerio": "Ministerio de Educación del Ecuador",
  "trimestres": [
    {
      "id": "trimestre-1",
      "numero": 1,
      "nombre": "Primer Trimestre",
      "descripcion": "Estructuras algebraicas de los números reales, productos notables, ecuaciones y medidas estadísticas de dispersión.",
      "activo": true,
      "unidades": [
        {
          "id": "unidad-1",
          "numero": 1,
          "titulo": "Números reales y expresiones algebraicas",
          "paginas": "12-19",
          "objetivos": [
            "O.G.M.1: Proponer soluciones creativas a situaciones concretas de la realidad nacional y mundial mediante la aplicación de las operaciones básicas de los diferentes conjuntos numéricos.",
            "O.G.M.2: Producir, comunicar y generalizar información de manera escrita, verbal, simbólica, gráfica y/o tecnológica mediante la aplicación de conocimientos matemáticos.",
            "O.G.M.6: Desarrollar la curiosidad y la creatividad a través del uso de herramientas matemáticas al momento de enfrentar y solucionar problemas de la realidad."
          ],
          "temas": [
            {
              "id": "t1-u1-tema1",
              "numero": "1.1",
              "titulo": "Números reales: comprender antes de memorizar",
              "paginas": "12-15",
              "archivo": "data/modules/t1-u1-tema1.json",
              "descripcion": "Diagnóstico, refuerzo de operaciones y fracciones, conjuntos numéricos, raíces, orden, propiedades, opuestos, inversos y distributiva."
            },
            {
              "id": "t1-u1-tema2",
              "numero": "1.2",
              "titulo": "Productos notables y factorización paso a paso",
              "paginas": "16-17",
              "archivo": "data/modules/t1-u1-tema2.json",
              "descripcion": "Diagnóstico y explicación paso a paso con ejemplos numéricos, distributiva, productos notables, factor común y factorización de cuadrados, trinomios y cubos."
            },
            {
              "id": "t1-u1-eval1",
              "numero": "1.3",
              "titulo": "Evaluación formativa: comprueba y refuerza",
              "paginas": "18-19",
              "archivo": "data/modules/t1-u1-eval.json",
              "tipo": "evaluacion",
              "descripcion": "Práctica por habilidades de los subtemas 1.1 y 1.2, con seis bloques, repaso dirigido, explicaciones y ocho ejercicios integradores."
            }
          ]
        },
        {
          "id": "t1-tema2",
          "numero": 2,
          "titulo": "Sistemas de ecuaciones lineales",
          "paginas": "20-25",
          "temas": [
            {
              "id": "t1-sistemas-bases",
              "numero": "2.1",
              "titulo": "Antes de resolver: ecuaciones y soluciones",
              "paginas": "20-25",
              "archivo": "data/modules/t1-sistemas-bases.json",
              "descripcion": "Empieza con una igualdad, explora pares de números y descubre por qué necesitamos dos condiciones."
            },
            {
              "id": "t1-sistemas-grafico",
              "numero": "2.2",
              "titulo": "Comprender con tablas y gráficos",
              "paginas": "20-25",
              "archivo": "data/modules/t1-sistemas-grafico.json",
              "descripcion": "Conecta las ecuaciones con tablas, puntos y rectas. Comprende qué significa una solución antes de calcularla."
            },
            {
              "id": "t1-sistemas-metodos",
              "numero": "2.3",
              "titulo": "Resolver con sustitución y eliminación",
              "paginas": "20-25",
              "archivo": "data/modules/t1-sistemas-metodos.json",
              "descripcion": "Aprende por qué funciona cada transformación. Comienza con enteros y avanza hacia fracciones y casos especiales."
            },
            {
              "id": "t1-sistemas-aplicaciones",
              "numero": "2.4",
              "titulo": "Aplicar, elegir y comprobar",
              "paginas": "20-25",
              "archivo": "data/modules/t1-sistemas-aplicaciones.json",
              "descripcion": "Define las cantidades, elige un método, comprueba y explica tu respuesta en una situación."
            },
            {
              "id": "t1-sistemas-eval",
              "numero": "2.5",
              "titulo": "Evaluación formativa: comprueba y refuerza",
              "paginas": "24-25",
              "archivo": "data/modules/t1-sistemas-eval.json",
              "tipo": "evaluacion",
              "descripcion": "Seis bloques de evaluación formativa: representación y comprobación, sustitución, eliminación, ninguna o infinitas soluciones y sistemas homogéneos. Incluye repaso dirigido y ocho ejercicios de cierre."
            }
          ]
        }
      ]
    },
    {
      "id": "trimestre-2",
      "numero": 2,
      "nombre": "Segundo Trimestre",
      "descripcion": "Funciones reales, funciones lineales y cuadráticas, modelado matemático y sistemas de ecuaciones lineales.",
      "activo": false,
      "unidades": [
        {
          "id": "unidad-2",
          "numero": 2,
          "titulo": "Funciones reales, modelos lineales y cuadráticos",
          "paginas": "36-70",
          "enConstruccion": true,
          "temas": []
        }
      ]
    },
    {
      "id": "trimestre-3",
      "numero": 3,
      "nombre": "Tercer Trimestre",
      "descripcion": "Vectores en el plano R², geometría analítica, trigonometría y probabilidad.",
      "activo": false,
      "unidades": [
        {
          "id": "unidad-3",
          "numero": 3,
          "titulo": "Geometría analítica, vectores y probabilidad",
          "paginas": "71-110",
          "enConstruccion": true,
          "temas": []
        }
      ]
    }
  ]
};
window.MODULES_DATA = {
  "data/modules/t1-sistemas-aplicaciones.json": {
    "id": "t1-sistemas-aplicaciones",
    "titulo": "Aplicar, elegir y comprobar",
    "temaNumero": "2.4",
    "unidadId": "t1-tema2",
    "unidadTitulo": "Tema 2 · Sistemas de ecuaciones lineales",
    "trimestre": 1,
    "paginasLibro": "20-25",
    "version": 1,
    "introduccion": "Define las cantidades, elige un método, comprueba y explica tu respuesta en una situación.",
    "objetivo": "Al terminar podrás: Definir incógnitas, traducir condiciones y responder con unidades; Comparar métodos y detectar errores de procedimiento.",
    "lecciones": [
      {
        "id": "modelar",
        "titulo": "Del enunciado a las dos ecuaciones",
        "tituloRuta": "Del enunciado a las dos ecuaciones",
        "descripcionRuta": "Definir incógnitas, traducir condiciones y responder con unidades.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Definir incógnitas, traducir condiciones y responder con unidades.",
        "paraQue": "Resolver compras y cantidades sin confundir lo que representa cada letra.",
        "bases": [
          "Sustitución, eliminación y lectura de condiciones."
        ],
        "explicacion": [
          "Antes de operar, escribe qué representa cada letra y sus unidades. Si x es el precio de un cuaderno en dólares e y el precio de un lápiz en dólares, no cambies después a cantidades de objetos.",
          "Cada dato aporta una condición. «Dos cuadernos y un lápiz cuestan 7 dólares» se escribe $2x+y=7$. «Un cuaderno y un lápiz cuestan 4 dólares» se escribe $x+y=4$.",
          "Elige un método mirando los coeficientes. Aquí restar la segunda ecuación a la primera elimina y directamente. El cálculo da x=3 e y=1.",
          "Comprueba con los datos del enunciado y responde con una frase: cada cuaderno cuesta 3 dólares y cada lápiz, 1 dólar. Verifica también que los valores sean posibles en la situación."
        ],
        "ejemplo": "Dos cuadernos y un lápiz cuestan 7 dólares; un cuaderno y un lápiz cuestan 4 dólares. ¿Cuánto cuesta cada uno?",
        "pasos": [
          "Define x: precio del cuaderno; y: precio del lápiz. Ambas cantidades están en dólares.",
          "Plantea $2x+y=7$ y $x+y=4$. Resta miembro a miembro: $x=3$.",
          "Recupera $y=4-3=1$.",
          "Comprueba los pagos: $2(3)+1=7$ y $3+1=4$. Responde: cuaderno 3 dólares, lápiz 1 dólar."
        ],
        "preguntas": [
          {
            "pregunta": "x es el precio de una entrada adulta e y el de una infantil. Dos adultas y tres infantiles cuestan 18 dólares. ¿Qué ecuación corresponde?",
            "opciones": [
              "$3x+2y=18$",
              "$x+y=18$",
              "$2x+3y=18$"
            ],
            "correcta": 2,
            "pista": "Multiplica cada precio por su cantidad.",
            "explicacion": "Dos precios x más tres precios y dan el pago total: 2x+3y=18.",
            "errores": [
              "Intercambiaste las cantidades.",
              "Faltan las cantidades de entradas.",
              ""
            ]
          },
          {
            "pregunta": "Hay 10 entradas: x adultas e y infantiles. ¿Cómo expresas la cantidad total?",
            "opciones": [
              "$x+y=10$",
              "$2x+y=10$",
              "$xy=10$"
            ],
            "correcta": 0,
            "pista": "Suma las cantidades de entradas.",
            "explicacion": "Cada entrada cuenta una unidad: x+y=10.",
            "errores": [
              "",
              "No hay motivo para contar dos veces las adultas.",
              "Las cantidades se suman, no se multiplican."
            ]
          },
          {
            "pregunta": "Se venden 10 entradas: adultas a 3 dólares e infantiles a 1 dólar. Se recauda 18. ¿Cuántas son adultas e infantiles?",
            "opciones": [
              "6 adultas y 4 infantiles.",
              "4 adultas y 6 infantiles.",
              "5 adultas y 5 infantiles."
            ],
            "correcta": 1,
            "pista": "Usa x+y=10 y 3x+y=18; resta la primera de la segunda.",
            "explicacion": "$2x=8$, así x=4 e y=6. Se comprueba 4+6=10 y 3(4)+6=18.",
            "errores": [
              "Recaudarían 22 dólares.",
              "",
              "Recaudarían 20 dólares."
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-metodos",
            "leccion": "eliminacion",
            "titulo": "Eliminar una incógnita"
          }
        ],
        "actividad": {
          "solucion": "$3x+y=5$ y $x+y=3$. Restando: $2x=2$, $x=1$; $y=2$. Lápiz: 1 dólar; borrador: 2 dólares. Comprueba $3(1)+2=5$ y $1+2=3$.",
          "consigna": "Una compra de tres lápices y un borrador cuesta 5 dólares; un lápiz y un borrador cuestan 3. Define x e y como precios, escribe las ecuaciones y completa la respuesta con unidades."
        }
      },
      {
        "id": "elegir",
        "titulo": "Elegir, explicar y revisar",
        "tituloRuta": "Elegir, explicar y revisar",
        "descripcionRuta": "Comparar métodos y detectar errores de procedimiento.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Comparar métodos y detectar errores de procedimiento.",
        "paraQue": "Resolver de manera autónoma y justificar por qué la respuesta tiene sentido.",
        "bases": [
          "Los tres métodos y los tipos de solución."
        ],
        "explicacion": [
          "No hay un método obligatorio para todos los sistemas. El gráfico ayuda a interpretar y estimar. La sustitución resulta cómoda si una letra ya está despejada. La eliminación suele ahorrar pasos cuando hay coeficientes opuestos o fáciles de igualar.",
          "Para $y=2x+1$ y $x+y=7$, sustituir evita una transformación inicial. Para $3x+2y=12$ y $x-2y=0$, sumar cancela y directamente. Ambos métodos deben dar el mismo par que el cruce de las rectas.",
          "Revisar un error exige señalar el paso, no solo cambiar el resultado. Si alguien convierte $-(x-2)$ en $-x-2$, olvidó distribuir el signo negativo al segundo término. La expresión correcta es $-x+2$.",
          "Cuando el resultado sea una fracción, consérvala para comprobar con exactitud. Usa un decimal aproximado solo si la situación lo requiere y señala que es aproximado. Un resultado no entero puede ser válido para longitudes o precios, aunque no para contar personas."
        ],
        "ejemplo": "Resuelve $y=2x+1$ y $x+y=7$ y explica tu elección.",
        "pasos": [
          "Elijo sustitución porque y ya está despejada.",
          "Sustituye: $x+(2x+1)=7$; $3x=6$; $x=2$.",
          "Recupera $y=2(2)+1=5$.",
          "Comprueba: $5=2(2)+1$ y $2+5=7$. Respuesta: $(2,5)$."
        ],
        "preguntas": [
          {
            "pregunta": "En $y=3x-1$ y $x+y=7$, ¿qué método aprovecha inmediatamente la forma dada?",
            "opciones": [
              "Sustitución, porque y está despejada.",
              "Eliminación sin transformar, porque +y y +y son opuestos.",
              "Leer solo una recta."
            ],
            "correcta": 0,
            "pista": "Observa qué letra ya está sola.",
            "explicacion": "Puedes sustituir y por 3x−1 directamente. Otros métodos también pueden funcionar.",
            "errores": [
              "",
              "+y y +y no son opuestos.",
              "Una sola recta no reúne las dos condiciones."
            ]
          },
          {
            "pregunta": "¿Cuál es el error en $x-(1-x)=x-1-x$?",
            "opciones": [
              "Falta multiplicar x por 2.",
              "El último término debe ser +x.",
              "No hay error."
            ],
            "correcta": 1,
            "pista": "El signo menos multiplica todo el paréntesis.",
            "explicacion": "$-(1-x)=-1+x$, por eso $x-(1-x)=x-1+x$.",
            "errores": [
              "El problema está en distribuir el signo.",
              "",
              "Menos por menos da más."
            ]
          },
          {
            "pregunta": "Resuelve $x+y=2$ y $x-y=1$.",
            "opciones": [
              "$(1,1)$",
              "$(2,0)$",
              "$(3/2,1/2)$"
            ],
            "correcta": 2,
            "pista": "Suma: 2x=3.",
            "explicacion": "$x=3/2$ e $y=2-3/2=1/2$; suma 2, diferencia 1.",
            "errores": [
              "La diferencia sería 0.",
              "La diferencia sería 2.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [
          "modelar"
        ],
        "repasos": [],
        "actividad": {
          "solucion": "La eliminación es cómoda: +y y −y son opuestos. Suma: $3x=9$, $x=3$; $y=1$. Verifica $6+1=7$ y $3-1=2$.",
          "consigna": "Para $2x+y=7$ y $x-y=2$, escribe qué método usarías y por qué. Resuelve y verifica sin mirar la comparación."
        }
      }
    ],
    "diagnostico": [
      {
        "pregunta": "Si x es el número de cuadernos a 2 dólares cada uno, el costo de los cuadernos es…",
        "opciones": [
          "x+2",
          "2x",
          "x/2"
        ],
        "correcta": 1,
        "pista": "Precio por cantidad.",
        "explicacion": "Multiplica 2 dólares por x cuadernos.",
        "errores": [
          "Sumar precio y cantidad no da el costo.",
          "",
          "Dividir no calcula el costo total."
        ],
        "leccion": "modelar"
      },
      {
        "pregunta": "Para $x+y=9$ y $x-y=3$, al sumar se obtiene…",
        "opciones": [
          "2x=12",
          "2y=12",
          "2x=6"
        ],
        "correcta": 0,
        "pista": "Suma miembros izquierdos y derechos.",
        "explicacion": "y−y=0; x+x=2x; 9+3=12.",
        "errores": [
          "",
          "Se elimina y, no x.",
          "Aquí sumas, no restas."
        ],
        "leccion": "elegir"
      },
      {
        "pregunta": "Para confirmar una respuesta debes…",
        "opciones": [
          "elegir el par más sencillo.",
          "redondear todas las fracciones.",
          "comprobar ecuaciones, unidades y contexto."
        ],
        "correcta": 2,
        "pista": "Una respuesta debe cumplir los datos y la situación.",
        "explicacion": "La comprobación algebraica y la interpretación completan la solución.",
        "errores": [
          "La sencillez no garantiza que cumpla el sistema.",
          "Redondear puede alterar las igualdades.",
          ""
        ],
        "leccion": "elegir"
      }
    ],
    "cierre": [
      {
        "pregunta": "Dos jugos y un sándwich cuestan 8 dólares; un jugo y un sándwich cuestan 5. ¿Cuánto cuesta cada uno?",
        "opciones": [
          "Jugo 3; sándwich 2.",
          "Jugo 2; sándwich 3.",
          "Jugo 4; sándwich 1."
        ],
        "correcta": 0,
        "pista": "Define x: precio del jugo, y: precio del sándwich; resta las ecuaciones.",
        "explicacion": "$2x+y=8$ y $x+y=5$ dan x=3, y=2. Se comprueba 6+2=8 y 3+2=5.",
        "errores": [
          "",
          "Dos jugos y un sándwich costarían 7.",
          "Dos jugos y un sándwich costarían 9."
        ],
        "leccion": "modelar"
      },
      {
        "pregunta": "Si $y=x+4$ y $2x+y=10$, la solución es…",
        "opciones": [
          "(6,2)",
          "(2,6)",
          "(3,7)"
        ],
        "correcta": 1,
        "pista": "Sustituye la expresión de y.",
        "explicacion": "$2x+x+4=10$ da x=2; y=6.",
        "errores": [
          "No cumple y=x+4.",
          "",
          "2(3)+7=13."
        ],
        "leccion": "elegir"
      },
      {
        "pregunta": "Al contar personas, el sistema da x=2.5. ¿Qué haces?",
        "opciones": [
          "Redondear a 3 sin comprobar.",
          "Decir que hay 2.5 personas.",
          "Revisar datos y modelo; no es una cantidad posible de personas."
        ],
        "correcta": 2,
        "pista": "El contexto impone cantidades enteras.",
        "explicacion": "Una solución real puede ser incompatible con la cantidad que representa.",
        "errores": [
          "Redondear puede dejar de cumplir los datos.",
          "Una cantidad de personas no puede ser fraccionaria.",
          ""
        ],
        "leccion": "modelar"
      }
    ],
    "cierreIntroduccion": "Resuelve primero en tu cuaderno. Comprueba cada par en las dos ecuaciones y explica el procedimiento antes de consultar la respuesta.",
    "retosCierre": [
      "Inventa un problema con dos condiciones, define las letras y comprueba su solución.",
      "Resuelve x+y=5 y 2x+3y=12; justifica tu método y comprueba ambas condiciones."
    ],
    "puenteAnterior": {
      "titulo": "Conecta con el subtema anterior",
      "descripcion": "Repasa la base que necesitas. Las respuestas se conservan durante esta sesión.",
      "tema": "t1-sistemas-metodos",
      "leccion": "casos"
    }
  },
  "data/modules/t1-sistemas-bases.json": {
    "id": "t1-sistemas-bases",
    "titulo": "Antes de resolver: ecuaciones y soluciones",
    "temaNumero": "2.1",
    "unidadId": "t1-tema2",
    "unidadTitulo": "Tema 2 · Sistemas de ecuaciones lineales",
    "trimestre": 1,
    "paginasLibro": "20-25",
    "version": 1,
    "introduccion": "Empieza con una igualdad, explora pares de números y descubre por qué necesitamos dos condiciones.",
    "objetivo": "Al terminar podrás: Resolver una ecuación sencilla conservando la igualdad; Leer un par ordenado y comprobar una ecuación con dos incógnitas; Reconocer y verificar la solución de un sistema.",
    "lecciones": [
      {
        "id": "igualdad",
        "titulo": "Una igualdad que se mantiene",
        "tituloRuta": "Una igualdad que se mantiene",
        "descripcionRuta": "Resolver una ecuación sencilla conservando la igualdad.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Resolver una ecuación sencilla conservando la igualdad.",
        "paraQue": "Preparar el despeje sin memorizar cambios de signo.",
        "bases": [
          "Deshacer una resta en los dos miembros y dividir entre un número positivo."
        ],
        "verificacion": {
          "titulo": "Comprueba esta base",
          "intro": "Resuelve estas dos ecuaciones. Son operaciones que ya debes poder hacer. Si salen bien, seguimos con la igualdad y no las volvemos a explicar.",
          "espera": "La igualdad sigue cuando las dos respuestas estén correctas.",
          "lista": "Deshacer una resta y dividir entre un positivo quedaron comprobadas. Seguimos con la igualdad.",
          "preguntas": [
            {
              "pregunta": "Resuelve $x-3=5$.",
              "opciones": [
                "$x=2$",
                "$x=8$",
                "$x=15$"
              ],
              "correcta": 1,
              "reparacion": "Suma 3 en los dos miembros: $x-3+3=5+3$, así $x=8$.",
              "repaso": {
                "tema": "t1-u1-tema1",
                "leccion": "operaciones",
                "titulo": "Signos y operaciones"
              }
            },
            {
              "pregunta": "Resuelve $2x=10$.",
              "opciones": [
                "$x=5$",
                "$x=8$",
                "$x=20$"
              ],
              "correcta": 0,
              "reparacion": "Divide los dos miembros entre 2: de $2x=10$ queda $x=5$.",
              "repaso": {
                "tema": "t1-u1-tema1",
                "leccion": "operaciones",
                "titulo": "Signos y operaciones"
              }
            }
          ]
        },
        "explicacion": [
          "Una ecuación afirma que dos cantidades son iguales. La letra representa el número que falta.",
          "La igualdad se conserva cuando haces la misma operación en los dos miembros. Imagina una balanza: si agregas o quitas lo mismo de los dos lados, sigue equilibrada. Un término no «salta» de un lado al otro.",
          "Despejar es dejar la letra sola. En el ejemplo se usan juntas las dos bases que acabas de comprobar: deshacer una resta y dividir entre un positivo.",
          "Al final sustituye el valor en la ecuación original. Una igualdad verdadera confirma el resultado."
        ],
        "ejemplo": "Resuelve $3x-2=10$.",
        "pasos": [
          "Suma 2 a ambos miembros: $3x-2+2=10+2$.",
          "Queda $3x=12$. Divide ambos miembros entre 3: $x=4$.",
          "Comprueba en la original: $3(4)-2=12-2=10$."
        ],
        "preguntas": [
          {
            "pregunta": "Resuelve $x+4=9$.",
            "opciones": [
              "$x=13$",
              "$x=5$",
              "$x=-5$"
            ],
            "correcta": 1,
            "pista": "Resta 4 a los dos miembros.",
            "explicacion": "$x=9-4=5$; $5+4=9$.",
            "errores": [
              "Sumar 4 no deshace el +4.",
              "",
              "9−4 es positivo."
            ]
          },
          {
            "pregunta": "Resuelve $-2x=6$.",
            "opciones": [
              "$x=-3$",
              "$x=3$",
              "$x=-4$"
            ],
            "correcta": 0,
            "pista": "Divide ambos miembros entre −2.",
            "explicacion": "$x=6/(-2)=-3$; $(-2)(-3)=6$.",
            "errores": [
              "",
              "Un positivo dividido por un negativo es negativo.",
              "Aquí debes dividir, no restar."
            ]
          },
          {
            "pregunta": "Resuelve $2(x+1)=8$.",
            "opciones": [
              "$x=4$",
              "$x=5$",
              "$x=3$"
            ],
            "correcta": 2,
            "pista": "Divide ambos miembros entre 2 antes de restar 1.",
            "explicacion": "$x+1=4$, luego $x=3$; $2(3+1)=8$.",
            "errores": [
              "Falta restar 1.",
              "Debes restar 1, no sumarlo.",
              ""
            ]
          }
        ],
        "practicaNota": "La primera ecuación usa números positivos. Después vienen un coeficiente negativo y un paréntesis.",
        "apoyo": "Si el paréntesis se complica, abre la distributiva.",
        "ejemplosExtra": [
          {
            "cuando": "entero",
            "aviso": "El ejemplo con fracciones aparece cuando resuelves la ecuación entera de la práctica: $x+4=9$.",
            "problema": "Resuelve $\\frac{x}{2}+1=\\frac{5}{2}$.",
            "pasos": [
              "Resta 1 en ambos miembros: $\\frac{x}{2}=\\frac{5}{2}-\\frac{2}{2}=\\frac{3}{2}$.",
              "Multiplica ambos miembros por 2: $x=3$.",
              "Comprueba: $3/2+1=5/2$."
            ]
          }
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-u1-tema1",
            "leccion": "operaciones",
            "titulo": "Signos y operaciones"
          },
          {
            "tema": "t1-u1-tema1",
            "leccion": "distributiva",
            "titulo": "La distributiva"
          }
        ],
        "actividad": {
          "solucion": "Suma 3: $2x=10$; divide entre 2: $x=5$. Comprueba $2(5)-3=7$.",
          "consigna": "Completa sin saltar pasos: $2x-3=7$. Suma ___ a ambos miembros: $2x=\\_\\_\\_$. Después divide entre ___ y comprueba."
        }
      },
      {
        "id": "pares",
        "titulo": "Dos cantidades, una condición",
        "tituloRuta": "Dos cantidades, una condición",
        "descripcionRuta": "Leer un par ordenado y comprobar una ecuación con dos incógnitas.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Leer un par ordenado y comprobar una ecuación con dos incógnitas.",
        "paraQue": "Entender qué representa cada letra y por qué una condición puede admitir varias respuestas.",
        "bases": [
          "Sustituir un número por una letra y resolver operaciones."
        ],
        "explicacion": [
          "En una compra, $x$ puede ser el número de cuadernos y $y$ el de lápices. Si compras cinco artículos, $x+y=5$. Todavía no sabemos cuántos son de cada tipo: podrían ser 2 y 3, o 1 y 4.",
          "Escribimos las cantidades como un par ordenado $(x,y)$. El primer número corresponde siempre a x y el segundo a y. El par $(2,3)$ significa $x=2$ y $y=3$; invertir el orden puede cambiar la respuesta.",
          "Para comprobar un par, sustituye las dos letras. En $2x+y=7$, el par $(2,3)$ sirve porque $2(2)+3=7$. El par $(3,2)$ no sirve: $2(3)+2=8$.",
          "Una ecuación lineal con dos incógnitas tiene la forma $ax+by=c$, donde a, b y c son números y a y b no son ambos cero. Las letras no están elevadas al cuadrado ni multiplicadas entre sí. En los reales, una sola ecuación así tiene infinitos pares solución. En una compra, además pedimos cantidades enteras no negativas."
        ],
        "ejemplo": "Encuentra tres pares para $x+y=5$.",
        "pasos": [
          "Despeja y restando x a ambos lados: $y=5-x$.",
          "Si $x=0$, $y=5$; si $x=2$, $y=3$; si $x=5$, $y=0$.",
          "Obtienes $(0,5)$, $(2,3)$ y $(5,0)$. Todos cumplen la misma condición."
        ],
        "preguntas": [
          {
            "pregunta": "¿Qué significa el par $(4,1)$?",
            "opciones": [
              "$x=1,\\ y=4$",
              "$x=4,\\ y=1$",
              "$x=4,\\ y=4$"
            ],
            "correcta": 1,
            "pista": "El orden es (x,y).",
            "explicacion": "El primer número es x y el segundo es y.",
            "errores": [
              "Invertiste el orden.",
              "",
              "La segunda coordenada es 1."
            ]
          },
          {
            "pregunta": "¿Qué par cumple $2x+y=8$?",
            "opciones": [
              "$(2,4)$",
              "$(4,2)$",
              "$(1,5)$"
            ],
            "correcta": 0,
            "pista": "Multiplica la primera coordenada por 2 y suma la segunda.",
            "explicacion": "$2(2)+4=8$. Los otros pares dan 10 y 7.",
            "errores": [
              "",
              "2(4)+2=10, no 8.",
              "2(1)+5=7, no 8."
            ]
          },
          {
            "pregunta": "¿Cuál es lineal?",
            "opciones": [
              "$x^2+y=5$",
              "$xy=5$",
              "$3x-2y=5$"
            ],
            "correcta": 2,
            "pista": "Las letras aparecen solo a la primera potencia y no se multiplican entre sí.",
            "explicacion": "$3x-2y=5$ tiene la forma ax+by=c.",
            "errores": [
              "x está al cuadrado.",
              "Hay un producto de las incógnitas.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [
          "igualdad"
        ],
        "repasos": [],
        "actividad": {
          "solucion": "Despeja $y=6-2x$. Los pares son $(0,6)$, $(1,4)$ y $(2,2)$. Comprueba cada uno.",
          "consigna": "Para $2x+y=6$, completa la tabla en tu cuaderno: si x es 0, 1 y 2, ¿qué valores toma y? Escribe los tres pares en el orden correcto."
        }
      },
      {
        "id": "comun",
        "titulo": "Dos condiciones al mismo tiempo",
        "tituloRuta": "Dos condiciones al mismo tiempo",
        "descripcionRuta": "Reconocer y verificar la solución de un sistema.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Reconocer y verificar la solución de un sistema.",
        "paraQue": "Pasar de varias posibilidades a un par que cumpla todas las condiciones.",
        "bases": [
          "Pares ordenados y sustitución en una ecuación."
        ],
        "explicacion": [
          "Ahora sabemos que hay cinco artículos y que cada cuaderno cuesta 2 dólares y cada lápiz 1 dólar. El total pagado es 7 dólares. Las condiciones son $x+y=5$ y $2x+y=7$.",
          "Un sistema reúne ecuaciones que deben cumplirse al mismo tiempo y con los mismos valores de las letras. No vale usar un par para la primera y otro para la segunda.",
          "Prueba $(2,3)$: en la primera, $2+3=5$; en la segunda, $2(2)+3=7$. Cumple ambas: es una solución del sistema.",
          "El par $(1,4)$ cumple la cantidad de artículos, pero cuesta 6 dólares. Cumplir una sola ecuación no basta. Antes de aprender métodos, aprende a comprobar candidatos."
        ],
        "ejemplo": "Comprueba $(3,2)$ en $x+y=5$ y $x-y=1$.",
        "pasos": [
          "Primera condición: $3+2=5$; se cumple.",
          "Segunda condición: $3-2=1$; se cumple.",
          "Por tanto, $(3,2)$ resuelve el sistema. Escribe ambas comprobaciones, no solo el resultado."
        ],
        "preguntas": [
          {
            "pregunta": "¿Qué par resuelve $x+y=6$ y $x-y=2$?",
            "opciones": [
              "$(3,3)$",
              "$(2,4)$",
              "$(4,2)$"
            ],
            "correcta": 2,
            "pista": "Comprueba suma y diferencia.",
            "explicacion": "$4+2=6$ y $4-2=2$.",
            "errores": [
              "3−3=0, no 2.",
              "2−4=−2, no 2.",
              ""
            ]
          },
          {
            "pregunta": "$(1,4)$ cumple $x+y=5$. ¿Resuelve también el sistema con $2x+y=7$?",
            "opciones": [
              "Sí, basta cumplir una ecuación.",
              "No, la segunda da 6.",
              "No, porque sus coordenadas son distintas."
            ],
            "correcta": 1,
            "pista": "Sustituye el mismo par en la segunda.",
            "explicacion": "$2(1)+4=6\\ne7$. Debe cumplir ambas.",
            "errores": [
              "Hace falta cumplir las dos.",
              "",
              "Las coordenadas pueden ser distintas; el problema es la segunda igualdad."
            ]
          },
          {
            "pregunta": "Si un sistema modela cantidades de objetos, una solución algebraica de $x=-2$ exige…",
            "opciones": [
              "revisar si el modelo tiene sentido en el contexto.",
              "aceptar −2 objetos sin discutirlo.",
              "cambiar −2 por 2."
            ],
            "correcta": 0,
            "pista": "Distingue una solución real de una cantidad posible de objetos.",
            "explicacion": "Las cantidades de objetos deben ser enteras no negativas; una solución negativa no es válida para ese contexto.",
            "errores": [
              "",
              "Una cantidad negativa de objetos no cumple el contexto.",
              "Cambiar el signo destruye las igualdades."
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [
          "pares"
        ],
        "repasos": [],
        "actividad": {
          "solucion": "$2+4=6$ y $2(2)+4=8$. El mismo par cumple ambas condiciones.",
          "consigna": "Un compañero propone (2,4) para $x+y=6$ y $2x+y=8$. Escribe las dos comprobaciones antes de decidir."
        }
      }
    ],
    "diagnostico": [
      {
        "pregunta": "¿Qué operación deshace $x-3=5$?",
        "opciones": [
          "Restar 3.",
          "Sumar 3 a ambos miembros.",
          "Dividir entre 3."
        ],
        "correcta": 1,
        "pista": "Piensa cómo deshacer una resta.",
        "explicacion": "Sumar 3 conserva la igualdad y da x=8.",
        "errores": [
          "Restar otra vez aleja el despeje.",
          "",
          "La operación que afecta a x es una resta."
        ],
        "leccion": "igualdad"
      },
      {
        "pregunta": "Si $x=2$ e $y=1$, ¿cuánto es $3x+y$?",
        "opciones": [
          "7",
          "6",
          "9"
        ],
        "correcta": 0,
        "pista": "Sustituye ambas letras.",
        "explicacion": "$3(2)+1=7$.",
        "errores": [
          "",
          "Falta sumar y.",
          "Se pide 3x+y, no 3(x+y)."
        ],
        "leccion": "pares"
      },
      {
        "pregunta": "Un sistema exige…",
        "opciones": [
          "cumplir al menos una ecuación.",
          "usar valores distintos en cada ecuación.",
          "cumplir todas con los mismos valores."
        ],
        "correcta": 2,
        "pista": "Las condiciones se cumplen al mismo tiempo.",
        "explicacion": "El mismo par debe satisfacer todas las ecuaciones.",
        "errores": [
          "Una condición no basta.",
          "Las letras mantienen sus valores.",
          ""
        ],
        "leccion": "comun"
      }
    ],
    "cierre": [
      {
        "pregunta": "Resuelve $4x+1=13$.",
        "opciones": [
          "x=3",
          "x=4",
          "x=12"
        ],
        "correcta": 0,
        "pista": "Resta 1 y divide entre 4.",
        "explicacion": "$4x=12$, así x=3; 4(3)+1=13.",
        "errores": [
          "",
          "Falta restar 1 antes de dividir.",
          "Falta dividir entre 4."
        ],
        "leccion": "igualdad"
      },
      {
        "pregunta": "¿Qué par cumple $3x+y=10$?",
        "opciones": [
          "(1,3)",
          "(2,4)",
          "(4,2)"
        ],
        "correcta": 1,
        "pista": "Evalúa cada par.",
        "explicacion": "$3(2)+4=10$.",
        "errores": [
          "3(1)+3=6.",
          "",
          "3(4)+2=14."
        ],
        "leccion": "pares"
      },
      {
        "pregunta": "¿Qué par satisface $x+y=7$ y $x-y=3$?",
        "opciones": [
          "(4,3)",
          "(3,4)",
          "(5,2)"
        ],
        "correcta": 2,
        "pista": "Comprueba las dos condiciones.",
        "explicacion": "$5+2=7$ y $5-2=3$.",
        "errores": [
          "4−3=1.",
          "3−4=−1.",
          ""
        ],
        "leccion": "comun"
      }
    ],
    "cierreIntroduccion": "Resuelve primero en tu cuaderno. Comprueba cada par en las dos ecuaciones y explica el procedimiento antes de consultar la respuesta.",
    "retosCierre": [
      "Inventa una ecuación con dos incógnitas y escribe dos pares que la cumplan.",
      "Explica por qué cumplir una sola ecuación no basta para resolver un sistema."
    ]
  },
  "data/modules/t1-sistemas-eval.json": {
    "id": "t1-sistemas-eval",
    "titulo": "Evaluación formativa: comprueba y refuerza",
    "temaNumero": "2.5",
    "unidadId": "t1-tema2",
    "unidadTitulo": "Tema 2 · Sistemas de ecuaciones lineales",
    "trimestre": 1,
    "paginasLibro": "24-25",
    "version": 1,
    "tipo": "evaluacion",
    "introduccion": "Pon en práctica el tema 2 por habilidades: representar, resolver, clasificar y explicar. Si aparece una dificultad, vuelve al repaso indicado y prueba otra vez.",
    "objetivo": "Reconocer qué comprendes y qué necesitas reforzar sobre sistemas de ecuaciones lineales. El libro orienta las habilidades; los ejercicios están adaptados a nuestra ruta. Esta evaluación no asigna una nota ni tiene tiempo límite.",
    "lecciones": [
      {
        "id": "representar",
        "titulo": "1. Comprueba y representa",
        "tituloRuta": "1. Comprueba y representa",
        "descripcionRuta": "Conectar un par solución con las dos ecuaciones y el cruce de sus rectas.",
        "fase": "COMPRUEBA Y REFUERZA",
        "meta": "Conectar un par solución con las dos ecuaciones y el cruce de sus rectas.",
        "paraQue": "Reconocer lo que ya puedes explicar y elegir un repaso concreto cuando lo necesites.",
        "bases": [
          "Las ideas de los subtemas 2.1 a 2.4."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-grafico",
            "leccion": "interseccion",
            "titulo": "Tablas, rectas y solución común"
          }
        ],
        "explicacion": [
          "Intenta primero los ejercicios en tu cuaderno. Usa el ejemplo acompañado o el enlace de repaso si necesitas ayuda. Escribe el procedimiento y comprueba la respuesta en las dos ecuaciones originales."
        ],
        "ejemplo": "Comprueba y representa $x+y=6$ y $x-y=2$.",
        "pasos": [
          "Para la primera recta puedes usar (0,6) y (6,0). Para la segunda, despeja $y=x-2$ y usa (0,−2) y (2,0).",
          "Con una escala uniforme, traza ambas rectas en el mismo plano. El cruce se encuentra en (4,2).",
          "Comprueba: $4+2=6$ y $4-2=2$. El mismo par cumple ambas condiciones."
        ],
        "preguntas": [
          {
            "pregunta": "¿Qué par resuelve $x+y=8$ y $x-y=4$?",
            "opciones": [
              "$(6,2)$",
              "$(2,6)$",
              "$(4,4)$"
            ],
            "correcta": 0,
            "pista": "Comprueba suma y diferencia.",
            "explicacion": "$6+2=8$ y $6-2=4$; por tanto, $(6,2)$ cumple las dos ecuaciones.",
            "errores": [
              "",
              "2−6=−4, no 4.",
              "4−4=0, no 4."
            ]
          },
          {
            "pregunta": "Para trazar $y=2x-2$, ¿qué dos puntos puedes usar?",
            "opciones": [
              "$(0,2)$ y $(1,0)$",
              "$(0,-2)$ y $(1,0)$",
              "$(0,-2)$ y $(1,2)$"
            ],
            "correcta": 1,
            "pista": "Sustituye las coordenadas x=0 y x=1.",
            "explicacion": "Para x=0, y=−2; para x=1, y=0. Ambos puntos pertenecen a la recta.",
            "errores": [
              "Cuando x=0, y es −2.",
              "",
              "Cuando x=1, y=0, no 2."
            ]
          },
          {
            "pregunta": "Un gráfico sugiere que el cruce es $(2,4)$. ¿Qué confirma que resuelve $x+y=6$ y $2x+y=8$?",
            "opciones": [
              "Solo que 2+4=6.",
              "Solo que las rectas parecen cruzarse.",
              "Que $2+4=6$ y $2(2)+4=8$."
            ],
            "correcta": 2,
            "pista": "Comprueba el par en ambas condiciones.",
            "explicacion": "Las dos igualdades se cumplen exactamente; el dibujo orienta y la sustitución confirma.",
            "errores": [
              "Una condición sola no basta.",
              "Una lectura visual puede ser aproximada.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "actividad": {
          "consigna": "Dibuja $x+y=3$ y $y=x+1$. Lee el cruce y escribe las dos comprobaciones antes de comparar.",
          "solucion": "Primera recta: (0,3) y (3,0). Segunda: (0,1) y (1,2). Se cruzan en (1,2): $1+2=3$ y $2=1+1$."
        }
      },
      {
        "id": "sustituir",
        "titulo": "2. Resuelve por sustitución",
        "tituloRuta": "2. Resuelve por sustitución",
        "descripcionRuta": "Sustituir una expresión completa y conservar signos y fracciones.",
        "fase": "COMPRUEBA Y REFUERZA",
        "meta": "Sustituir una expresión completa y conservar signos y fracciones.",
        "paraQue": "Reconocer lo que ya puedes explicar y elegir un repaso concreto cuando lo necesites.",
        "bases": [
          "Las ideas de los subtemas 2.1 a 2.4."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-metodos",
            "leccion": "sustitucion",
            "titulo": "Sustituir cantidades equivalentes"
          }
        ],
        "explicacion": [
          "Intenta primero los ejercicios en tu cuaderno. Usa el ejemplo acompañado o el enlace de repaso si necesitas ayuda. Escribe el procedimiento y comprueba la respuesta en las dos ecuaciones originales."
        ],
        "ejemplo": "Resuelve $y=2x-1$ y $x+y=8$.",
        "pasos": [
          "Sustituye y en la segunda: $x+(2x-1)=8$.",
          "Reúne: $3x-1=8$. Suma 1 a ambos miembros: $3x=9$, luego $x=3$.",
          "Recupera $y=2(3)-1=5$. Comprueba $5=2(3)-1$ y $3+5=8$."
        ],
        "preguntas": [
          {
            "pregunta": "Si $x=4-y$, ¿cómo sustituyes en $2x-y=5$?",
            "opciones": [
              "$8-y-y=5$",
              "$2(4-y)-y=5$",
              "$2(4+y)-y=5$"
            ],
            "correcta": 1,
            "pista": "Reemplaza x por la expresión completa entre paréntesis.",
            "explicacion": "$2x-y=5$ se transforma en $2(4-y)-y=5$. Al distribuir queda $8-3y=5$.",
            "errores": [
              "El 2 debe multiplicar también el término −y.",
              "",
              "El signo dentro de 4−y debe conservarse."
            ]
          },
          {
            "pregunta": "Resuelve $y=x+3$ y $2x+y=9$.",
            "opciones": [
              "$(2,5)$",
              "$(5,2)$",
              "$(3,6)$"
            ],
            "correcta": 0,
            "pista": "Sustituye y por x+3.",
            "explicacion": "$2x+(x+3)=9$, $3x=6$, $x=2$; $y=5$. Comprueba $5=2+3$ y $2(2)+5=9$.",
            "errores": [
              "",
              "No cumple y=x+3.",
              "2(3)+6=12, no 9."
            ]
          },
          {
            "pregunta": "Resuelve $x+y=3$ y $x-y=2$.",
            "opciones": [
              "$(2,1)$",
              "$(1/2,5/2)$",
              "$(5/2,1/2)$"
            ],
            "correcta": 2,
            "pista": "Despeja y=3−x y cuida el signo de x−(3−x).",
            "explicacion": "$x-(3-x)=2$; $2x-3=2$, así $x=5/2$. Luego $y=3-5/2=1/2$. Comprueba $5/2+1/2=3$ y $5/2-1/2=2$.",
            "errores": [
              "La diferencia es 1, no 2.",
              "Invertiste los valores; su diferencia es −2.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "actividad": {
          "consigna": "Completa en tu cuaderno: de $y=5-x$ y $3x-y=3$, obtienes $3x-(\\_\\_\\_)=3$. Resuelve y verifica.",
          "solucion": "$3x-(5-x)=3$, $4x-5=3$, $x=2$; $y=3$. Comprobación: $3=5-2$ y $3(2)-3=3$."
        }
      },
      {
        "id": "eliminar",
        "titulo": "3. Resuelve por eliminación",
        "tituloRuta": "3. Resuelve por eliminación",
        "descripcionRuta": "Preparar coeficientes opuestos multiplicando las ecuaciones completas.",
        "fase": "COMPRUEBA Y REFUERZA",
        "meta": "Preparar coeficientes opuestos multiplicando las ecuaciones completas.",
        "paraQue": "Reconocer lo que ya puedes explicar y elegir un repaso concreto cuando lo necesites.",
        "bases": [
          "Las ideas de los subtemas 2.1 a 2.4."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-metodos",
            "leccion": "multiplicar",
            "titulo": "Preparar términos opuestos"
          },
          {
            "tema": "t1-sistemas-aplicaciones",
            "leccion": "modelar",
            "titulo": "Definir cantidades y plantear problemas"
          }
        ],
        "explicacion": [
          "Intenta primero los ejercicios en tu cuaderno. Usa el ejemplo acompañado o el enlace de repaso si necesitas ayuda. Escribe el procedimiento y comprueba la respuesta en las dos ecuaciones originales."
        ],
        "ejemplo": "Resuelve $x+2y=9$ y $2x-y=3$.",
        "pasos": [
          "Multiplica toda la segunda ecuación por 2: $4x-2y=6$.",
          "Suma con la primera: $5x=15$, así $x=3$.",
          "En la primera original: $3+2y=9$, $y=3$. Comprueba $3+2(3)=9$ y $2(3)-3=3$."
        ],
        "preguntas": [
          {
            "pregunta": "Para eliminar y en $2x+3y=12$ y $x-y=1$, puedes…",
            "opciones": [
              "multiplicar la segunda ecuación completa por 3 y sumar.",
              "multiplicar solo −y por 3 y sumar.",
              "sumar sin transformar y decir que y desaparece."
            ],
            "correcta": 0,
            "pista": "Busca +3y y −3y.",
            "explicacion": "La segunda se convierte en $3x-3y=3$. Al sumarla con la primera se obtiene $5x=15$.",
            "errores": [
              "",
              "Multiplicar solo un término cambia las soluciones.",
              "3y−y=2y; aún queda y."
            ]
          },
          {
            "pregunta": "Resuelve $3x+2y=16$ y $x-2y=0$.",
            "opciones": [
              "$(2,5)$",
              "$(4,2)$",
              "$(3,3)$"
            ],
            "correcta": 1,
            "pista": "La suma elimina y directamente.",
            "explicacion": "$4x=16$; $x=4$. En la segunda, $4-2y=0$, así $y=2$. Comprueba $12+4=16$ y $4-4=0$.",
            "errores": [
              "2−10 no es 0.",
              "",
              "3−6 no es 0."
            ]
          },
          {
            "pregunta": "Resuelve $2x+3y=13$ y $3x-2y=0$.",
            "opciones": [
              "$(3,2)$",
              "$(1,1)$",
              "$(2,3)$"
            ],
            "correcta": 2,
            "pista": "Multiplica la primera por 2 y la segunda por 3.",
            "explicacion": "Obtienes $4x+6y=26$ y $9x-6y=0$. Suma: $13x=26$, $x=2$. Recupera $y=3$. Comprueba $4+9=13$ y $6-6=0$.",
            "errores": [
              "3(3)−2(2)=5, no 0.",
              "2+3=5, no 13.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "actividad": {
          "consigna": "Multiplica $2x-y=4$ por −2. Explica qué ocurre con cada término y con el miembro derecho.",
          "solucion": "$(-2)(2x-y)=(-2)(4)$ se convierte en $-4x+2y=-8$. El signo de −y se vuelve positivo y el 4 también se multiplica."
        }
      },
      {
        "id": "ninguna",
        "titulo": "4. Reconoce cuándo no hay solución",
        "tituloRuta": "4. Reconoce cuándo no hay solución",
        "descripcionRuta": "Interpretar una contradicción y relacionarla con rectas paralelas.",
        "fase": "COMPRUEBA Y REFUERZA",
        "meta": "Interpretar una contradicción y relacionarla con rectas paralelas.",
        "paraQue": "Reconocer lo que ya puedes explicar y elegir un repaso concreto cuando lo necesites.",
        "bases": [
          "Las ideas de los subtemas 2.1 a 2.4."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-metodos",
            "leccion": "casos",
            "titulo": "Ninguna o infinitas soluciones"
          }
        ],
        "explicacion": [
          "Intenta primero los ejercicios en tu cuaderno. Usa el ejemplo acompañado o el enlace de repaso si necesitas ayuda. Escribe el procedimiento y comprueba la respuesta en las dos ecuaciones originales."
        ],
        "ejemplo": "Clasifica $x+y=2$ y $2x+2y=5$.",
        "pasos": [
          "Multiplica la primera por −2: $-2x-2y=-4$.",
          "Al sumar con la segunda queda $0=1$. Es imposible para cualquier par de números.",
          "No hay solución: la segunda exige que el doble de x+y sea 5, pero la primera fija ese doble en 4. Las rectas son paralelas distintas."
        ],
        "preguntas": [
          {
            "pregunta": "Clasifica $x-y=3$ y $2x-2y=8$.",
            "opciones": [
              "Una solución: (3,0).",
              "Ninguna solución.",
              "Infinitas soluciones."
            ],
            "correcta": 1,
            "pista": "Resta dos veces la primera de la segunda.",
            "explicacion": "Se obtiene $0=2$, una contradicción. Por tanto, no existe un par que cumpla ambas.",
            "errores": [
              "(3,0) no cumple la segunda.",
              "",
              "El miembro derecho de la segunda debería ser 6 para repetir la primera."
            ]
          },
          {
            "pregunta": "Después de eliminar obtienes $0=-4$. ¿Qué puedes concluir?",
            "opciones": [
              "El sistema no tiene solución.",
              "La solución es (0,−4).",
              "La incógnita eliminada vale −4."
            ],
            "correcta": 0,
            "pista": "Ya no hay letras en la igualdad imposible.",
            "explicacion": "Cero no es igual a −4. No se están indicando coordenadas: se ha encontrado una contradicción.",
            "errores": [
              "",
              "Los dos miembros no representan coordenadas.",
              "La eliminación no asigna un valor a la incógnita."
            ]
          },
          {
            "pregunta": "Si $x+y=2$, ¿por qué no puede cumplirse también $3x+3y=9$?",
            "opciones": [
              "Porque las letras no pueden repetirse.",
              "Porque todos los sistemas tienen infinitas soluciones.",
              "Porque multiplicar la primera por 3 exige $3x+3y=6$."
            ],
            "correcta": 2,
            "pista": "Compara el triple de la primera condición con la segunda.",
            "explicacion": "Las mismas cantidades no pueden sumar simultáneamente 6 y 9; las condiciones son incompatibles.",
            "errores": [
              "Las letras deben repetirse para representar las mismas cantidades.",
              "Hay sistemas con ninguna, una o infinitas soluciones.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "actividad": {
          "consigna": "Un compañero concluye que (0,0) resuelve $x+y=1$ y $2x+2y=3$ porque «las letras desaparecen». Comprueba el par y corrige su argumento.",
          "solucion": "(0,0) no cumple ninguna ecuación. Al eliminar se obtiene $0=1$: no hay solución; cancelar términos no convierte las incógnitas en cero."
        }
      },
      {
        "id": "infinitas",
        "titulo": "5. Reconoce condiciones repetidas",
        "tituloRuta": "5. Reconoce condiciones repetidas",
        "descripcionRuta": "Describir infinitas soluciones sin confundirlas con todos los pares del plano.",
        "fase": "COMPRUEBA Y REFUERZA",
        "meta": "Describir infinitas soluciones sin confundirlas con todos los pares del plano.",
        "paraQue": "Reconocer lo que ya puedes explicar y elegir un repaso concreto cuando lo necesites.",
        "bases": [
          "Las ideas de los subtemas 2.1 a 2.4."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-metodos",
            "leccion": "casos",
            "titulo": "Identidades y rectas coincidentes"
          }
        ],
        "explicacion": [
          "Intenta primero los ejercicios en tu cuaderno. Usa el ejemplo acompañado o el enlace de repaso si necesitas ayuda. Escribe el procedimiento y comprueba la respuesta en las dos ecuaciones originales."
        ],
        "ejemplo": "Clasifica $x-2y=3$ y $2x-4y=6$.",
        "pasos": [
          "La segunda ecuación es el doble de la primera. Si restas dos veces la primera a la segunda, queda $0=0$.",
          "La segunda condición no aporta una restricción diferente. Ambas representan la misma recta y hay infinitos pares solución.",
          "Despeja $x=3+2y$. Por ejemplo, y=0 produce (3,0); y=1 produce (5,1). Verifica los dos pares en las dos ecuaciones."
        ],
        "preguntas": [
          {
            "pregunta": "Clasifica $2x+y=5$ y $4x+2y=10$.",
            "opciones": [
              "Solo (0,5).",
              "Ninguna solución.",
              "Infinitas soluciones en la recta $2x+y=5$."
            ],
            "correcta": 2,
            "pista": "La segunda ecuación es el doble de la primera.",
            "explicacion": "Las rectas coinciden. Por ejemplo (0,5) y (1,3) cumplen ambas; la solución no es un único par.",
            "errores": [
              "(1,3) también cumple ambas.",
              "No existe contradicción.",
              ""
            ]
          },
          {
            "pregunta": "En $x+y=4$ y $3x+3y=12$, ¿cuál par NO es solución?",
            "opciones": [
              "$(2,3)$",
              "$(0,4)$",
              "$(1,3)$"
            ],
            "correcta": 0,
            "pista": "Infinitas soluciones siguen teniendo que cumplir x+y=4.",
            "explicacion": "2+3=5, no 4. Los pares (0,4) y (1,3) sí cumplen ambas ecuaciones.",
            "errores": [
              "",
              "0+4=4 y 3(0)+3(4)=12: sí es solución.",
              "1+3=4 y 3(1)+3(3)=12: sí es solución."
            ]
          },
          {
            "pregunta": "¿Qué describe todas las soluciones reales de $x-y=2$ y $2x-2y=4$?",
            "opciones": [
              "Solo (2,0).",
              "$x=t+2$, $y=t$, para cualquier real t.",
              "Cualquier par de números."
            ],
            "correcta": 1,
            "pista": "Despeja x en la primera y elige libremente el valor de y.",
            "explicacion": "$x=y+2$. Tomando $y=t$, resulta $(t+2,t)$; en la segunda, $2(t+2)-2t=4$.",
            "errores": [
              "También sirven (3,1) y otros pares.",
              "",
              "Un par como (0,0) no cumple la condición."
            ]
          }
        ],
        "ejemplosExtra": [],
        "actividad": {
          "consigna": "Escribe dos soluciones distintas de $x+2y=6$ y $2x+4y=12$. Después escribe un par que no sea solución y justifica.",
          "solucion": "(6,0) y (2,2) son soluciones: en ambas ecuaciones producen 6 y 12. (0,0) no sirve porque produce 0 en los dos miembros izquierdos."
        }
      },
      {
        "id": "homogeneos",
        "titulo": "6. Comprueba sistemas homogéneos",
        "tituloRuta": "6. Comprueba sistemas homogéneos",
        "descripcionRuta": "Decidir cuándo el origen es la única solución y cuándo hay otras.",
        "fase": "COMPRUEBA Y REFUERZA",
        "meta": "Decidir cuándo el origen es la única solución y cuándo hay otras.",
        "paraQue": "Reconocer lo que ya puedes explicar y elegir un repaso concreto cuando lo necesites.",
        "bases": [
          "Las ideas de los subtemas 2.1 a 2.4."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-metodos",
            "leccion": "casos",
            "titulo": "Sistemas homogéneos"
          }
        ],
        "explicacion": [
          "Intenta primero los ejercicios en tu cuaderno. Usa el ejemplo acompañado o el enlace de repaso si necesitas ayuda. Escribe el procedimiento y comprueba la respuesta en las dos ecuaciones originales."
        ],
        "ejemplo": "Compara $x+y=0$, $x-y=0$ con $x+y=0$, $2x+2y=0$.",
        "pasos": [
          "En ambos sistemas, (0,0) cumple las dos ecuaciones: todos los miembros derechos son cero.",
          "En el primero, la suma da $2x=0$, así x=0; luego y=0. Solo existe la solución (0,0).",
          "En el segundo, la segunda condición repite la primera. Hay infinitos pares $(t,-t)$, como (0,0), (1,−1) y (2,−2). Ser homogéneo no basta para decidir cuántas soluciones hay."
        ],
        "preguntas": [
          {
            "pregunta": "Resuelve $2x+y=0$ y $x-y=0$.",
            "opciones": [
              "Únicamente (0,0).",
              "Ninguna solución.",
              "Todos los pares reales."
            ],
            "correcta": 0,
            "pista": "Suma las ecuaciones para eliminar y.",
            "explicacion": "$3x=0$, x=0. En la segunda, y=0. El origen es la única solución.",
            "errores": [
              "",
              "El origen cumple ambas.",
              "(1,1) no cumple la primera."
            ]
          },
          {
            "pregunta": "En $x-3y=0$ y $2x-6y=0$…",
            "opciones": [
              "solo sirve (0,0).",
              "hay infinitas soluciones, como (0,0) y (3,1).",
              "no hay solución."
            ],
            "correcta": 1,
            "pista": "La segunda es el doble de la primera.",
            "explicacion": "Las ecuaciones equivalen a x=3y. (3,1) cumple $3-3=0$ y $6-6=0$; no solo sirve el origen.",
            "errores": [
              "(3,1) también sirve.",
              "",
              "El origen y otros pares cumplen ambas."
            ]
          },
          {
            "pregunta": "¿Qué afirmación sobre un sistema homogéneo de dos ecuaciones lineales es correcta?",
            "opciones": [
              "Nunca tiene solución.",
              "Siempre tiene infinitas soluciones.",
              "Siempre admite (0,0), pero puede tener una o infinitas soluciones."
            ],
            "correcta": 2,
            "pista": "Prueba el origen y luego piensa si las dos condiciones son independientes.",
            "explicacion": "El origen siempre cumple miembros derechos cero. Las rectas pueden cruzarse solo allí o coincidir.",
            "errores": [
              "El origen siempre es solución.",
              "Dos rectas distintas pueden cruzarse solo en el origen.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "actividad": {
          "consigna": "Compara $x+2y=0$, $2x+4y=0$ con $x+2y=0$, $x-2y=0$. Da una solución no nula si existe.",
          "solucion": "El primero tiene infinitas soluciones: por ejemplo (−2,1). En el segundo, al sumar queda 2x=0 y luego y=0: solo (0,0), sin solución no nula."
        }
      }
    ],
    "diagnostico": [
      {
        "pregunta": "¿Qué compruebas para aceptar un par como solución?",
        "opciones": [
          "Que cumple las dos ecuaciones.",
          "Que cumple solo una.",
          "Que sus coordenadas son iguales."
        ],
        "correcta": 0,
        "pista": "Son dos condiciones simultáneas.",
        "explicacion": "El mismo par debe cumplir todas las condiciones.",
        "errores": [
          "",
          "Una sola condición no basta.",
          "Las coordenadas pueden ser distintas."
        ],
        "leccion": "representar"
      },
      {
        "pregunta": "Si $y=4-x$, ¿qué sustituye a y en $2x+y=7$?",
        "opciones": [
          "4+x",
          "4−x",
          "Solo 4"
        ],
        "correcta": 1,
        "pista": "Usa toda la expresión igual a y.",
        "explicacion": "Sustituye y por 4−x: $2x+(4-x)=7$.",
        "errores": [
          "El signo es negativo.",
          "",
          "Falta el término −x."
        ],
        "leccion": "sustituir"
      },
      {
        "pregunta": "¿Qué términos se anulan al sumarlos?",
        "opciones": [
          "2y y 2y",
          "2y y −y",
          "2y y −2y"
        ],
        "correcta": 2,
        "pista": "Busca cantidades opuestas.",
        "explicacion": "$2y+(-2y)=0$.",
        "errores": [
          "Su suma es 4y.",
          "Su suma es y.",
          ""
        ],
        "leccion": "eliminar"
      },
      {
        "pregunta": "La igualdad $0=7$ al eliminar indica…",
        "opciones": [
          "ninguna solución.",
          "una solución: (0,7).",
          "infinitas soluciones."
        ],
        "correcta": 0,
        "pista": "¿Puede ser verdadera?",
        "explicacion": "Es una contradicción: no existe ningún par solución.",
        "errores": [
          "",
          "No representa coordenadas.",
          "Una contradicción no es una identidad."
        ],
        "leccion": "ninguna"
      },
      {
        "pregunta": "Si una ecuación es el doble de la otra, sus rectas…",
        "opciones": [
          "son paralelas distintas.",
          "coinciden.",
          "son perpendiculares."
        ],
        "correcta": 1,
        "pista": "Ambas expresan la misma condición.",
        "explicacion": "Las ecuaciones equivalentes representan la misma recta y comparten sus puntos.",
        "errores": [
          "No representan condiciones distintas.",
          "",
          "Multiplicar una ecuación completa no cambia su recta."
        ],
        "leccion": "infinitas"
      },
      {
        "pregunta": "¿Qué par cumple siempre un sistema con miembros derechos cero?",
        "opciones": [
          "(1,1)",
          "(1,0)",
          "(0,0)"
        ],
        "correcta": 2,
        "pista": "Sustituye ceros por las letras.",
        "explicacion": "Todos los términos con x e y se vuelven cero; ambos miembros coinciden.",
        "errores": [
          "No cumple todos los sistemas homogéneos.",
          "No cumple todos los sistemas homogéneos.",
          ""
        ],
        "leccion": "homogeneos"
      }
    ],
    "cierre": [
      {
        "pregunta": "¿Qué par es el cruce de $x+y=7$ y $y=x+1$?",
        "opciones": [
          "$(3,4)$",
          "$(4,3)$",
          "$(2,5)$"
        ],
        "correcta": 0,
        "pista": "Comprueba el par en ambas ecuaciones.",
        "explicacion": "$3+4=7$ y $4=3+1$. Para dibujar, usa (0,7),(7,0) y (0,1),(3,4).",
        "errores": [
          "",
          "No cumple y=x+1.",
          "No cumple y=x+1."
        ],
        "leccion": "representar"
      },
      {
        "pregunta": "Resuelve $x=2y+1$ y $x+y=10$.",
        "opciones": [
          "$(3,7)$",
          "$(7,3)$",
          "$(5,5)$"
        ],
        "correcta": 1,
        "pista": "Sustituye x por 2y+1.",
        "explicacion": "$2y+1+y=10$, $3y=9$, y=3; x=7. Comprueba $7=2(3)+1$ y $7+3=10$.",
        "errores": [
          "No cumple x=2y+1.",
          "",
          "No cumple x=2y+1."
        ],
        "leccion": "sustituir"
      },
      {
        "pregunta": "Resuelve $2x+y=5$ y $3x-y=5$.",
        "opciones": [
          "$(1,3)$",
          "$(3,-1)$",
          "$(2,1)$"
        ],
        "correcta": 2,
        "pista": "Suma para eliminar y.",
        "explicacion": "$5x=10$, x=2; y=1. Comprueba $4+1=5$ y $6-1=5$.",
        "errores": [
          "3(1)−3=0, no 5.",
          "3(3)−(−1)=10, no 5.",
          ""
        ],
        "leccion": "eliminar"
      },
      {
        "pregunta": "Clasifica $2x-y=1$ y $4x-2y=5$.",
        "opciones": [
          "Ninguna solución.",
          "Una solución.",
          "Infinitas soluciones."
        ],
        "correcta": 0,
        "pista": "Compara la segunda con el doble de la primera.",
        "explicacion": "El doble exigiría $4x-2y=2$, pero la segunda exige 5. Al eliminar queda $0=3$: no hay solución.",
        "errores": [
          "",
          "Las condiciones se contradicen.",
          "No son ecuaciones equivalentes."
        ],
        "leccion": "ninguna"
      },
      {
        "pregunta": "Clasifica $3x+y=2$ y $6x+2y=4$.",
        "opciones": [
          "Ninguna solución.",
          "Infinitas soluciones sobre una misma recta.",
          "Solo (0,2)."
        ],
        "correcta": 1,
        "pista": "La segunda repite el doble de la primera.",
        "explicacion": "La eliminación produce $0=0$. Por ejemplo (0,2) y (1,−1) cumplen ambas.",
        "errores": [
          "No hay contradicción.",
          "",
          "(1,−1) también cumple ambas."
        ],
        "leccion": "infinitas"
      },
      {
        "pregunta": "Resuelve $x+2y=0$ y $3x-y=0$.",
        "opciones": [
          "Ninguna solución.",
          "Infinitas soluciones.",
          "Únicamente (0,0)."
        ],
        "correcta": 2,
        "pista": "Multiplica la segunda por 2 y suma.",
        "explicacion": "$6x-2y=0$ más la primera da $7x=0$; x=0 y luego y=0. El origen es la única solución.",
        "errores": [
          "El origen cumple ambas.",
          "Las dos rectas son distintas.",
          ""
        ],
        "leccion": "homogeneos"
      },
      {
        "pregunta": "En $x-2y=0$ y $3x-6y=0$, ¿qué solución NO es el origen?",
        "opciones": [
          "$(2,1)$",
          "$(1,2)$",
          "$(1,1)$"
        ],
        "correcta": 0,
        "pista": "Busca x=2y.",
        "explicacion": "$2-2(1)=0$ y $3(2)-6(1)=0$. Las ecuaciones son equivalentes y admiten infinitas soluciones.",
        "errores": [
          "",
          "1−2(2)=−3.",
          "1−2(1)=−1."
        ],
        "leccion": "homogeneos"
      },
      {
        "pregunta": "Dos entradas adultas y una infantil cuestan 11 dólares; una adulta y dos infantiles cuestan 10. ¿Cuánto cuesta cada entrada?",
        "opciones": [
          "Adulta 3; infantil 4.",
          "Adulta 4; infantil 3.",
          "Adulta 5; infantil 1."
        ],
        "correcta": 1,
        "pista": "Define x e y como precios. Usa 2x+y=11 y x+2y=10.",
        "explicacion": "Multiplica la segunda por −2 y suma con la primera: $-3y=-9$, y=3. En la primera, $2x+3=11$, x=4. Comprueba $2(4)+3=11$ y $4+2(3)=10$. Precios: adulta 4 dólares; infantil 3 dólares.",
        "errores": [
          "2(3)+4=10, no 11.",
          "",
          "5+2(1)=7, no 10."
        ],
        "leccion": "eliminar"
      }
    ],
    "cierreIntroduccion": "Resuelve estos ocho ejercicios nuevos en tu cuaderno. Escribe el procedimiento, comprueba ambas ecuaciones y consulta las explicaciones después de intentarlo. La última situación exige definir las incógnitas y responder con unidades.",
    "retosCierre": [
      "Dibuja las rectas del primer ejercicio de cierre con escala uniforme. Explica cómo el cruce y la comprobación algebraica describen la misma solución.",
      "Resuelve $2x+y=9$ y $x-y=3$ por sustitución y eliminación. Compara los pasos y verifica el mismo par en las dos ecuaciones.",
      "Escribe tres sistemas: uno con una solución, otro sin solución y otro con infinitas. Justifica cada clasificación con una eliminación y un dibujo.",
      "Explica por qué un sistema homogéneo siempre admite el origen, pero no siempre tiene otras soluciones.",
      "Inventa un problema de compras con dos precios desconocidos y dos condiciones distintas. Define las letras, resuelve, comprueba y responde con unidades."
    ],
    "puenteAnterior": {
      "titulo": "¿Necesitas repasar antes de comprobar?",
      "descripcion": "Vuelve a elegir un método y revisar los resultados. Al regresar se conservan tus respuestas durante la sesión.",
      "tema": "t1-sistemas-aplicaciones",
      "leccion": "elegir"
    }
  },
  "data/modules/t1-sistemas-grafico.json": {
    "id": "t1-sistemas-grafico",
    "titulo": "Comprender con tablas y gráficos",
    "temaNumero": "2.2",
    "unidadId": "t1-tema2",
    "unidadTitulo": "Tema 2 · Sistemas de ecuaciones lineales",
    "trimestre": 1,
    "paginasLibro": "20-25",
    "version": 1,
    "introduccion": "Conecta las ecuaciones con tablas, puntos y rectas. Comprende qué significa una solución antes de calcularla.",
    "objetivo": "Al terminar podrás: Construir una tabla y ubicar pares en el plano; Interpretar el cruce de dos rectas y comprobarlo.",
    "lecciones": [
      {
        "id": "tabla",
        "titulo": "De los pares a una recta",
        "tituloRuta": "De los pares a una recta",
        "descripcionRuta": "Construir una tabla y ubicar pares en el plano.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Construir una tabla y ubicar pares en el plano.",
        "paraQue": "Representar visualmente todas las soluciones de una ecuación lineal.",
        "bases": [
          "Pares ordenados y despeje sencillo."
        ],
        "explicacion": [
          "En el plano cartesiano, el eje horizontal corresponde a x y el vertical a y. Para ubicar $(2,3)$, parte de $(0,0)$, avanza 2 a la derecha y sube 3. Un valor negativo de x va a la izquierda; uno negativo de y, hacia abajo.",
          "La ecuación $x+y=5$ equivale a $y=5-x$. Elige x, calcula y y registra el par. Para $x=0,2,5$, obtienes $y=5,3,0$.",
          "Al ubicar los pares de una ecuación lineal aparecen puntos alineados. Dos puntos distintos determinan la recta; un tercero ayuda a detectar errores. La recta representa también los pares con coordenadas fraccionarias, no solo los de la tabla.",
          "Usa una escala uniforme en cada eje y etiqueta los valores. No necesitas una fórmula de pendiente para empezar: basta una tabla y la ubicación correcta de los puntos."
        ],
        "ejemplo": "Construye una tabla para $x-y=1$.",
        "pasos": [
          "Suma y a ambos miembros y resta 1: $y=x-1$.",
          "Elige $x=0,1,3$: obtienes los pares $(0,-1)$, $(1,0)$, $(3,2)$.",
          "Ubica los tres pares y traza la recta. Comprueba $3-2=1$."
        ],
        "preguntas": [
          {
            "pregunta": "En $y=5-x$, si $x=2$, ¿cuánto vale y?",
            "opciones": [
              "7",
              "3",
              "−3"
            ],
            "correcta": 1,
            "pista": "Sustituye x por 2.",
            "explicacion": "$y=5-2=3$.",
            "errores": [
              "Debes restar x.",
              "",
              "5−2 es positivo."
            ]
          },
          {
            "pregunta": "¿Cómo ubicas $(-2,1)$?",
            "opciones": [
              "2 a la izquierda y 1 hacia arriba.",
              "2 a la derecha y 1 hacia arriba.",
              "1 a la izquierda y 2 hacia abajo."
            ],
            "correcta": 0,
            "pista": "La primera coordenada es horizontal.",
            "explicacion": "x=−2 indica izquierda; y=1 indica arriba.",
            "errores": [
              "",
              "Una x negativa va a la izquierda.",
              "Intercambiaste coordenadas y signos."
            ]
          },
          {
            "pregunta": "¿Qué puntos sirven para trazar $x+y=4$?",
            "opciones": [
              "$(0,0)$ y $(4,4)$",
              "$(1,1)$ y $(2,2)$",
              "$(0,4)$ y $(4,0)$"
            ],
            "correcta": 2,
            "pista": "Comprueba los dos puntos de cada opción.",
            "explicacion": "$0+4=4$ y $4+0=4$; son dos puntos distintos de la recta.",
            "errores": [
              "Ninguno cumple la ecuación.",
              "(1,1) no cumple x+y=4.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-bases",
            "leccion": "pares",
            "titulo": "Pares ordenados"
          }
        ],
        "actividad": {
          "solucion": "Los pares son $(0,2)$, $(1,1)$ y $(2,0)$. Todos cumplen la misma ecuación lineal y están en su recta.",
          "consigna": "Para $y=2-x$, completa los pares (0, ___), (1, ___) y (2, ___). Ubícalos y explica por qué están alineados."
        }
      },
      {
        "id": "interseccion",
        "titulo": "El punto donde coinciden",
        "tituloRuta": "El punto donde coinciden",
        "descripcionRuta": "Interpretar el cruce de dos rectas y comprobarlo.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Interpretar el cruce de dos rectas y comprobarlo.",
        "paraQue": "Entender el método gráfico antes de usar operaciones algebraicas.",
        "bases": [
          "Tablas de valores y puntos en el plano."
        ],
        "explicacion": [
          "Dibuja en el mismo plano la recta de cada ecuación. El punto donde se cruzan pertenece a las dos rectas: por eso sus coordenadas cumplen las dos ecuaciones.",
          "Para $x+y=5$ usa $(0,5)$ y $(5,0)$. Para $2x+y=7$ usa $(0,7)$ y $(3,1)$. Al trazar ambas, el cruce se ve cerca de $(2,3)$.",
          "La lectura del dibujo puede ser aproximada. Sustituye el par leído en ambas ecuaciones para comprobarlo. Si el cruce está entre marcas, no lo redondees y lo presentes como exacto.",
          "Si dos rectas distintas son paralelas, no comparten puntos: el sistema no tiene solución. Si se superponen completamente, comparten todos sus puntos: tiene infinitas soluciones. Explora los tres casos y relaciona el dibujo con sus ecuaciones."
        ],
        "ejemplo": "Lee y verifica el cruce de $x+y=5$ y $2x+y=7$.",
        "pasos": [
          "En el dibujo, la primera recta baja de (0,5) a (5,0); la segunda baja más rápido.",
          "Se cruzan en $(2,3)$.",
          "Comprueba: $2+3=5$ y $2(2)+3=7$. La comprobación confirma el par exacto."
        ],
        "preguntas": [
          {
            "pregunta": "El cruce es $(1,3)$. ¿Qué representa?",
            "opciones": [
              "$x=3,\\ y=1$",
              "$x=1,\\ y=3$",
              "Solo el valor de x."
            ],
            "correcta": 1,
            "pista": "Lee las coordenadas en el orden (x,y).",
            "explicacion": "El cruce indica x=1, y=3 para ambas ecuaciones.",
            "errores": [
              "Invertiste las coordenadas.",
              "",
              "Una solución del sistema da ambos valores."
            ]
          },
          {
            "pregunta": "Dos rectas distintas y paralelas representan…",
            "opciones": [
              "ninguna solución.",
              "una solución.",
              "infinitas soluciones."
            ],
            "correcta": 0,
            "pista": "¿Comparten algún punto?",
            "explicacion": "No se cortan: ningún par cumple las dos ecuaciones.",
            "errores": [
              "",
              "No existe un cruce.",
              "Las infinitas soluciones corresponden a rectas coincidentes."
            ]
          },
          {
            "pregunta": "Un dibujo sugiere $(1.5,2)$. ¿Cómo confirmas que es solución?",
            "opciones": [
              "Redondeando a (2,2).",
              "Comprobando solo la primera ecuación.",
              "Sustituyendo en las dos ecuaciones originales."
            ],
            "correcta": 2,
            "pista": "Debe pertenecer a ambas rectas.",
            "explicacion": "La sustitución en ambas ecuaciones permite verificar si el par es exacto.",
            "errores": [
              "Redondear puede producir un par que no cumpla las ecuaciones.",
              "Cumplir una sola condición no basta.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [
          "tabla"
        ],
        "repasos": [],
        "visual": "sistemas",
        "actividad": {
          "solucion": "Puedes usar (0,4) y (4,0) para la primera; (0,0) y (4,4) para la segunda. Se cruzan en (2,2): 2+2=4 y 2−2=0.",
          "consigna": "Dibuja $x+y=4$ y $x-y=0$ con dos puntos por recta. Lee el cruce y comprueba las dos condiciones."
        }
      }
    ],
    "diagnostico": [
      {
        "pregunta": "¿Cuál es la coordenada horizontal en $(3,-2)$?",
        "opciones": [
          "−2",
          "3",
          "1"
        ],
        "correcta": 1,
        "pista": "El orden es (x,y).",
        "explicacion": "La primera coordenada, x=3, es horizontal.",
        "errores": [
          "−2 es la vertical.",
          "",
          "No debes sumar las coordenadas."
        ],
        "leccion": "tabla"
      },
      {
        "pregunta": "Si $x+y=6$, entonces y es…",
        "opciones": [
          "$6-x$",
          "$x-6$",
          "$6+x$"
        ],
        "correcta": 0,
        "pista": "Resta x a ambos miembros.",
        "explicacion": "$y=6-x$.",
        "errores": [
          "",
          "Invertiste el orden de la resta.",
          "Debes restar x, no sumarlo."
        ],
        "leccion": "tabla"
      },
      {
        "pregunta": "Un punto que está en las dos rectas…",
        "opciones": [
          "solo cumple una ecuación.",
          "no representa una solución.",
          "cumple las dos ecuaciones."
        ],
        "correcta": 2,
        "pista": "Cada recta representa los pares de una ecuación.",
        "explicacion": "Pertenecer a ambas significa satisfacer ambas condiciones.",
        "errores": [
          "Está en las dos.",
          "Es precisamente una solución común.",
          ""
        ],
        "leccion": "interseccion"
      }
    ],
    "cierre": [
      {
        "pregunta": "Para $y=2x-1$, el punto correspondiente a $x=-1$ es…",
        "opciones": [
          "(-1,-3)",
          "(-1,1)",
          "(-3,-1)"
        ],
        "correcta": 0,
        "pista": "Calcula 2(−1)−1.",
        "explicacion": "y=−3; el par es (−1,−3).",
        "errores": [
          "",
          "2(−1)−1=−3.",
          "Invertiste el orden."
        ],
        "leccion": "tabla"
      },
      {
        "pregunta": "Las rectas $y=x+2$ y $y=-x+4$ se cruzan en…",
        "opciones": [
          "(2,1)",
          "(1,3)",
          "(3,1)"
        ],
        "correcta": 1,
        "pista": "Compara ambos valores de y para x=1.",
        "explicacion": "$1+2=3$ y $-1+4=3$: (1,3) pertenece a ambas.",
        "errores": [
          "No cumple y=x+2.",
          "",
          "No cumple y=x+2."
        ],
        "leccion": "interseccion"
      },
      {
        "pregunta": "Dos ecuaciones de la misma recta tienen…",
        "opciones": [
          "cero soluciones.",
          "una solución.",
          "infinitas soluciones comunes."
        ],
        "correcta": 2,
        "pista": "Comparten todos los puntos de la recta.",
        "explicacion": "Cada punto de esa recta cumple las dos ecuaciones.",
        "errores": [
          "Sí comparten puntos.",
          "Comparten más de un punto.",
          ""
        ],
        "leccion": "interseccion"
      }
    ],
    "cierreIntroduccion": "Resuelve primero en tu cuaderno. Comprueba cada par en las dos ecuaciones y explica el procedimiento antes de consultar la respuesta.",
    "retosCierre": [
      "Traza dos rectas con una escala uniforme y explica qué significa su cruce.",
      "Dibuja un ejemplo de rectas paralelas y otro de coincidentes; explica sus soluciones."
    ],
    "puenteAnterior": {
      "titulo": "Conecta con el subtema anterior",
      "descripcion": "Repasa la base que necesitas. Las respuestas se conservan durante esta sesión.",
      "tema": "t1-sistemas-bases",
      "leccion": "comun"
    }
  },
  "data/modules/t1-sistemas-metodos.json": {
    "id": "t1-sistemas-metodos",
    "titulo": "Resolver con sustitución y eliminación",
    "temaNumero": "2.3",
    "unidadId": "t1-tema2",
    "unidadTitulo": "Tema 2 · Sistemas de ecuaciones lineales",
    "trimestre": 1,
    "paginasLibro": "20-25",
    "version": 1,
    "introduccion": "Aprende por qué funciona cada transformación. Comienza con enteros y avanza hacia fracciones y casos especiales.",
    "objetivo": "Al terminar podrás: Resolver un sistema reemplazando una letra por una expresión igual; Resolver un sistema sumando ecuaciones con términos opuestos; Multiplicar una ecuación completa para poder eliminar; Distinguir una contradicción de una identidad.",
    "lecciones": [
      {
        "id": "sustitucion",
        "titulo": "Sustituir una cantidad equivalente",
        "tituloRuta": "Sustituir una cantidad equivalente",
        "descripcionRuta": "Resolver un sistema reemplazando una letra por una expresión igual.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Resolver un sistema reemplazando una letra por una expresión igual.",
        "paraQue": "Obtener una solución exacta cuando una incógnita es fácil de despejar.",
        "bases": [
          "Despeje y comprobación en las dos ecuaciones."
        ],
        "explicacion": [
          "Si dos expresiones valen lo mismo, puedes usar una en lugar de la otra. Si $x+y=5$, entonces $y=5-x$. La cantidad y de la otra ecuación puede reemplazarse por 5−x.",
          "En $2x+y=7$, sustituye la expresión completa: $2x+(5-x)=7$. Los paréntesis ayudan a conservar los signos, especialmente cuando la expresión está multiplicada o restada.",
          "Ahora solo hay una incógnita: reúne términos, resuelve y recupera la otra letra. Encontrar x es un paso intermedio; la respuesta es el par (x,y).",
          "Elige primero una ecuación donde una letra tenga coeficiente 1 o −1. Esto suele evitar fracciones al inicio. El método funciona también con fracciones si mantienes operaciones equivalentes."
        ],
        "ejemplo": "Resuelve $x+y=5$ y $2x+y=7$ por sustitución.",
        "pasos": [
          "De la primera: $y=5-x$.",
          "En la segunda: $2x+(5-x)=7$. Reúne: $x+5=7$, así $x=2$.",
          "Recupera $y=5-2=3$. Solución: $(2,3)$.",
          "Verifica: $2+3=5$ y $2(2)+3=7$."
        ],
        "preguntas": [
          {
            "pregunta": "Si $y=6-x$, ¿cómo queda $3x+y=10$ al sustituir?",
            "opciones": [
              "$3x+6-x=10$",
              "$3x+6=10$",
              "$3x+6+x=10$"
            ],
            "correcta": 0,
            "pista": "Reemplaza y por toda la expresión 6−x.",
            "explicacion": "$3x+(6-x)=10$; el + delante no cambia los signos.",
            "errores": [
              "",
              "Falta el término −x.",
              "El signo de x es negativo."
            ]
          },
          {
            "pregunta": "Resuelve $y=x+1$ y $x+y=7$.",
            "opciones": [
              "$(4,3)$",
              "$(3,4)$",
              "$(2,5)$"
            ],
            "correcta": 1,
            "pista": "Sustituye y por x+1 en la segunda.",
            "explicacion": "$x+(x+1)=7$, $2x=6$, $x=3$; $y=4$.",
            "errores": [
              "No cumple y=x+1.",
              "",
              "No cumple y=x+1."
            ]
          },
          {
            "pregunta": "Si $x=2-y$, entonces $3x$ equivale a…",
            "opciones": [
              "$6-y$",
              "$6+3y$",
              "$6-3y$"
            ],
            "correcta": 2,
            "pista": "El 3 multiplica los dos términos.",
            "explicacion": "$3(2-y)=6-3y$.",
            "errores": [
              "Falta multiplicar y por 3.",
              "El producto con −y sigue siendo negativo.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [
          {
            "problema": "Resuelve $x+y=1$ y $x-y=2$.",
            "pasos": [
              "Despeja $y=1-x$ y sustituye en la segunda: $x-(1-x)=2$.",
              "Distribuye el signo negativo: $x-1+x=2$, luego $2x=3$ y $x=3/2$.",
              "$y=1-3/2=-1/2$. Comprueba: $3/2-1/2=1$ y $3/2-(-1/2)=2$."
            ]
          }
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-sistemas-bases",
            "leccion": "igualdad",
            "titulo": "Mantener la igualdad"
          },
          {
            "tema": "t1-u1-tema1",
            "leccion": "distributiva",
            "titulo": "Distribuir y cuidar signos"
          }
        ],
        "actividad": {
          "solucion": "$2x+(x+2)=8$, $3x=6$, $x=2$, $y=4$. Comprueba $4=2+2$ y $2(2)+4=8$.",
          "consigna": "En $y=x+2$ y $2x+y=8$, completa: $2x+(\\_\\_\\_)=8$, luego $3x=\\_\\_\\_$. Recupera y y verifica."
        }
      },
      {
        "id": "eliminacion",
        "titulo": "Sumar para eliminar una incógnita",
        "tituloRuta": "Sumar para eliminar una incógnita",
        "descripcionRuta": "Resolver un sistema sumando ecuaciones con términos opuestos.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Resolver un sistema sumando ecuaciones con términos opuestos.",
        "paraQue": "Simplificar dos condiciones hasta obtener una ecuación con una sola letra.",
        "bases": [
          "Suma de términos semejantes y números opuestos."
        ],
        "explicacion": [
          "Si dos igualdades son verdaderas, al sumar sus miembros izquierdos y sus miembros derechos obtienes otra igualdad verdadera. Por ejemplo, de $3+2=5$ y $3-2=1$ resulta $6=6$.",
          "En $x+y=5$ y $x-y=1$, los términos +y y −y se anulan al sumar. Queda $2x=6$. Se llama eliminación porque una incógnita desaparece en esa nueva ecuación.",
          "Suma por columnas: términos con x, términos con y y números del otro miembro. La ecuación sumada debe usarse junto con una de las originales para recuperar la incógnita eliminada.",
          "Que desaparezca una letra no significa que su valor sea cero. Solo se cancelaron sus términos en una combinación de ecuaciones. Al final comprueba el par en las dos originales."
        ],
        "ejemplo": "Resuelve $x+y=5$ y $x-y=1$.",
        "pasos": [
          "Suma miembro a miembro: $(x+y)+(x-y)=5+1$.",
          "Como $y-y=0$, queda $2x=6$; divide entre 2: $x=3$.",
          "Sustituye en $x+y=5$: $3+y=5$, de donde $y=2$.",
          "Comprueba: $3+2=5$ y $3-2=1$."
        ],
        "preguntas": [
          {
            "pregunta": "Al sumar $2x+y=9$ y $x-y=3$, queda…",
            "opciones": [
              "$3x+2y=12$",
              "$3x=12$",
              "$x=6$"
            ],
            "correcta": 1,
            "pista": "Suma términos semejantes y los dos miembros derechos.",
            "explicacion": "$2x+x=3x$; $y-y=0$; $9+3=12$.",
            "errores": [
              "y y −y se cancelan.",
              "",
              "Las x se suman; no se restan."
            ]
          },
          {
            "pregunta": "Resuelve $x+y=8$ y $x-y=2$.",
            "opciones": [
              "$(5,3)$",
              "$(3,5)$",
              "$(4,4)$"
            ],
            "correcta": 0,
            "pista": "Al sumar queda 2x=10.",
            "explicacion": "$x=5$ y $y=8-5=3$.",
            "errores": [
              "",
              "3−5=−2, no 2.",
              "4−4=0, no 2."
            ]
          },
          {
            "pregunta": "Al eliminar y, ¿se concluye que $y=0$?",
            "opciones": [
              "Sí, siempre.",
              "Sí, si su coeficiente es 1.",
              "No; hay que recuperarla en una ecuación original."
            ],
            "correcta": 2,
            "pista": "Se cancelan términos en una suma, no el valor de la incógnita.",
            "explicacion": "Por ejemplo, en x+y=8 y x−y=2 se elimina y, pero y=3.",
            "errores": [
              "La cancelación no fija y=0.",
              "El coeficiente 1 no cambia esta idea.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [],
        "repasos": [],
        "actividad": {
          "solucion": "$3x=9$, $x=3$. En la segunda: $3-y=1$, así $y=2$. Comprueba $6+2=8$ y $3-2=1$.",
          "consigna": "Suma $2x+y=8$ y $x-y=1$. Completa: ___ x = ___. Recupera y usando una ecuación original."
        }
      },
      {
        "id": "multiplicar",
        "titulo": "Preparar términos opuestos",
        "tituloRuta": "Preparar términos opuestos",
        "descripcionRuta": "Multiplicar una ecuación completa para poder eliminar.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Multiplicar una ecuación completa para poder eliminar.",
        "paraQue": "Resolver sistemas donde los coeficientes aún no son opuestos.",
        "bases": [
          "Distributiva y eliminación por suma."
        ],
        "explicacion": [
          "En $2x+y=7$ y $3x+2y=12$, los coeficientes de y no son opuestos. Podemos transformar la primera ecuación multiplicando todos sus términos, incluido el otro miembro, por −2.",
          "Así, $-2(2x+y)=-2(7)$ se convierte en $-4x-2y=-14$. Ahora −2y y +2y sí se cancelan al sumar. Multiplicar por un número distinto de cero conserva las soluciones de una ecuación.",
          "El objetivo es crear coeficientes opuestos, no multiplicar por cualquier número. Si aparecen 2y y 3y, puedes usar −3 y 2 para obtener −6y y +6y.",
          "Escribe una línea para cada transformación. El error más común es multiplicar las letras y olvidar el término independiente o cambiar solo algunos signos."
        ],
        "ejemplo": "Resuelve $2x+y=7$ y $3x+2y=12$.",
        "pasos": [
          "Multiplica toda la primera por −2: $-4x-2y=-14$.",
          "Suma con la segunda: $-x=-2$, así $x=2$.",
          "En la primera original: $4+y=7$, así $y=3$.",
          "Verifica: $2(2)+3=7$ y $3(2)+2(3)=12$."
        ],
        "preguntas": [
          {
            "pregunta": "Multiplica $x+2y=5$ por −3.",
            "opciones": [
              "$-3x-6y=5$",
              "$-3x+6y=-15$",
              "$-3x-6y=-15$"
            ],
            "correcta": 2,
            "pista": "Multiplica cada término y el miembro derecho.",
            "explicacion": "$-3(x+2y)=-3(5)$ da $-3x-6y=-15$.",
            "errores": [
              "Falta multiplicar el 5.",
              "El producto −3 por +2y es −6y.",
              ""
            ]
          },
          {
            "pregunta": "Para eliminar y entre $x+2y=7$ y $3x+3y=12$, puedes multiplicar…",
            "opciones": [
              "la primera por −3 y la segunda por 2.",
              "ambas por 2 y sumarlas.",
              "solo los términos con y por −1."
            ],
            "correcta": 0,
            "pista": "Busca coeficientes −6 y +6.",
            "explicacion": "Al multiplicar, obtenemos $(-3)(2y)=-6y$ y $2(3y)=6y$. Al sumar las ecuaciones, $-6y+6y=0$: se elimina la incógnita $y$. Recuerda multiplicar cada ecuación completa, incluido el miembro derecho.",
            "errores": [
              "",
              "Obtendrías 4y y 6y; no se cancelan al sumar.",
              "Cambiar un solo término no conserva la igualdad."
            ]
          },
          {
            "pregunta": "Resuelve $x+2y=7$ y $3x+3y=12$.",
            "opciones": [
              "$(3,2)$",
              "$(1,3)$",
              "$(2,1)$"
            ],
            "correcta": 1,
            "pista": "Usa los multiplicadores −3 y 2.",
            "explicacion": "$-3x-6y=-21$ y $6x+6y=24$ dan $3x=3$; $x=1$, $y=3$.",
            "errores": [
              "3(3)+3(2)=15, no 12.",
              "",
              "2+2(1)=4, no 7."
            ]
          }
        ],
        "ejemplosExtra": [
          {
            "problema": "Resuelve $2x+3y=1$ y $3x-2y=8$.",
            "pasos": [
              "Multiplica la primera por 2: $4x+6y=2$. Multiplica la segunda por 3: $9x-6y=24$.",
              "Suma: $13x=26$, así $x=2$.",
              "En la primera: $4+3y=1$; $y=-1$. Comprueba: $3(2)-2(-1)=8$."
            ]
          }
        ],
        "refuerzos": [
          "eliminacion"
        ],
        "repasos": [],
        "actividad": {
          "solucion": "$-3x-3y=-12$. Al sumar con la segunda: $-x=-1$, $x=1$; $y=3$. Comprueba $1+3=4$ y $2+9=11$.",
          "consigna": "En $x+y=4$ y $2x+3y=11$, multiplica la primera por −3. Escribe todos los términos transformados, suma y recupera y."
        }
      },
      {
        "id": "casos",
        "titulo": "Cuando quedan cero o infinitas soluciones",
        "tituloRuta": "Cuando quedan cero o infinitas soluciones",
        "descripcionRuta": "Distinguir una contradicción de una identidad.",
        "fase": "CONSTRUYE Y COMPRUEBA",
        "meta": "Distinguir una contradicción de una identidad.",
        "paraQue": "Interpretar lo que sucede cuando se eliminan las dos incógnitas.",
        "bases": [
          "Ecuaciones equivalentes y rectas paralelas o coincidentes."
        ],
        "explicacion": [
          "No todos los sistemas tienen un único par solución. Después de eliminar puedes obtener una igualdad imposible o una igualdad que siempre es cierta.",
          "En $x+y=4$ y $2x+2y=10$, resta dos veces la primera a la segunda: queda $0=2$. Ningún par hace cierta esta afirmación: el sistema no tiene solución; sus rectas son paralelas distintas.",
          "En $x+y=4$ y $2x+2y=8$, la misma operación da $0=0$. La segunda condición repite la primera: hay infinitas soluciones sobre una misma recta. No significa que cualquier par del plano sirva.",
          "Puedes describirlas con $x=t$, $y=4-t$, para cualquier número real t. Por ejemplo (0,4), (1,3) y (4,0). Si el contexto exige objetos, se consideran solo los pares que sean cantidades permitidas.",
          "En un sistema homogéneo los miembros derechos son cero. El par (0,0) siempre lo resuelve, pero puede no ser el único. Examina si las ecuaciones son independientes o repiten la misma condición."
        ],
        "ejemplo": "Clasifica $x+y=4$ con $2x+2y=8$.",
        "pasos": [
          "Multiplica la primera por −2: $-2x-2y=-8$.",
          "Suma con la segunda: $0=0$.",
          "La segunda es el doble de la primera: rectas coincidentes, infinitas soluciones.",
          "El par (2,2) sirve; (2,3) no sirve. Infinitas no significa todas las parejas."
        ],
        "preguntas": [
          {
            "pregunta": "Tras eliminar obtienes $0=5$. El sistema tiene…",
            "opciones": [
              "una solución: (0,5).",
              "ninguna solución.",
              "infinitas soluciones."
            ],
            "correcta": 1,
            "pista": "¿Puede cero ser igual a cinco?",
            "explicacion": "Es una contradicción; ningún par satisface las dos condiciones.",
            "errores": [
              "No puedes leer coordenadas de 0=5.",
              "",
              "Una identidad como 0=0 indicaría ecuaciones dependientes."
            ]
          },
          {
            "pregunta": "En $x+y=3$ y $2x+2y=6$, ¿cuál afirmación es correcta?",
            "opciones": [
              "Tiene infinitas soluciones que cumplen x+y=3.",
              "Solo sirve (0,0).",
              "Todos los pares del plano sirven."
            ],
            "correcta": 0,
            "pista": "La segunda ecuación es el doble de la primera.",
            "explicacion": "Ambas representan la misma recta; por ejemplo, (0,3) y (1,2) sirven.",
            "errores": [
              "",
              "0+0 no es 3.",
              "Solo sirven los pares de la recta x+y=3."
            ]
          },
          {
            "pregunta": "Resuelve $x+y=0$ y $x-y=0$.",
            "opciones": [
              "Infinitas soluciones.",
              "Ninguna solución.",
              "Únicamente (0,0)."
            ],
            "correcta": 2,
            "pista": "Suma las ecuaciones y recupera y.",
            "explicacion": "$2x=0$ da x=0; luego y=0. Un sistema homogéneo no siempre tiene infinitas soluciones.",
            "errores": [
              "Las rectas son distintas y se cortan en el origen.",
              "El origen cumple ambas.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "refuerzos": [
          "multiplicar"
        ],
        "repasos": [],
        "actividad": {
          "solucion": "A da $0=0$: misma condición e infinitas soluciones. B da $0=1$: contradicción y ninguna solución.",
          "consigna": "Compara $x+y=2$ con (A) $2x+2y=4$ y (B) $2x+2y=5$. Elimina y explica la diferencia entre los resultados."
        }
      }
    ],
    "diagnostico": [
      {
        "pregunta": "De $x+y=7$, despejar y da…",
        "opciones": [
          "$y=7-x$",
          "$y=7+x$",
          "$y=x-7$"
        ],
        "correcta": 0,
        "pista": "Resta x en ambos lados.",
        "explicacion": "$y=7-x$.",
        "errores": [
          "",
          "No debes sumar x.",
          "El orden de la resta cambia el resultado."
        ],
        "leccion": "sustitucion"
      },
      {
        "pregunta": "¿Cuánto es $y+(-y)$?",
        "opciones": [
          "2y",
          "0",
          "y²"
        ],
        "correcta": 1,
        "pista": "Son cantidades opuestas.",
        "explicacion": "Una cantidad más su opuesto da cero.",
        "errores": [
          "Eso sería y+y.",
          "",
          "Una suma no produce un cuadrado."
        ],
        "leccion": "eliminacion"
      },
      {
        "pregunta": "Distribuye $-2(x+3)$.",
        "opciones": [
          "$-2x+6$",
          "$-2x+3$",
          "$-2x-6$"
        ],
        "correcta": 2,
        "pista": "El −2 multiplica ambos términos.",
        "explicacion": "$-2x-6$.",
        "errores": [
          "−2 por 3 es −6.",
          "Falta multiplicar el 3.",
          ""
        ],
        "leccion": "multiplicar"
      },
      {
        "pregunta": "¿Es verdadera la igualdad $0=4$?",
        "opciones": [
          "No, es imposible.",
          "Sí, si x=0.",
          "Sí, si y=4."
        ],
        "correcta": 0,
        "pista": "La igualdad ya no contiene letras.",
        "explicacion": "Ningún valor de x o y cambia que 0 sea distinto de 4.",
        "errores": [
          "",
          "No hay x en esa igualdad.",
          "No hay y en esa igualdad."
        ],
        "leccion": "casos"
      }
    ],
    "cierre": [
      {
        "pregunta": "Resuelve $y=x-2$ y $x+y=4$.",
        "opciones": [
          "(3,1)",
          "(1,3)",
          "(2,2)"
        ],
        "correcta": 0,
        "pista": "Sustituye y por x−2.",
        "explicacion": "$2x-2=4$, así x=3 e y=1.",
        "errores": [
          "",
          "No cumple y=x−2.",
          "No cumple y=x−2."
        ],
        "leccion": "sustitucion"
      },
      {
        "pregunta": "Resuelve $2x+y=11$ y $x-y=1$.",
        "opciones": [
          "(3,5)",
          "(4,3)",
          "(5,1)"
        ],
        "correcta": 1,
        "pista": "Suma: 3x=12.",
        "explicacion": "x=4 e y=3; 8+3=11 y 4−3=1.",
        "errores": [
          "3−5=−2.",
          "",
          "5−1=4."
        ],
        "leccion": "eliminacion"
      },
      {
        "pregunta": "Resuelve $x+2y=8$ y $3x+y=9$.",
        "opciones": [
          "(3,2)",
          "(1,3)",
          "(2,3)"
        ],
        "correcta": 2,
        "pista": "Multiplica la segunda por −2 y suma.",
        "explicacion": "$-5x=-10$ da x=2; y=3. Comprobación: 2+6=8 y 6+3=9.",
        "errores": [
          "3+4=7.",
          "1+6=7.",
          ""
        ],
        "leccion": "multiplicar"
      },
      {
        "pregunta": "Clasifica $x-y=2$ y $2x-2y=7$.",
        "opciones": [
          "Sin solución.",
          "Infinitas soluciones.",
          "Solo (0,0)."
        ],
        "correcta": 0,
        "pista": "Resta dos veces la primera de la segunda.",
        "explicacion": "Se obtiene 0=3, una contradicción.",
        "errores": [
          "",
          "El término derecho debería ser 4 para repetir la primera.",
          "El origen no cumple ninguna."
        ],
        "leccion": "casos"
      },
      {
        "pregunta": "Clasifica $x-2y=1$ y $3x-6y=3$.",
        "opciones": [
          "Sin solución.",
          "Infinitas soluciones.",
          "Solo (1,0)."
        ],
        "correcta": 1,
        "pista": "La segunda es el triple de la primera.",
        "explicacion": "Representan la misma recta; (1,0) y (3,1) son dos de sus infinitas soluciones.",
        "errores": [
          "No hay contradicción.",
          "",
          "(3,1) también cumple ambas."
        ],
        "leccion": "casos"
      },
      {
        "pregunta": "En $x+y=0$ y $2x+2y=0$…",
        "opciones": [
          "no hay solución.",
          "solo sirve (0,0).",
          "hay infinitas soluciones con y=−x."
        ],
        "correcta": 2,
        "pista": "La segunda repite la primera.",
        "explicacion": "El origen y todos los pares (t,−t) cumplen ambas.",
        "errores": [
          "El origen sí sirve.",
          "(1,−1) también sirve.",
          ""
        ],
        "leccion": "casos"
      }
    ],
    "cierreIntroduccion": "Resuelve primero en tu cuaderno. Comprueba cada par en las dos ecuaciones y explica el procedimiento antes de consultar la respuesta.",
    "retosCierre": [
      "Resuelve un sistema de dos maneras y compara los pasos.",
      "Explica qué significan 0=3 y 0=0 al eliminar, con un ejemplo de cada caso."
    ],
    "puenteAnterior": {
      "titulo": "Conecta con el subtema anterior",
      "descripcion": "Repasa la base que necesitas. Las respuestas se conservan durante esta sesión.",
      "tema": "t1-sistemas-grafico",
      "leccion": "interseccion"
    }
  },
  "data/modules/t1-u1-eval.json": {
    "id": "t1-u1-eval1",
    "titulo": "Evaluación formativa: comprueba y refuerza",
    "temaNumero": "1.3",
    "unidadId": "unidad-1",
    "unidadTitulo": "Subtema 1.3 · Usa lo que has aprendido",
    "trimestre": 1,
    "paginasLibro": "18-19",
    "version": 3,
    "introduccion": "Practica una habilidad a la vez. Intenta resolver, comprueba tu respuesta y vuelve al repaso cuando lo necesites.",
    "objetivo": "Comprobar operaciones con números reales, productos notables y factorización de los subtemas 1.1 y 1.2. Esta práctica no introduce fórmulas nuevas ni asigna una nota.",
    "lecciones": [
      {
        "id": "operaciones",
        "titulo": "1. Operaciones y signos",
        "tituloRuta": "1. Operaciones y signos",
        "descripcionRuta": "Resolver operaciones respetando signos y paréntesis.",
        "fase": "PRACTICA POR HABILIDADES",
        "bases": [
          "Suma, resta, multiplicación y orden de las operaciones."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-u1-tema1",
            "leccion": "operaciones",
            "titulo": "Operar con sentido"
          }
        ],
        "meta": "Resolver operaciones respetando signos y paréntesis.",
        "paraQue": "Para comprobar tu procedimiento y reconocer qué necesitas reforzar.",
        "explicacion": [
          "Resuelve primero los ejercicios en tu cuaderno. Si necesitas recordar el procedimiento, lee este ejemplo o abre el repaso. Consultar ayuda también cuenta como práctica, pero no como respuesta sin apoyo."
        ],
        "ejemplo": "Calcula $-3+2(5-1)$.",
        "pasos": [
          "Resuelve el paréntesis: $5-1=4$.",
          "Multiplica: $2\\times4=8$.",
          "Suma: $-3+8=5$."
        ],
        "preguntas": [
          {
            "pregunta": "Calcula $-4+3\\times2$.",
            "opciones": [
              "$-2$",
              "$2$",
              "$-14$"
            ],
            "correcta": 1,
            "pista": "Multiplica antes de sumar.",
            "explicacion": "3 × 2 = 6; luego −4 + 6 = 2.",
            "errores": [
              "Sumaste −4 y 3 antes de multiplicar.",
              "",
              "La multiplicación es positiva; después se suma a −4."
            ]
          },
          {
            "pregunta": "Calcula $(-3)(-2)-5$.",
            "opciones": [
              "$-11$",
              "$11$",
              "$1$"
            ],
            "correcta": 2,
            "pista": "Dos negativos multiplicados dan un positivo.",
            "explicacion": "(−3)(−2) = 6; luego 6 − 5 = 1.",
            "errores": [
              "El producto de dos negativos es positivo.",
              "Se resta 5; no se suma.",
              ""
            ]
          },
          {
            "pregunta": "Calcula $18\\div(3+3)$.",
            "opciones": [
              "$3$",
              "$9$",
              "$6$"
            ],
            "correcta": 0,
            "pista": "Resuelve el paréntesis completo.",
            "explicacion": "3 + 3 = 6; luego 18 ÷ 6 = 3.",
            "errores": [
              "",
              "Dividiste antes de terminar el paréntesis.",
              "6 es el valor del paréntesis; falta dividir."
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "reales",
        "titulo": "2. Fracciones y números reales",
        "tituloRuta": "2. Fracciones y números reales",
        "descripcionRuta": "Reconocer cantidades equivalentes y distinguir valores exactos de aproximaciones.",
        "fase": "PRACTICA POR HABILIDADES",
        "bases": [
          "Fracciones, decimales, raíces cuadradas y comparación."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-u1-tema1",
            "leccion": "fracciones",
            "titulo": "Fracciones y decimales"
          },
          {
            "tema": "t1-u1-tema1",
            "leccion": "raices",
            "titulo": "Raíces y números reales"
          }
        ],
        "meta": "Reconocer cantidades equivalentes y distinguir valores exactos de aproximaciones.",
        "paraQue": "Para comprobar tu procedimiento y reconocer qué necesitas reforzar.",
        "explicacion": [
          "Resuelve primero los ejercicios en tu cuaderno. Si necesitas recordar el procedimiento, lee este ejemplo o abre el repaso. Consultar ayuda también cuenta como práctica, pero no como respuesta sin apoyo."
        ],
        "ejemplo": "Compara $\\frac{3}{4}$ y $0.8$.",
        "pasos": [
          "Convierte la fracción: $3\\div4=0.75$.",
          "Compara: $0.75<0.80$.",
          "Por tanto, $\\frac{3}{4}<0.8$."
        ],
        "preguntas": [
          {
            "pregunta": "¿Qué número es igual a $\\frac{2}{5}$?",
            "opciones": [
              "$0.25$",
              "$0.4$",
              "$2.5$"
            ],
            "correcta": 1,
            "pista": "Divide el numerador entre el denominador.",
            "explicacion": "2 ÷ 5 = 0.4.",
            "errores": [
              "0.25 equivale a un cuarto.",
              "",
              "Invertiste el orden de la división."
            ]
          },
          {
            "pregunta": "¿Cuál afirmación sobre $\\sqrt{2}$ es correcta?",
            "opciones": [
              "Es exactamente 1.41.",
              "Es racional porque se puede aproximar.",
              "Es irracional y está entre 1 y 2."
            ],
            "correcta": 2,
            "pista": "Compara los cuadrados de 1 y 2.",
            "explicacion": "1² < 2 < 2², así que la raíz está entre 1 y 2. Su decimal es infinito y no periódico; 1.41 es solo una aproximación.",
            "errores": [
              "1.41 es una aproximación, no el valor exacto.",
              "Una aproximación decimal no convierte la raíz en racional.",
              ""
            ]
          },
          {
            "pregunta": "¿Cuál es el orden de menor a mayor?",
            "opciones": [
              "−0.5, 0, 0.25",
              "0, −0.5, 0.25",
              "0.25, 0, −0.5"
            ],
            "correcta": 0,
            "pista": "Un negativo es menor que cero; un positivo es mayor.",
            "explicacion": "−0.5 < 0 < 0.25.",
            "errores": [
              "",
              "−0.5 es menor que cero.",
              "Ese orden va de mayor a menor."
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "opuestos",
        "titulo": "3. Opuesto e inverso",
        "tituloRuta": "3. Opuesto e inverso",
        "descripcionRuta": "Distinguir el número que lleva una suma a cero del que lleva un producto a uno.",
        "fase": "PRACTICA POR HABILIDADES",
        "bases": [
          "Suma con signos y multiplicación de fracciones."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-u1-tema1",
            "leccion": "inversos",
            "titulo": "Opuesto e inverso"
          }
        ],
        "meta": "Distinguir el número que lleva una suma a cero del que lleva un producto a uno.",
        "paraQue": "Para comprobar tu procedimiento y reconocer qué necesitas reforzar.",
        "explicacion": [
          "Resuelve primero los ejercicios en tu cuaderno. Si necesitas recordar el procedimiento, lee este ejemplo o abre el repaso. Consultar ayuda también cuenta como práctica, pero no como respuesta sin apoyo."
        ],
        "ejemplo": "Encuentra el opuesto y el inverso de $-4$.",
        "pasos": [
          "Para el opuesto, busca una suma igual a cero: $-4+4=0$. El opuesto es 4.",
          "Para el inverso, busca un producto igual a uno: $(-4)(-\\frac{1}{4})=1$.",
          "El inverso es $-\\frac{1}{4}$. Son dos operaciones diferentes."
        ],
        "preguntas": [
          {
            "pregunta": "¿Cuál es el opuesto de −7?",
            "opciones": [
              "−1/7",
              "−7",
              "7"
            ],
            "correcta": 2,
            "pista": "Busca qué sumar para obtener cero.",
            "explicacion": "−7 + 7 = 0; el opuesto es 7.",
            "errores": [
              "Confundiste el inverso con el opuesto.",
              "−7 + (−7) no da cero.",
              ""
            ]
          },
          {
            "pregunta": "¿Cuál es el inverso de $\\frac{2}{3}$?",
            "opciones": [
              "$\\frac{3}{2}$",
              "$-\\frac{2}{3}$",
              "$0$"
            ],
            "correcta": 0,
            "pista": "Busca una fracción cuyo producto dé 1.",
            "explicacion": "(2/3) × (3/2) = 6/6 = 1.",
            "errores": [
              "",
              "Ese es el opuesto aditivo.",
              "Multiplicar por cero da cero."
            ]
          },
          {
            "pregunta": "¿Tiene cero inverso multiplicativo?",
            "opciones": [
              "Sí, es cero.",
              "No, ningún número multiplicado por cero da uno.",
              "Sí, es uno."
            ],
            "correcta": 1,
            "pista": "Comprueba qué ocurre al multiplicar por cero.",
            "explicacion": "0 × cualquier número = 0, nunca 1. Por eso cero no tiene inverso multiplicativo.",
            "errores": [
              "0 × 0 = 0.",
              "",
              "0 × 1 = 0."
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "productos",
        "titulo": "4. Productos notables",
        "tituloRuta": "4. Productos notables",
        "descripcionRuta": "Desarrollar binomios sin omitir productos y cuidar los signos.",
        "fase": "PRACTICA POR HABILIDADES",
        "bases": [
          "Distributiva y cuadrados de suma y diferencia."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-u1-tema2",
            "leccion": "cuadrado-suma",
            "titulo": "Cuadrado de una suma"
          },
          {
            "tema": "t1-u1-tema2",
            "leccion": "cuadrado-resta",
            "titulo": "Cuadrado de una diferencia"
          },
          {
            "tema": "t1-u1-tema2",
            "leccion": "conjugados",
            "titulo": "Suma por diferencia"
          }
        ],
        "meta": "Desarrollar binomios sin omitir productos y cuidar los signos.",
        "paraQue": "Para comprobar tu procedimiento y reconocer qué necesitas reforzar.",
        "explicacion": [
          "Resuelve primero los ejercicios en tu cuaderno. Si necesitas recordar el procedimiento, lee este ejemplo o abre el repaso. Consultar ayuda también cuenta como práctica, pero no como respuesta sin apoyo."
        ],
        "ejemplo": "Desarrolla $(x+2)^2$.",
        "pasos": [
          "Escribe dos factores: $(x+2)(x+2)$.",
          "Distribuye: $x^2+2x+2x+4$.",
          "Reúne términos semejantes: $x^2+4x+4$."
        ],
        "preguntas": [
          {
            "pregunta": "Desarrolla $(x+4)^2$.",
            "opciones": [
              "$x^2+16$",
              "$x^2+8x+16$",
              "$x^2+4x+16$"
            ],
            "correcta": 1,
            "pista": "Multiplica (x+4)(x+4).",
            "explicacion": "x² + 4x + 4x + 16 = x² + 8x + 16.",
            "errores": [
              "Faltan los dos productos cruzados.",
              "",
              "Falta uno de los dos productos de 4x."
            ]
          },
          {
            "pregunta": "Desarrolla $(x-3)^2$.",
            "opciones": [
              "$x^2-6x+9$",
              "$x^2-9$",
              "$x^2-6x-9$"
            ],
            "correcta": 0,
            "pista": "El producto (−3)(−3) es positivo.",
            "explicacion": "(x−3)(x−3) = x² − 3x − 3x + 9 = x² − 6x + 9.",
            "errores": [
              "",
              "Eso corresponde a (x+3)(x−3).",
              "Dos negativos multiplicados dan +9."
            ]
          },
          {
            "pregunta": "Calcula $(x+5)(x-5)$.",
            "opciones": [
              "$x^2-10x+25$",
              "$x^2+25$",
              "$x^2-25$"
            ],
            "correcta": 2,
            "pista": "Los productos centrales son −5x y +5x.",
            "explicacion": "x² − 5x + 5x − 25 = x² − 25.",
            "errores": [
              "Confundiste los conjugados con un cuadrado de diferencia.",
              "El último producto es 5 × (−5) = −25.",
              ""
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "factorizar",
        "titulo": "5. Factorización",
        "tituloRuta": "5. Factorización",
        "descripcionRuta": "Elegir un procedimiento según los términos de la expresión.",
        "fase": "PRACTICA POR HABILIDADES",
        "bases": [
          "Factor común, trinomio cuadrado perfecto y diferencia de cuadrados."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-u1-tema2",
            "leccion": "factor-cuadrados",
            "titulo": "Factorizar cuadrados: un caso a la vez"
          },
          {
            "tema": "t1-u1-tema2",
            "leccion": "factor-comun",
            "titulo": "Factor común"
          }
        ],
        "meta": "Elegir un procedimiento según los términos de la expresión.",
        "paraQue": "Para comprobar tu procedimiento y reconocer qué necesitas reforzar.",
        "explicacion": [
          "Resuelve primero los ejercicios en tu cuaderno. Si necesitas recordar el procedimiento, lee este ejemplo o abre el repaso. Consultar ayuda también cuenta como práctica, pero no como respuesta sin apoyo."
        ],
        "ejemplo": "Factoriza $x^2-16$.",
        "pasos": [
          "Hay dos términos separados por una resta.",
          "Ambos son cuadrados: $x^2$ y $4^2$.",
          "Escribe una suma y una resta: $(x+4)(x-4)$.",
          "Comprueba multiplicando: $x^2-4x+4x-16=x^2-16$."
        ],
        "preguntas": [
          {
            "pregunta": "Extrae el factor común de $6x+9$.",
            "opciones": [
              "$6(x+9)$",
              "$3(2x+3)$",
              "$3(2x+9)$"
            ],
            "correcta": 1,
            "pista": "¿Qué número divide tanto a 6 como a 9?",
            "explicacion": "6x = 3(2x) y 9 = 3(3), así que 6x + 9 = 3(2x+3).",
            "errores": [
              "Al desarrollar obtienes 6x+54.",
              "",
              "Al desarrollar obtienes 6x+27."
            ]
          },
          {
            "pregunta": "Factoriza $x^2+8x+16$.",
            "opciones": [
              "$(x+4)^2$",
              "$(x+8)^2$",
              "$(x+4)(x-4)$"
            ],
            "correcta": 0,
            "pista": "16 = 4². Comprueba si el central es 2 × x × 4.",
            "explicacion": "2 × x × 4 = 8x; por eso x² + 8x + 16 = (x+4)².",
            "errores": [
              "",
              "Ese cuadrado da x²+16x+64.",
              "Los conjugados dan x²−16."
            ]
          },
          {
            "pregunta": "Factoriza $x^2-49$.",
            "opciones": [
              "$(x-7)^2$",
              "$(x+49)(x-49)$",
              "$(x+7)(x-7)$"
            ],
            "correcta": 2,
            "pista": "49 = 7². Son dos cuadrados separados por resta.",
            "explicacion": "(x+7)(x−7) = x² − 7x + 7x − 49 = x² − 49.",
            "errores": [
              "Ese cuadrado introduce un término −14x.",
              "La base del cuadrado 49 es 7.",
              ""
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "cubos",
        "titulo": "6. Cubos: distinguir las expresiones",
        "tituloRuta": "6. Cubos: distinguir las expresiones",
        "descripcionRuta": "Diferenciar un cubo de binomio de una suma o diferencia de cubos.",
        "fase": "PRACTICA POR HABILIDADES",
        "bases": [
          "Potencias cúbicas, distributiva y factorización de cubos."
        ],
        "refuerzos": [],
        "repasos": [
          {
            "tema": "t1-u1-tema2",
            "leccion": "factor-cubos",
            "titulo": "Sumas y diferencias de cubos"
          },
          {
            "tema": "t1-u1-tema2",
            "leccion": "cubos",
            "titulo": "Cubo de un binomio"
          }
        ],
        "meta": "Diferenciar un cubo de binomio de una suma o diferencia de cubos.",
        "paraQue": "Para comprobar tu procedimiento y reconocer qué necesitas reforzar.",
        "explicacion": [
          "Resuelve primero los ejercicios en tu cuaderno. Si necesitas recordar el procedimiento, lee este ejemplo o abre el repaso. Consultar ayuda también cuenta como práctica, pero no como respuesta sin apoyo."
        ],
        "ejemplo": "Compara $(x+2)^3$ y $x^3+8$ usando $x=1$.",
        "pasos": [
          "En el primero, el paréntesis completo es la base: $(1+2)^3=3^3=27$.",
          "En el segundo, cada término es un cubo: $1^3+2^3=1+8=9$.",
          "27 y 9 son diferentes. Este ejemplo demuestra que las dos expresiones no son iguales para todos los valores de x."
        ],
        "preguntas": [
          {
            "pregunta": "¿Qué significa $(x+1)^3$?",
            "opciones": [
              "$x^3+1$",
              "$(x+1)(x+1)(x+1)$",
              "$(x+1)(x+1)$"
            ],
            "correcta": 1,
            "pista": "Al cubo significa multiplicar la base tres veces.",
            "explicacion": "La base completa es x+1; hay tres factores iguales.",
            "errores": [
              "Elevar una suma al cubo no es elevar cada sumando por separado.",
              "",
              "Dos factores corresponden al cuadrado."
            ]
          },
          {
            "pregunta": "Factoriza $x^3-8$.",
            "opciones": [
              "$(x-2)^3$",
              "$(x-2)(x^2-2x+4)$",
              "$(x-2)(x^2+2x+4)$"
            ],
            "correcta": 2,
            "pista": "8 = 2³. Usa diferencia de cubos.",
            "explicacion": "(x−2)(x²+2x+4) = x³+2x²+4x−2x²−4x−8 = x³−8.",
            "errores": [
              "El cubo de diferencia incluye términos intermedios.",
              "En diferencia de cubos, el central del segundo factor lleva suma.",
              ""
            ]
          },
          {
            "pregunta": "Desarrolla $(x+1)^3$.",
            "opciones": [
              "$x^3+3x^2+3x+1$",
              "$x^3+1$",
              "$x^3+2x^2+x+1$"
            ],
            "correcta": 0,
            "pista": "Multiplica (x²+2x+1) por (x+1).",
            "explicacion": "x³ + x² + 2x² + 2x + x + 1 = x³ + 3x² + 3x + 1.",
            "errores": [
              "",
              "Faltan los productos intermedios.",
              "Al reunir, los coeficientes centrales son 3 y 3."
            ]
          }
        ],
        "ejemplosExtra": []
      }
    ],
    "diagnostico": [
      {
        "leccion": "operaciones",
        "pregunta": "Calcula −5 + 8.",
        "opciones": [
          "−13",
          "3",
          "13"
        ],
        "correcta": 1,
        "pista": "Desde −5, suma ocho unidades.",
        "explicacion": "−5 + 8 = 3.",
        "errores": [
          "Sumaste los valores sin respetar los signos.",
          "",
          "Cuando los signos son distintos, resta los valores absolutos."
        ]
      },
      {
        "leccion": "reales",
        "pregunta": "¿Qué decimal equivale a $\\frac{1}{2}$?",
        "opciones": [
          "0.2",
          "0.5",
          "2"
        ],
        "correcta": 1,
        "pista": "Divide 1 entre 2.",
        "explicacion": "1 ÷ 2 = 0.5.",
        "errores": [
          "El denominador no indica una cifra decimal.",
          "",
          "Invertiste la división."
        ]
      },
      {
        "leccion": "opuestos",
        "pregunta": "¿Qué número sumado a −3 da cero?",
        "opciones": [
          "−3",
          "1/3",
          "3"
        ],
        "correcta": 2,
        "pista": "Se busca el opuesto aditivo.",
        "explicacion": "−3 + 3 = 0.",
        "errores": [
          "−3 + (−3) = −6.",
          "1/3 no lleva la suma a cero.",
          ""
        ]
      },
      {
        "leccion": "productos",
        "pregunta": "¿Cuál es el desarrollo de $(x+1)^2$?",
        "opciones": [
          "$x^2+2x+1$",
          "$x^2+1$",
          "$x^2+x+1$"
        ],
        "correcta": 0,
        "pista": "Escribe (x+1)(x+1).",
        "explicacion": "x² + x + x + 1 = x² + 2x + 1.",
        "errores": [
          "",
          "Faltan los productos cruzados.",
          "Solo contaste uno de los dos términos x."
        ]
      },
      {
        "leccion": "factorizar",
        "pregunta": "¿Qué factorización equivale a $2x+4$?",
        "opciones": [
          "$2(x+4)$",
          "$4(x+2)$",
          "$2(x+2)$"
        ],
        "correcta": 2,
        "pista": "Extrae el factor 2 y comprueba distribuyendo.",
        "explicacion": "2(x+2) = 2x+4.",
        "errores": [
          "Ese producto da 2x+8.",
          "Ese producto da 4x+8.",
          ""
        ]
      },
      {
        "leccion": "cubos",
        "pregunta": "¿Qué significa $x^3$?",
        "opciones": [
          "$3x$",
          "$x\\times x\\times x$",
          "$x+x+x$"
        ],
        "correcta": 1,
        "pista": "El exponente cuenta factores iguales.",
        "explicacion": "x³ significa x multiplicado por sí mismo tres veces.",
        "errores": [
          "3x es tres veces x, no su cubo.",
          "",
          "Sumar tres veces x da 3x."
        ]
      }
    ],
    "cierre": [
      {
        "pregunta": "Calcula −2 + 4 × (3−1).",
        "opciones": [
          "2",
          "6",
          "−12"
        ],
        "correcta": 1,
        "pista": "Primero paréntesis, después multiplicación y al final suma.",
        "explicacion": "3−1 = 2; 4×2 = 8; −2+8 = 6.",
        "errores": [
          "Sumaste antes de multiplicar.",
          "",
          "Revisa el signo del producto positivo."
        ],
        "leccion": "operaciones"
      },
      {
        "pregunta": "¿Qué número es mayor: $\\frac{3}{5}$ o $0.7$?",
        "opciones": [
          "3/5",
          "Son iguales.",
          "0.7"
        ],
        "correcta": 2,
        "pista": "Convierte la fracción a decimal.",
        "explicacion": "3/5 = 0.6; como 0.6 < 0.7, el mayor es 0.7.",
        "errores": [
          "3/5 equivale a 0.6.",
          "0.6 y 0.7 son diferentes.",
          ""
        ],
        "leccion": "reales"
      },
      {
        "pregunta": "¿Cuál es el inverso multiplicativo de −5?",
        "opciones": [
          "−1/5",
          "5",
          "1/5"
        ],
        "correcta": 0,
        "pista": "El producto debe dar uno.",
        "explicacion": "(−5)(−1/5) = 1.",
        "errores": [
          "",
          "5 es el opuesto; su suma con −5 da cero.",
          "(−5)(1/5) = −1."
        ],
        "leccion": "opuestos"
      },
      {
        "pregunta": "Desarrolla $(x+6)^2$.",
        "opciones": [
          "$x^2+36$",
          "$x^2+12x+36$",
          "$x^2+6x+36$"
        ],
        "correcta": 1,
        "pista": "Escribe (x+6)(x+6) y distribuye.",
        "explicacion": "x²+6x+6x+36 = x²+12x+36.",
        "errores": [
          "Faltan los productos cruzados.",
          "",
          "Falta un producto de 6x."
        ],
        "leccion": "productos"
      },
      {
        "pregunta": "Factoriza $x^2-36$.",
        "opciones": [
          "$(x-6)^2$",
          "$(x+36)(x-36)$",
          "$(x+6)(x-6)$"
        ],
        "correcta": 2,
        "pista": "36 = 6². Identifica el caso de dos términos con resta.",
        "explicacion": "(x+6)(x−6) = x²−36.",
        "errores": [
          "Ese cuadrado introduce −12x.",
          "La base es 6, no 36.",
          ""
        ],
        "leccion": "factorizar"
      },
      {
        "pregunta": "Factoriza $4x^2-16$.",
        "opciones": [
          "$4(x+2)(x-2)$",
          "$4(x-4)^2$",
          "$4(x+4)(x-4)$"
        ],
        "correcta": 0,
        "pista": "Primero extrae 4. Luego factoriza x²−4.",
        "explicacion": "4x²−16 = 4(x²−4) = 4(x+2)(x−2).",
        "errores": [
          "",
          "Al desarrollar aparece un término central.",
          "4(x²−16) da 4x²−64."
        ],
        "leccion": "factorizar"
      },
      {
        "pregunta": "Factoriza $x^3+27$.",
        "opciones": [
          "$(x+3)^3$",
          "$(x+3)(x^2-3x+9)$",
          "$(x+3)(x^2+3x+9)$"
        ],
        "correcta": 1,
        "pista": "27 = 3³. Es suma de cubos.",
        "explicacion": "(x+3)(x²−3x+9) = x³−3x²+9x+3x²−9x+27 = x³+27.",
        "errores": [
          "Un cubo de binomio tiene términos intermedios.",
          "",
          "En suma de cubos, el central del segundo factor lleva resta."
        ],
        "leccion": "cubos"
      },
      {
        "pregunta": "¿Es $x^2+7x+9$ un trinomio cuadrado perfecto?",
        "opciones": [
          "Sí, porque tiene tres términos.",
          "Sí, porque 9 = 3².",
          "No: el central debería ser 6x."
        ],
        "correcta": 2,
        "pista": "Comprueba 2 × x × 3.",
        "explicacion": "Los extremos sugieren x y 3, pero el doble producto es 6x y no 7x.",
        "errores": [
          "Tres términos no bastan.",
          "También debe coincidir el término central.",
          ""
        ],
        "leccion": "factorizar"
      }
    ],
    "cierreIntroduccion": "Ahora combina las habilidades anteriores. Anota tu procedimiento antes de comprobar cada respuesta. Si consultas una explicación, vuelve al bloque recomendado y prueba otro ejemplo.",
    "retosCierre": [
      "Explica por qué (x−3)² y x²−9 son distintos. Desarrolla ambos o usa x=4.",
      "Inventa una expresión con factor común y comprueba tu factorización usando la distributiva.",
      "Explica con un ejemplo la diferencia entre opuesto e inverso multiplicativo."
    ]
  },
  "data/modules/t1-u1-tema1.json": {
    "id": "t1-u1-tema1",
    "titulo": "Números reales: comprender antes de memorizar",
    "unidadTitulo": "Tema 1 · Bases, números y operaciones",
    "unidadId": "unidad-1",
    "trimestre": 1,
    "paginasLibro": "12-15",
    "version": 2,
    "introduccion": "Aquí cada idea tiene un punto de partida. Descubre qué necesitas repasar, entiende el porqué y practica antes de avanzar.",
    "lecciones": [
      {
        "id": "operaciones",
        "titulo": "Operar con sentido",
        "bases": [
          "Sumar y restar cantidades; reconocer multiplicación y división."
        ],
        "meta": "Resolver operaciones con signos y paréntesis.",
        "paraQue": "Para calcular saldos y comprender las operaciones de las próximas lecciones.",
        "explicacion": [
          "Un signo negativo puede indicar una cantidad por debajo de cero. En una recta, sumar un positivo desplaza a la derecha; sumar un negativo, a la izquierda.",
          "En $-3+5$, partes de $-3$ y avanzas cinco: llegas a $2$. Restar un número equivale a sumar su opuesto: $4-(-2)=4+2=6$.",
          "Multiplicar $3\\times4$ representa tres grupos de cuatro. Dividir $12\\div3$ puede significar repartir doce en tres grupos iguales: cuatro por grupo. Comprueba la división multiplicando $3\\times4=12$.",
          "En un producto o cociente de dos números no nulos, signos iguales dan positivo y signos distintos dan negativo. Por ejemplo, $(-3)\\times2=-6$. La distributiva ayuda a justificar $(-3)\\times(-2)=6$: el producto $(-3)\\times(2+(-2))$ debe ser cero.",
          "Resuelve primero los paréntesis; después potencias y raíces; luego productos y cocientes de izquierda a derecha; finalmente sumas y restas de izquierda a derecha."
        ],
        "ejemplo": "Calcula $2+3(4-1)$.",
        "pasos": [
          "Primero el paréntesis: $4-1=3$.",
          "Después el producto: $3\\times3=9$.",
          "Finalmente la suma: $2+9=11$.",
          "El resultado es $11$; sumar $2+3$ primero cambiaría la expresión."
        ],
        "preguntas": [
          {
            "pregunta": "Calcula $-3+5$.",
            "opciones": [
              "$2$",
              "$-8$",
              "$8$"
            ],
            "correcta": 0,
            "pista": "Parte de −3 y avanza cinco lugares hacia la derecha.",
            "explicacion": "Los primeros tres pasos llegan a cero; los otros dos llegan a 2.",
            "errores": [
              "",
              "Sumaste las magnitudes y conservaste el negativo. Los sumandos tienen signos distintos.",
              "Sumaste las magnitudes sin considerar que −3 representa una posición bajo cero."
            ]
          },
          {
            "pregunta": "Calcula $2+3\\times4$.",
            "opciones": [
              "$20$",
              "$14$",
              "$24$"
            ],
            "correcta": 1,
            "pista": "Resuelve el producto antes de sumar.",
            "explicacion": "$3\\times4=12$ y $2+12=14$.",
            "errores": [
              "Sumar primero produce (2+3)×4, que es otra expresión.",
              "",
              "El 2 es un sumando, no un factor de todo el producto."
            ]
          },
          {
            "pregunta": "Calcula $4-(-2)$.",
            "opciones": [
              "$2$",
              "$-6$",
              "$6$"
            ],
            "correcta": 2,
            "pista": "Restar −2 equivale a sumar su opuesto, +2.",
            "explicacion": "$4-(-2)=4+2=6$.",
            "errores": [
              "Leíste −(−2) como −2; el opuesto de −2 es +2.",
              "El 4 sigue siendo positivo.",
              ""
            ]
          }
        ],
        "visual": "recta",
        "refuerzos": []
      },
      {
        "id": "fracciones",
        "titulo": "Fracciones y decimales",
        "bases": [
          "Dividir y multiplicar; identificar partes iguales."
        ],
        "meta": "Relacionar una fracción con su valor decimal y operar con fracciones sencillas.",
        "paraQue": "Para entender qué significa un número racional.",
        "explicacion": [
          "En $\\frac{3}{4}$, el denominador 4 indica en cuántas partes iguales se divide una unidad; el numerador 3, cuántas se toman. La barra también significa división: $3\\div4=0{,}75$. El denominador nunca puede ser cero.",
          "Multiplicar numerador y denominador por el mismo número no nulo conserva el valor: $\\frac12=\\frac24=0{,}5$. En un decimal, las posiciones representan décimas, centésimas y milésimas: $0{,}75=\\frac{75}{100}$.",
          "Para sumar fracciones, expresa las partes con el mismo tamaño: $\\frac12+\\frac14=\\frac24+\\frac14=\\frac34$. No se suman los denominadores.",
          "Para multiplicar fracciones, multiplica numeradores y denominadores: $\\frac23\\times\\frac34=\\frac6{12}=\\frac12$. Para dividir entre una fracción no nula, multiplica por su recíproco: $\\frac12\\div\\frac34=\\frac12\\times\\frac43=\\frac23$.",
          "Un decimal finito termina; un decimal periódico repite un bloque indefinidamente. Por ejemplo, $\\frac13=0{,}333\\ldots=0{,}\\overline3$."
        ],
        "ejemplo": "Expresa $0{,}75$ como una fracción simplificada.",
        "pasos": [
          "Hay 75 centésimas: $0{,}75=\\frac{75}{100}$.",
          "Divide ambos términos entre 25: $\\frac{75}{100}=\\frac34$.",
          "Comprueba: $3\\div4=0{,}75$."
        ],
        "preguntas": [
          {
            "pregunta": "¿Qué fracción representa $0{,}5$?",
            "opciones": [
              "$\\frac15$",
              "$\\frac12$",
              "$\\frac51$"
            ],
            "correcta": 1,
            "pista": "Cinco décimas son 5/10.",
            "explicacion": "$0{,}5=5/10=1/2$.",
            "errores": [
              "El 5 está en la posición de las décimas; no es el denominador.",
              "",
              "5/1 representa cinco unidades, no media unidad."
            ]
          },
          {
            "pregunta": "Calcula $\\frac12+\\frac14$.",
            "opciones": [
              "$\\frac26$",
              "$\\frac24$",
              "$\\frac34$"
            ],
            "correcta": 2,
            "pista": "Convierte 1/2 en 2/4 antes de sumar.",
            "explicacion": "Dos cuartos más un cuarto son tres cuartos.",
            "errores": [
              "Sumaste denominadores; las partes deben tener el mismo tamaño.",
              "Falta sumar el cuarto de la segunda fracción.",
              ""
            ]
          },
          {
            "pregunta": "Calcula $\\frac23\\times\\frac34$.",
            "opciones": [
              "$\\frac12$",
              "$\\frac57$",
              "$\\frac68$"
            ],
            "correcta": 0,
            "pista": "Multiplica arriba y abajo por separado; luego simplifica.",
            "explicacion": "$2×3=6$ y $3×4=12$; $6/12=1/2$.",
            "errores": [
              "",
              "Sumaste los términos en lugar de multiplicarlos.",
              "El denominador es 3×4=12, no 2×4."
            ]
          }
        ],
        "visual": null,
        "refuerzos": [
          "operaciones"
        ]
      },
      {
        "id": "racionales",
        "titulo": "Una misma cantidad, varias familias",
        "bases": [
          "Fracciones equivalentes y decimales."
        ],
        "meta": "Reconocer naturales, enteros y racionales, sin tratarlos como categorías excluyentes.",
        "paraQue": "Para clasificar números por lo que representan y por cómo pueden escribirse.",
        "explicacion": [
          "Los naturales sirven para contar. En esta ruta usamos $\\mathbb N=\\{0,1,2,3,\\ldots\\}$; algunos textos comienzan en 1. Declaramos esta convención para evitar confusiones.",
          "Los enteros incluyen los naturales y sus negativos: $\\mathbb Z=\\{\\ldots,-2,-1,0,1,2,\\ldots\\}$.",
          "Un racional es un número que puede escribirse como $a/b$, con $a$ y $b$ enteros y $b\\ne0$. Por eso $3=3/1$ es racional, aunque no se vea una fracción.",
          "Los decimales finitos y periódicos son racionales: $0{,}75=3/4$ y $0{,}\\overline3=1/3$. Que un decimal sea infinito no basta para llamarlo irracional.",
          "El símbolo $\\in$ se lee «pertenece a» y $\\subset$ indica inclusión entre conjuntos. $\\mathbb N\\subset\\mathbb Z\\subset\\mathbb Q$: cada natural es entero y cada entero es racional."
        ],
        "ejemplo": "Clasifica $-3$ en todas las familias conocidas.",
        "pasos": [
          "Es entero porque es un número negativo sin parte fraccionaria.",
          "También es racional: $-3=-3/1$.",
          "No es natural según nuestra convención."
        ],
        "preguntas": [
          {
            "pregunta": "¿Por qué $5$ es racional?",
            "opciones": [
              "Porque es positivo.",
              "Porque $5=5/1$.",
              "Porque tiene una raíz."
            ],
            "correcta": 1,
            "pista": "Busca una escritura como cociente de enteros.",
            "explicacion": "5/1 tiene numerador y denominador enteros, y el denominador no es cero.",
            "errores": [
              "Hay irracionales positivos, como √2.",
              "",
              "Tener una raíz no determina que un número sea racional."
            ]
          },
          {
            "pregunta": "¿A cuáles de estas familias pertenece $-2$?",
            "opciones": [
              "Solo a los naturales.",
              "Solo a los racionales.",
              "A los enteros y a los racionales."
            ],
            "correcta": 2,
            "pista": "Puedes escribir −2 como −2/1.",
            "explicacion": "−2 es entero y también es un cociente de enteros.",
            "errores": [
              "Los negativos no son naturales.",
              "Es racional, pero también entero.",
              ""
            ]
          },
          {
            "pregunta": "El decimal $0{,}\\overline3$ es…",
            "opciones": [
              "racional, porque equivale a $1/3$.",
              "irracional, porque es infinito.",
              "entero, porque repite un dígito."
            ],
            "correcta": 0,
            "pista": "Un decimal infinito puede tener un período.",
            "explicacion": "El bloque 3 se repite indefinidamente y el número equivale a 1/3.",
            "errores": [
              "",
              "Infinito y periódico sigue siendo racional.",
              "Repetir un dígito no elimina la parte decimal."
            ]
          }
        ],
        "visual": null,
        "refuerzos": [
          "fracciones"
        ]
      },
      {
        "id": "raices",
        "titulo": "Raíces, irracionales y números reales",
        "bases": [
          "Multiplicación, decimales y números racionales."
        ],
        "meta": "Entender una raíz cuadrada y distinguir un valor exacto de una aproximación.",
        "paraQue": "Para reconocer cantidades que una fracción de enteros no puede expresar exactamente.",
        "explicacion": [
          "Elevar al cuadrado es multiplicar un número por sí mismo: $3^2=3\\times3=9$. La raíz cuadrada principal de 9 es el número no negativo cuyo cuadrado es 9: $\\sqrt9=3$.",
          "La ecuación $x^2=9$ tiene dos soluciones, 3 y −3; el símbolo $\\sqrt9$ representa solo 3. En los reales no hay raíz cuadrada de un número negativo.",
          "Como $1^2<2<2^2$, $\\sqrt2$ está entre 1 y 2. Afinando: $1{,}4^2=1{,}96$ y $1{,}5^2=2{,}25$; está entre 1,4 y 1,5.",
          "$\\sqrt2$ es irracional: no existe una fracción de enteros que lo represente exactamente. Este hecho requiere una demostración, disponible debajo; no se deduce de mirar unos pocos decimales en una calculadora.",
          "Los irracionales tienen decimales infinitos no periódicos. Los reales reúnen racionales e irracionales. Por ejemplo, $-2$, $3/4$, $\\sqrt2$ y $\\pi$ son reales.",
          "$\\sqrt2\\approx1{,}4142$ es una aproximación; $\\sqrt2$ es la escritura exacta. Usamos $\\approx$ para «aproximadamente igual», no $=$."
        ],
        "ejemplo": "¿Es $\\sqrt{16}$ irracional por tener una raíz?",
        "pasos": [
          "Busca un número no negativo que multiplicado por sí mismo dé 16.",
          "$4\\times4=16$, por tanto $\\sqrt{16}=4$.",
          "4 es entero y racional. La presencia del símbolo raíz no implica irracionalidad."
        ],
        "preguntas": [
          {
            "pregunta": "¿Cuánto vale $\\sqrt{25}$?",
            "opciones": [
              "$5$",
              "$-5$",
              "$12{,}5$"
            ],
            "correcta": 0,
            "pista": "Busca el número no negativo cuyo cuadrado es 25.",
            "explicacion": "$5×5=25$ y la raíz principal es no negativa.",
            "errores": [
              "",
              "−5 también tiene cuadrado 25, pero no es la raíz principal.",
              "La raíz no se obtiene dividiendo entre dos."
            ]
          },
          {
            "pregunta": "¿Cuál es irracional?",
            "opciones": [
              "$\\sqrt9$",
              "$0{,}\\overline3$",
              "$\\sqrt2$"
            ],
            "correcta": 2,
            "pista": "Una raíz exacta puede ser racional; un decimal periódico es racional.",
            "explicacion": "√9=3 y 0,333…=1/3 son racionales; √2 no puede escribirse como fracción de enteros.",
            "errores": [
              "√9=3, que es racional.",
              "El período permite escribirlo como 1/3.",
              ""
            ]
          },
          {
            "pregunta": "¿Cuál escritura distingue correctamente una aproximación?",
            "opciones": [
              "$\\sqrt2=1{,}41$",
              "$\\sqrt2\\approx1{,}41$",
              "$\\sqrt2=2$"
            ],
            "correcta": 1,
            "pista": "1,41 es cercano al valor, pero no exacto.",
            "explicacion": "$1{,}41^2=1{,}9881$, que no es 2; se usa ≈.",
            "errores": [
              "La igualdad afirma que el valor es exacto.",
              "",
              "2²=4, no 2."
            ]
          }
        ],
        "visual": null,
        "refuerzos": [
          "operaciones",
          "racionales"
        ]
      },
      {
        "id": "orden",
        "titulo": "Ubicar y comparar en la recta",
        "bases": [
          "Signos, fracciones, decimales y raíces."
        ],
        "meta": "Ordenar números reales y explicar por qué uno es mayor.",
        "paraQue": "Para comparar temperaturas, saldos y medidas.",
        "explicacion": [
          "En la recta, el número situado más a la derecha es mayor. Por eso $-2>-5$: −2 está más cerca del cero por su izquierda.",
          "Para comparar una fracción y un decimal, puedes escribirlos del mismo modo: $3/4=0{,}75>0{,}7$.",
          "$a<b$ se lee «a es menor que b»; $a\\le b$ permite también la igualdad. Las letras representan números, no unidades ni operaciones.",
          "Al sumar el mismo número a ambos lados de una desigualdad, se conserva el orden: $2<5$ implica $2+3<5+3$. Multiplicar por un positivo también conserva el orden.",
          "Al multiplicar o dividir ambos lados por un negativo, se invierte la desigualdad: $2<5$, pero $-2>-5$. Comprueba las posiciones en la recta."
        ],
        "ejemplo": "Ordena $-2$, $1/2$, $-5$ y $0$.",
        "pasos": [
          "Los negativos quedan a la izquierda del cero.",
          "Entre −5 y −2, −5 está más a la izquierda.",
          "$1/2=0{,}5$ queda a la derecha del cero.",
          "Así: $-5<-2<0<1/2$."
        ],
        "preguntas": [
          {
            "pregunta": "¿Qué comparación es verdadera?",
            "opciones": [
              "$-5>-2$",
              "$-2>-5$",
              "$-2=-5$"
            ],
            "correcta": 1,
            "pista": "Mayor significa más a la derecha.",
            "explicacion": "−2 queda tres unidades a la derecha de −5.",
            "errores": [
              "Confundiste el tamaño de la magnitud con la posición de un negativo.",
              "",
              "Son puntos distintos de la recta."
            ]
          },
          {
            "pregunta": "Compara $3/4$ y $0{,}7$.",
            "opciones": [
              "$3/4>0{,}7$",
              "$3/4<0{,}7$",
              "Son iguales."
            ],
            "correcta": 0,
            "pista": "Escribe 3/4 como decimal.",
            "explicacion": "$0{,}75>0{,}70$.",
            "errores": [
              "",
              "75 centésimas es mayor que 70 centésimas.",
              "0,75 y 0,70 difieren en cinco centésimas."
            ]
          },
          {
            "pregunta": "Si $2<5$, al multiplicar ambos lados por $-1$ queda…",
            "opciones": [
              "$-2<-5$",
              "$2>-5$",
              "$-2>-5$"
            ],
            "correcta": 2,
            "pista": "El negativo invierte el orden y afecta a ambos números.",
            "explicacion": "−2 está a la derecha de −5: el signo se invierte.",
            "errores": [
              "Multiplicar por un negativo invierte la desigualdad.",
              "Falta multiplicar también el 2.",
              ""
            ]
          }
        ],
        "visual": "recta",
        "refuerzos": [
          "operaciones",
          "fracciones",
          "raices"
        ]
      },
      {
        "id": "propiedades",
        "titulo": "Qué podemos cambiar al calcular",
        "bases": [
          "Operaciones, jerarquía y paréntesis."
        ],
        "meta": "Distinguir cambiar el orden de cambiar la agrupación.",
        "paraQue": "Para calcular con flexibilidad y reconocer transformaciones válidas.",
        "explicacion": [
          "Conmutar es cambiar el orden: $3+8=8+3$ y $3\\times8=8\\times3$. Funciona para suma y multiplicación; no para resta ni división.",
          "Asociar es cambiar la agrupación manteniendo el orden: $(2+3)+7=2+(3+7)$. También $(2\\times5)\\times4=2\\times(5\\times4)$.",
          "La resta no es asociativa: $(8-3)-2=3$, pero $8-(3-2)=7$. Los paréntesis importan.",
          "El neutro conserva el número: sumar cero y multiplicar por uno no lo cambian. $a+0=a$ y $a\\times1=a$. Multiplicar por cero produce cero; no conserva cualquier número.",
          "En estas fórmulas, $a$, $b$ y $c$ representan números reales cualesquiera. Una propiedad afirma que la igualdad funciona para todos ellos, no solo para un ejemplo. Sumar y multiplicar reales da otro real: esto se llama clausura."
        ],
        "ejemplo": "Calcula $25\\times7\\times4$ de una forma cómoda.",
        "pasos": [
          "Conmutativa: intercambia 7 y 4; queda $25\\times4\\times7$.",
          "Asociativa: agrupa $(25\\times4)\\times7$.",
          "Calcula $100\\times7=700$.",
          "La resta y la división no permiten estos cambios libremente."
        ],
        "preguntas": [
          {
            "pregunta": "Cambiar $3+8$ por $8+3$ usa…",
            "opciones": [
              "asociativa.",
              "conmutativa.",
              "distributiva."
            ],
            "correcta": 1,
            "pista": "Solo cambió el orden de los sumandos.",
            "explicacion": "La conmutativa permite intercambiar el orden.",
            "errores": [
              "No hay cambio de agrupación.",
              "",
              "No hay un producto repartido sobre una suma."
            ]
          },
          {
            "pregunta": "¿Cuál conserva cualquier número $a$?",
            "opciones": [
              "$a\\times0$",
              "$a+1$",
              "$a\\times1$"
            ],
            "correcta": 2,
            "pista": "Busca el neutro de la multiplicación.",
            "explicacion": "Multiplicar por 1 conserva el valor.",
            "errores": [
              "El producto con cero es cero.",
              "Sumar 1 aumenta el número en una unidad.",
              ""
            ]
          },
          {
            "pregunta": "¿Es válido cambiar $8-3$ por $3-8$ sin cambiar el resultado?",
            "opciones": [
              "No: dan $5$ y $-5$.",
              "Sí: la resta es conmutativa.",
              "Sí: ambos dan $5$."
            ],
            "correcta": 0,
            "pista": "Calcula las dos restas.",
            "explicacion": "La resta no es conmutativa; intercambiar los números cambia el resultado.",
            "errores": [
              "",
              "La conmutativa vale para suma y producto, no para resta.",
              "3−8 es −5, no 5."
            ]
          }
        ],
        "visual": null,
        "refuerzos": [
          "operaciones"
        ]
      },
      {
        "id": "inversos",
        "titulo": "Opuesto e inverso: dos tareas diferentes",
        "bases": [
          "Suma con signos y multiplicación de fracciones."
        ],
        "meta": "Encontrar y comprobar opuestos e inversos multiplicativos.",
        "paraQue": "Para comprender cómo deshacer una suma o una multiplicación.",
        "explicacion": [
          "El opuesto de un número produce cero al sumarlo con él: $5+(-5)=0$. El opuesto de −5 es 5; el opuesto de cero es cero.",
          "El inverso multiplicativo produce uno al multiplicarlo por el número: $5\\times(1/5)=1$. Para un número $a\\ne0$, su inverso es $1/a$.",
          "Para una fracción no nula, intercambia numerador y denominador manteniendo el signo: el inverso de $-2/3$ es $-3/2$, porque su producto es 1.",
          "Cero no tiene inverso multiplicativo: $0\\times b=0$ para cualquier real $b$, nunca 1. El opuesto y el inverso se comprueban con operaciones distintas."
        ],
        "ejemplo": "Encuentra el opuesto y el inverso de $-2/3$.",
        "pasos": [
          "Opuesto: $2/3$. Comprueba $-2/3+2/3=0$.",
          "Inverso: $-3/2$. Comprueba $(-2/3)\\times(-3/2)=6/6=1$.",
          "Cambiar el signo sirve para el opuesto; invertir la fracción sirve para el inverso multiplicativo."
        ],
        "preguntas": [
          {
            "pregunta": "¿Cuál es el opuesto de $-7$?",
            "opciones": [
              "$-1/7$",
              "$7$",
              "$1/7$"
            ],
            "correcta": 1,
            "pista": "Debe sumar cero con −7.",
            "explicacion": "$-7+7=0$.",
            "errores": [
              "Ese es su inverso multiplicativo.",
              "",
              "−7+1/7 no es cero."
            ]
          },
          {
            "pregunta": "¿Cuál es el inverso de $3/4$?",
            "opciones": [
              "$-3/4$",
              "$3/4$",
              "$4/3$"
            ],
            "correcta": 2,
            "pista": "El producto debe ser 1.",
            "explicacion": "$(3/4)×(4/3)=12/12=1$.",
            "errores": [
              "Ese es el opuesto, cuya suma da cero.",
              "Su cuadrado es 9/16, no 1.",
              ""
            ]
          },
          {
            "pregunta": "¿Tiene cero inverso multiplicativo?",
            "opciones": [
              "No, porque ningún producto con cero da 1.",
              "Sí, es cero.",
              "Sí, es uno."
            ],
            "correcta": 0,
            "pista": "Prueba multiplicar cero por el número propuesto.",
            "explicacion": "Todo producto de cero por un real es cero.",
            "errores": [
              "",
              "0×0=0, no 1.",
              "0×1=0, no 1."
            ]
          }
        ],
        "visual": null,
        "refuerzos": [
          "operaciones",
          "fracciones"
        ]
      },
      {
        "id": "distributiva",
        "titulo": "Repartir un producto sobre una suma",
        "bases": [
          "Sumar, multiplicar, interpretar paréntesis y calcular áreas."
        ],
        "meta": "Entender y aplicar la distributiva con números y letras.",
        "paraQue": "Para calcular mentalmente y preparar el trabajo con expresiones algebraicas.",
        "explicacion": [
          "El área de un rectángulo es base por altura. Uno de altura 3 y base $4+2$ puede dividirse en dos rectángulos de la misma altura.",
          "El área completa es $3(4+2)=18$. Las áreas de las partes son $3\\times4=12$ y $3\\times2=6$; su suma también es 18.",
          "Por eso $a(b+c)=ab+ac$. Aquí $ab$ significa $a\\times b$ y $a(b+c)$ significa $a\\times(b+c)$. El factor exterior multiplica a cada término interior.",
          "También $a(b-c)=ab-ac$. Por ejemplo, $5(10-2)=50-10=40$. Con un factor negativo, calcula los signos de cada producto: $-2(3-4)=-6+8=2$.",
          "El modelo de áreas usa longitudes positivas. La propiedad algebraica se aplica a todos los reales, aunque no representemos longitudes negativas en el dibujo."
        ],
        "ejemplo": "Calcula $12\\times8{,}5$ descomponiendo el segundo factor.",
        "pasos": [
          "Escribe $8{,}5=8+0{,}5$.",
          "Distribuye: $12(8+0{,}5)=12\\times8+12\\times0{,}5$.",
          "Calcula: $96+6=102$.",
          "La mitad de 12 es 6. Los dos términos reciben el factor 12."
        ],
        "preguntas": [
          {
            "pregunta": "Desarrolla $3(4+2)$.",
            "opciones": [
              "$3\\times4+2$",
              "$3\\times4+3\\times2$",
              "$3+4+2$"
            ],
            "correcta": 1,
            "pista": "El factor 3 multiplica a cada sumando.",
            "explicacion": "Ambas partes del rectángulo tienen altura 3.",
            "errores": [
              "Falta multiplicar el segundo sumando por 3.",
              "",
              "Los paréntesis están multiplicados por 3."
            ]
          },
          {
            "pregunta": "Desarrolla $2(x+5)$.",
            "opciones": [
              "$2x+5$",
              "$x+10$",
              "$2x+10$"
            ],
            "correcta": 2,
            "pista": "2 multiplica tanto a x como a 5.",
            "explicacion": "$2×x+2×5=2x+10$.",
            "errores": [
              "Falta multiplicar 5 por 2.",
              "Falta multiplicar x por 2.",
              ""
            ]
          },
          {
            "pregunta": "Calcula $-2(3-4)$.",
            "opciones": [
              "$2$",
              "$-14$",
              "$-2$"
            ],
            "correcta": 0,
            "pista": "Puedes calcular el paréntesis primero o distribuir con cuidado.",
            "explicacion": "$3-4=-1$; $(-2)×(-1)=2$. Distribuyendo: −6+8=2.",
            "errores": [
              "",
              "El segundo producto es (−2)×(−4)=+8.",
              "El producto de dos negativos es positivo."
            ]
          }
        ],
        "visual": "area",
        "refuerzos": [
          "operaciones",
          "propiedades"
        ]
      }
    ],
    "diagnostico": [
      {
        "pregunta": "Calcula $-3+5$.",
        "opciones": [
          "$2$",
          "$-8$",
          "$8$"
        ],
        "correcta": 0,
        "pista": "Parte de −3 y avanza cinco lugares hacia la derecha.",
        "explicacion": "Los primeros tres pasos llegan a cero; los otros dos llegan a 2.",
        "errores": [
          "",
          "Sumaste las magnitudes y conservaste el negativo. Los sumandos tienen signos distintos.",
          "Sumaste las magnitudes sin considerar que −3 representa una posición bajo cero."
        ],
        "leccion": "operaciones"
      },
      {
        "pregunta": "Calcula $2+3\\times4$.",
        "opciones": [
          "$20$",
          "$14$",
          "$24$"
        ],
        "correcta": 1,
        "pista": "Resuelve el producto antes de sumar.",
        "explicacion": "$3\\times4=12$ y $2+12=14$.",
        "errores": [
          "Sumar primero produce (2+3)×4, que es otra expresión.",
          "",
          "El 2 es un sumando, no un factor de todo el producto."
        ],
        "leccion": "operaciones"
      },
      {
        "pregunta": "¿Qué fracción representa $0{,}5$?",
        "opciones": [
          "$\\frac15$",
          "$\\frac12$",
          "$\\frac51$"
        ],
        "correcta": 1,
        "pista": "Cinco décimas son 5/10.",
        "explicacion": "$0{,}5=5/10=1/2$.",
        "errores": [
          "El 5 está en la posición de las décimas; no es el denominador.",
          "",
          "5/1 representa cinco unidades, no media unidad."
        ],
        "leccion": "fracciones"
      },
      {
        "pregunta": "Calcula $\\frac12+\\frac14$.",
        "opciones": [
          "$\\frac26$",
          "$\\frac24$",
          "$\\frac34$"
        ],
        "correcta": 2,
        "pista": "Convierte 1/2 en 2/4 antes de sumar.",
        "explicacion": "Dos cuartos más un cuarto son tres cuartos.",
        "errores": [
          "Sumaste denominadores; las partes deben tener el mismo tamaño.",
          "Falta sumar el cuarto de la segunda fracción.",
          ""
        ],
        "leccion": "fracciones"
      },
      {
        "pregunta": "¿Por qué $5$ es racional?",
        "opciones": [
          "Porque es positivo.",
          "Porque $5=5/1$.",
          "Porque tiene una raíz."
        ],
        "correcta": 1,
        "pista": "Busca una escritura como cociente de enteros.",
        "explicacion": "5/1 tiene numerador y denominador enteros, y el denominador no es cero.",
        "errores": [
          "Hay irracionales positivos, como √2.",
          "",
          "Tener una raíz no determina que un número sea racional."
        ],
        "leccion": "racionales"
      },
      {
        "pregunta": "¿Cuánto vale $\\sqrt{25}$?",
        "opciones": [
          "$5$",
          "$-5$",
          "$12{,}5$"
        ],
        "correcta": 0,
        "pista": "Busca el número no negativo cuyo cuadrado es 25.",
        "explicacion": "$5×5=25$ y la raíz principal es no negativa.",
        "errores": [
          "",
          "−5 también tiene cuadrado 25, pero no es la raíz principal.",
          "La raíz no se obtiene dividiendo entre dos."
        ],
        "leccion": "raices"
      },
      {
        "pregunta": "¿Qué comparación es verdadera?",
        "opciones": [
          "$-5>-2$",
          "$-2>-5$",
          "$-2=-5$"
        ],
        "correcta": 1,
        "pista": "Mayor significa más a la derecha.",
        "explicacion": "−2 queda tres unidades a la derecha de −5.",
        "errores": [
          "Confundiste el tamaño de la magnitud con la posición de un negativo.",
          "",
          "Son puntos distintos de la recta."
        ],
        "leccion": "orden"
      },
      {
        "pregunta": "¿Cuál es el inverso de $3/4$?",
        "opciones": [
          "$-3/4$",
          "$3/4$",
          "$4/3$"
        ],
        "correcta": 2,
        "pista": "El producto debe ser 1.",
        "explicacion": "$(3/4)×(4/3)=12/12=1$.",
        "errores": [
          "Ese es el opuesto, cuya suma da cero.",
          "Su cuadrado es 9/16, no 1.",
          ""
        ],
        "leccion": "inversos"
      }
    ],
    "cierre": [
      {
        "pregunta": "¿Qué afirmación es correcta sobre $-4$?",
        "opciones": [
          "Es entero, racional y real.",
          "Es natural e irracional.",
          "Es real, pero no racional."
        ],
        "correcta": 0,
        "pista": "Escríbelo como cociente de enteros.",
        "explicacion": "−4=−4/1; es entero, racional y real.",
        "errores": [
          "",
          "Un negativo no es natural y −4 sí puede expresarse como fracción.",
          "Todo entero es racional."
        ],
        "leccion": "racionales"
      },
      {
        "pregunta": "Una calculadora muestra $\\sqrt3\\approx1{,}732$. ¿Qué representa 1,732?",
        "opciones": [
          "El valor exacto.",
          "Una aproximación racional al valor irracional.",
          "Un número irracional por tener decimales."
        ],
        "correcta": 1,
        "pista": "Un decimal finito puede escribirse como fracción.",
        "explicacion": "1,732=1732/1000 es racional; √3 es irracional.",
        "errores": [
          "1,732² no es exactamente 3.",
          "",
          "Los decimales finitos son racionales."
        ],
        "leccion": "raices"
      },
      {
        "pregunta": "Ordena de menor a mayor $-1$, $-3$, $1/2$.",
        "opciones": [
          "$-1<-3<1/2$",
          "$1/2<-3<-1$",
          "$-3<-1<1/2$"
        ],
        "correcta": 2,
        "pista": "Los negativos están a la izquierda del cero.",
        "explicacion": "−3 queda antes que −1; 1/2 es positivo.",
        "errores": [
          "Entre negativos, −3 está más a la izquierda.",
          "1/2 está a la derecha de los negativos.",
          ""
        ],
        "leccion": "orden"
      },
      {
        "pregunta": "De $(2+5)+3$ a $2+(5+3)$, ¿qué cambió?",
        "opciones": [
          "La agrupación: asociativa.",
          "El orden: conmutativa.",
          "El signo: opuesto."
        ],
        "correcta": 0,
        "pista": "Observa que 2, 5 y 3 siguen en ese orden.",
        "explicacion": "Solo cambian los paréntesis; es la asociativa.",
        "errores": [
          "",
          "El orden no cambió.",
          "Ningún término cambió de signo."
        ],
        "leccion": "propiedades"
      },
      {
        "pregunta": "El opuesto y el inverso de $-4$ son, respectivamente…",
        "opciones": [
          "$-1/4$ y $4$.",
          "$4$ y $-1/4$.",
          "$4$ y $1/4$."
        ],
        "correcta": 1,
        "pista": "Comprueba la suma con el primero y el producto con el segundo.",
        "explicacion": "−4+4=0; (−4)×(−1/4)=1.",
        "errores": [
          "Intercambiaste las dos funciones.",
          "",
          "El inverso conserva el signo negativo para que el producto sea positivo."
        ],
        "leccion": "inversos"
      },
      {
        "pregunta": "¿Cuál equivale a $4(x-2)$?",
        "opciones": [
          "$4x-2$",
          "$4x+8$",
          "$4x-8$"
        ],
        "correcta": 2,
        "pista": "Multiplica cada término, incluyendo su signo.",
        "explicacion": "$4×x+4×(-2)=4x-8$.",
        "errores": [
          "Falta multiplicar −2 por 4.",
          "4×(−2) da −8, no +8.",
          ""
        ],
        "leccion": "distributiva"
      }
    ],
    "temaNumero": "1.1"
  },
  "data/modules/t1-u1-tema2.json": {
    "id": "t1-u1-tema2",
    "titulo": "Productos notables y factorización paso a paso",
    "temaNumero": "1.2",
    "unidadId": "unidad-1",
    "unidadTitulo": "Tema 2 · Calcular, reconocer y factorizar",
    "trimestre": 1,
    "paginasLibro": "16-17",
    "version": 2,
    "introduccion": "Empieza con números conocidos. Usa la distributiva, reconoce lo que se repite y aprende a desarrollar y factorizar paso a paso.",
    "objetivo": "Desarrollar productos notables y factorizar expresiones usando la distributiva, los signos y la agrupación de términos semejantes.",
    "lecciones": [
      {
        "id": "lenguaje",
        "titulo": "Leer expresiones y potencias",
        "tituloRuta": "Letras y potencias",
        "descripcionRuta": "Entender qué significa cada símbolo",
        "fase": "01 · PREPARA TUS BASES",
        "bases": [
          "Multiplicación, signos y significado de un cuadrado."
        ],
        "refuerzos": [],
        "meta": "Leer términos algebraicos, calcular potencias y reunir términos semejantes.",
        "paraQue": "Para entender las fórmulas antes de intentar memorizarlas.",
        "explicacion": [
          "Una letra representa un número. Si $x=3$, entonces $2x=2\\times3=6$. Escribir $ab$ significa multiplicar $a$ por $b$.",
          "$x^2=x\\times x$ y $x^3=x\\times x\\times x$. El exponente indica cuántas veces se usa la base como factor: $3^2=9$, no $6$. Al multiplicar potencias de igual base se suman exponentes: $x^2x^3=x^5$.",
          "Un término es una parte separada por suma o resta. En $3x+2$, los términos son $3x$ y $2$; 3 es el coeficiente de $x$. Un binomio tiene dos términos, como $x+2$.",
          "Solo reunimos términos con la misma parte literal: $3x+2x=5x$, pero $x^2+x$ no se convierte en $2x^2$. Piensa en tres grupos de $x$ más dos grupos de $x$.",
          "Los paréntesis indican la base completa: $(2x)^2=(2x)(2x)=4x^2$. En cambio, $2x^2$ significa $2(x\\times x)$. También $(-3)^2=9$, mientras que $-3^2=-(3^2)=-9$."
        ],
        "ejemplo": "Calcula $(2x)^2+3x$ cuando $x=2$.",
        "pasos": [
          "Sustituye la letra: $(2\\times2)^2+3\\times2$.",
          "El paréntesis vale 4; su cuadrado es $4^2=16$.",
          "El último producto vale 6. Suma: $16+6=22$."
        ],
        "preguntas": [
          {
            "pregunta": "La letra $x$ representa un número. Si ese número es 3, ¿cuánto es $2\\times x$ (dos veces ese número)?",
            "opciones": [
              "$5$",
              "$6$",
              "$9$"
            ],
            "correcta": 1,
            "pista": "Reemplaza la letra por 3: tienes dos grupos de 3. El símbolo × indica multiplicación.",
            "explicacion": "La letra x vale 3. Multiplicamos 2 por 3: 2 × 3 = 6. El símbolo × significa «multiplicado por». La escritura 2x también significa multiplicar 2 por el valor de x; no significa sumar.",
            "errores": [
              "Sumaste 2 y 3. Aquí se pide multiplicar: dos grupos de tres.",
              "",
              "Multiplicaste 3 por sí mismo. Aquí debes multiplicar 2 por el valor de la letra, que es 3."
            ]
          },
          {
            "pregunta": "¿Cuál equivale a $(2x)^2$?",
            "opciones": [
              "$4x^2$",
              "$2x^2$",
              "$4x$"
            ],
            "correcta": 0,
            "pista": "Eleva al cuadrado tanto el coeficiente como la letra.",
            "explicacion": "$(2x)(2x)=2\\times2\\times x\\times x=4x^2$.",
            "errores": [
              "",
              "El 2 también está dentro de la base que se eleva al cuadrado.",
              "Falta el segundo factor x."
            ]
          },
          {
            "pregunta": "Reúne los términos $3x+2x$.",
            "opciones": [
              "$5x^2$",
              "$6x$",
              "$5x$"
            ],
            "correcta": 2,
            "pista": "Hay tres grupos de x más dos grupos de x.",
            "explicacion": "$(3+2)x=5x$; la suma no multiplica las letras.",
            "errores": [
              "Sumar términos no eleva x al cuadrado.",
              "Multiplicaste los coeficientes en lugar de sumarlos.",
              ""
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "multiplicar",
        "titulo": "Multiplicar binomios con la distributiva",
        "tituloRuta": "Multiplicar binomios",
        "descripcionRuta": "Cada término llega a cada término",
        "fase": "01 · PREPARA TUS BASES",
        "bases": [
          "Leer términos y potencias; multiplicar con signos."
        ],
        "refuerzos": [
          "lenguaje"
        ],
        "meta": "Desarrollar un producto de binomios y reunir sus términos semejantes.",
        "paraQue": "Para descubrir de dónde salen los productos notables.",
        "explicacion": [
          "Multiplicar $(x+2)(x+3)$ es multiplicar todo el primer paréntesis por todo el segundo. Reparte cada término: $x(x+3)+2(x+3)$.",
          "Al distribuir otra vez obtienes cuatro productos: $x^2+3x+2x+6$. Los términos semejantes $3x$ y $2x$ se reúnen: $x^2+5x+6$.",
          "Puedes empezar con números: $(10+2)(10+3)=100+30+20+6=156$. Cada término del primer paréntesis multiplica a cada término del segundo. Con letras seguimos exactamente los mismos pasos.",
          "Los signos pertenecen a los términos: $(x-2)(x+3)=x^2+3x-2x-6=x^2+x-6$. Un producto positivo por negativo es negativo.",
          "Desarrollar convierte un producto en una suma de términos. Para comprobar, puedes volver a distribuir y sustituir un valor de x. Una comprobación numérica ayuda a detectar errores; por sí sola no demuestra una identidad para todos los valores."
        ],
        "ejemplo": "Desarrolla $(x+4)(x+2)$.",
        "pasos": [
          "$x(x+2)+4(x+2)$.",
          "$x^2+2x+4x+8$.",
          "Reúne $2x+4x$: queda $x^2+6x+8$.",
          "Con $x=1$: $(1+4)(1+2)=15$ y $1+6+8=15$."
        ],
        "preguntas": [
          {
            "pregunta": "¿Cuántos productos aparecen antes de simplificar $(x+2)(x+3)$?",
            "opciones": [
              "Dos.",
              "Cuatro.",
              "Tres."
            ],
            "correcta": 1,
            "pista": "Cada uno de los dos términos multiplica a los dos del otro paréntesis.",
            "explicacion": "Hay 2×2=4 productos: x², 3x, 2x y 6.",
            "errores": [
              "Faltan los dos productos cruzados.",
              "",
              "Antes de reunir los términos semejantes hay cuatro productos."
            ]
          },
          {
            "pregunta": "Desarrolla $(x+1)(x+2)$.",
            "opciones": [
              "$x^2+2$",
              "$x^2+2x+2$",
              "$x^2+3x+2$"
            ],
            "correcta": 2,
            "pista": "Distribuye y suma x+2x.",
            "explicacion": "$x^2+2x+x+2=x^2+3x+2$.",
            "errores": [
              "Faltan los productos cruzados.",
              "Falta el término x que sale de 1×x.",
              ""
            ]
          },
          {
            "pregunta": "Desarrolla $(x-2)(x+3)$.",
            "opciones": [
              "$x^2+x-6$",
              "$x^2+5x-6$",
              "$x^2+x+6$"
            ],
            "correcta": 0,
            "pista": "El término −2 también multiplica a x y a 3.",
            "explicacion": "$x^2+3x-2x-6=x^2+x-6$.",
            "errores": [
              "",
              "3x−2x=x, no 5x.",
              "El producto (−2)×3 es −6."
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "cuadrado-suma",
        "titulo": "El cuadrado de una suma",
        "tituloRuta": "Cuadrado de una suma",
        "descripcionRuta": "Dos productos iguales se reúnen",
        "fase": "02 · COMPRENDE LOS PRODUCTOS",
        "bases": [
          "Multiplicar binomios; calcular cuadrados."
        ],
        "refuerzos": [
          "lenguaje",
          "multiplicar"
        ],
        "meta": "Explicar y desarrollar el cuadrado de un binomio con suma.",
        "paraQue": "Para calcular cuadrados mentalmente y reconocer el producto doble que suele olvidarse.",
        "explicacion": [
          "Empieza con $12^2=(10+2)(10+2)$. Distribuye: $100+20+20+4=144$. Los dos productos cruzados son iguales: $20+20=40$.",
          "Con letras ocurre lo mismo: $(a+b)^2=(a+b)(a+b)=a^2+ab+ba+b^2$. Como $ab=ba$, se reúnen en $2ab$.",
          "Así, $(a+b)^2=a^2+2ab+b^2$. Se lee: cuadrado del primero, más dos veces el producto de ambos, más cuadrado del segundo.",
          "Elevar una suma al cuadrado no es elevar cada sumando por separado: $(10+2)^2=144$, pero $10^2+2^2=104$. Faltan los dos productos cruzados.",
          "En $(2x+3)^2$, el primer término completo es $2x$: su cuadrado es $4x^2$ y el producto doble es $2(2x)(3)=12x$."
        ],
        "ejemplo": "Desarrolla $(x+3)^2$.",
        "pasos": [
          "Identifica $a=x$ y $b=3$.",
          "Cuadrados: $a^2=x^2$ y $b^2=9$.",
          "Producto doble: $2ab=2\\times x\\times3=6x$.",
          "Resultado: $x^2+6x+9$. Con $x=2$, ambos lados valen 25."
        ],
        "preguntas": [
          {
            "pregunta": "¿Por qué $(a+b)^2$ contiene $2ab$?",
            "opciones": [
              "Porque aparecen los productos ab y ba, que son iguales.",
              "Porque se suman los exponentes.",
              "Porque a+b siempre vale 2."
            ],
            "correcta": 0,
            "pista": "Busca los dos productos cruzados.",
            "explicacion": "Al distribuir aparecen ab y ba. Como representan el mismo producto, su suma es 2ab.",
            "errores": [
              "",
              "El 2 cuenta los productos cruzados; no procede de sumar exponentes.",
              "a y b pueden tener cualquier valor."
            ]
          },
          {
            "pregunta": "Desarrolla $(x+4)^2$.",
            "opciones": [
              "$x^2+16$",
              "$x^2+8x+16$",
              "$x^2+4x+16$"
            ],
            "correcta": 1,
            "pista": "El término central es 2×x×4.",
            "explicacion": "$x^2+2(x)(4)+4^2=x^2+8x+16$.",
            "errores": [
              "Faltan los dos productos cruzados de 4x.",
              "",
              "Incluiste solo uno de los dos productos cruzados."
            ]
          },
          {
            "pregunta": "Desarrolla $(2x+1)^2$.",
            "opciones": [
              "$2x^2+4x+1$",
              "$4x^2+2x+1$",
              "$4x^2+4x+1$"
            ],
            "correcta": 2,
            "pista": "El primer término es 2x, no x.",
            "explicacion": "$(2x)^2+2(2x)(1)+1^2=4x^2+4x+1$.",
            "errores": [
              "El cuadrado del coeficiente 2 es 4.",
              "El producto doble es 4x.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [
          {
            "problema": "Calcula $21^2$ mentalmente.",
            "pasos": [
              "$21=20+1$.",
              "$(20+1)^2=400+40+1=441$."
            ]
          }
        ]
      },
      {
        "id": "cuadrado-resta",
        "titulo": "El cuadrado de una diferencia",
        "tituloRuta": "Cuadrado de una diferencia",
        "descripcionRuta": "Distribuir y cuidar los signos",
        "fase": "02 · COMPRENDE LOS PRODUCTOS",
        "bases": [
          "Cuadrado de una suma y multiplicación con signos."
        ],
        "refuerzos": [
          "cuadrado-suma",
          "multiplicar"
        ],
        "meta": "Desarrollar un cuadrado con resta y explicar sus signos.",
        "paraQue": "Para distinguir el cuadrado de una diferencia de una diferencia de cuadrados.",
        "explicacion": [
          "Calcula $19^2$ escribiendo $19=20-1$. Entonces $(20-1)(20-1)=400-20-20+1=361$. Los dos productos cruzados se restan; el producto $(-1)(-1)$ se suma.",
          "Con letras: $(a-b)^2=(a-b)(a-b)=a^2-ab-ba+b^2$. El último producto es positivo porque $(-b)(-b)=b^2$.",
          "Reúne los dos productos negativos: $-ab-ba=-2ab$. Por eso $(a-b)^2=a^2-2ab+b^2$.",
          "Comprueba los signos término por término antes de simplificar. No cambies el último cuadrado a negativo: proviene de multiplicar dos términos negativos.",
          "$(a-b)^2$ y $a^2-b^2$ son expresiones diferentes. Por ejemplo, $(5-2)^2=9$, mientras que $5^2-2^2=21$."
        ],
        "ejemplo": "Desarrolla $(x-5)^2$.",
        "pasos": [
          "Los términos son $a=x$ y $b=5$.",
          "Cuadrado del primero: $x^2$. Producto doble que se resta: $2(x)(5)=10x$.",
          "Cuadrado del segundo: $25$. Resultado: $x^2-10x+25$.",
          "Con $x=7$: $(7-5)^2=4$ y $49-70+25=4$."
        ],
        "preguntas": [
          {
            "pregunta": "Desarrolla $(x-3)^2$.",
            "opciones": [
              "$x^2-9$",
              "$x^2-6x-9$",
              "$x^2-6x+9$"
            ],
            "correcta": 2,
            "pista": "(−3)×(−3) es positivo.",
            "explicacion": "$x^2-2(x)(3)+3^2=x^2-6x+9$.",
            "errores": [
              "Eso es una diferencia de cuadrados; falta el término central.",
              "El cuadrado del segundo término es +9.",
              ""
            ]
          },
          {
            "pregunta": "¿Por qué el último término de $(a-b)^2$ es $+b^2$?",
            "opciones": [
              "Porque (−b) multiplicado por (−b) es positivo.",
              "Porque toda resta se convierte en suma.",
              "Porque b siempre vale 2."
            ],
            "correcta": 0,
            "pista": "Escribe (a−b)(a−b) y observa el producto de los dos últimos términos.",
            "explicacion": "El último producto es $(-b)(-b)=b^2$: dos factores negativos dan un producto positivo.",
            "errores": [
              "",
              "Solo el producto de los dos términos −b es positivo; los productos cruzados siguen siendo negativos.",
              "La identidad funciona para cualquier valor real de b."
            ]
          },
          {
            "pregunta": "Calcula $19^2$ usando $(20-1)^2$.",
            "opciones": [
              "$399$",
              "$361$",
              "$381$"
            ],
            "correcta": 1,
            "pista": "400−40+1.",
            "explicacion": "$20^2-2(20)(1)+1^2=400-40+1=361$.",
            "errores": [
              "Calculaste 20²−1² en lugar del cuadrado de la diferencia.",
              "",
              "El producto doble es 40, no 20."
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "conjugados",
        "titulo": "Suma por diferencia: cuadrados que se restan",
        "tituloRuta": "Suma por diferencia",
        "descripcionRuta": "Los términos cruzados se cancelan",
        "fase": "02 · COMPRENDE LOS PRODUCTOS",
        "bases": [
          "Distribuir productos de binomios y sumar términos opuestos."
        ],
        "refuerzos": [
          "multiplicar",
          "cuadrado-resta"
        ],
        "meta": "Desarrollar binomios conjugados y reconocer una diferencia de cuadrados.",
        "paraQue": "Para calcular mentalmente productos de números cercanos y reconocer cómo se cancelan los términos cruzados.",
        "explicacion": [
          "¿Para qué sirve? Calcula $19\\times21$ usando que los dos números están alrededor de 20: $19=20-1$ y $21=20+1$.",
          "Distribuye: $(20-1)(20+1)=400+20-20-1$. Los términos $+20$ y $-20$ suman cero. Queda $400-1=399$.",
          "Con letras, el mismo procedimiento es $(a+b)(a-b)=a^2-ab+ba-b^2$. Como $-ab+ba=0$, queda $a^2-b^2$.",
          "Los binomios $a+b$ y $a-b$ tienen los mismos términos y solo cambia el signo entre ellos: se llaman conjugados. Su producto es una diferencia de cuadrados.",
          "En $(x+4)(x-4)=x^2-16$, los términos $-4x$ y $+4x$ se cancelan. La regla abrevia un cálculo que ya puedes justificar con la distributiva.",
          "En sentido inverso, $x^2-16=(x+4)(x-4)$. Esto se llama factorizar: escribir la expresión como un producto equivalente."
        ],
        "ejemplo": "Calcula $23\\times17$ sin multiplicación larga.",
        "pasos": [
          "$23=20+3$ y $17=20-3$.",
          "Usa los conjugados: $(20+3)(20-3)=20^2-3^2$.",
          "$400-9=391$."
        ],
        "preguntas": [
          {
            "pregunta": "Desarrolla $(x+6)(x-6)$.",
            "opciones": [
              "$x^2-36$",
              "$x^2+36$",
              "$x^2-12x+36$"
            ],
            "correcta": 0,
            "pista": "Los productos cruzados son opuestos.",
            "explicacion": "$x^2-6x+6x-36=x^2-36$.",
            "errores": [
              "",
              "El producto 6×(−6) es −36.",
              "Esa expresión corresponde a (x−6)²."
            ]
          },
          {
            "pregunta": "¿Cuál es el conjugado de $2x+3$?",
            "opciones": [
              "$2x-3$",
              "$-2x-3$",
              "$3x+2$"
            ],
            "correcta": 0,
            "pista": "Conserva los términos y cambia el signo que los separa.",
            "explicacion": "2x+3 y 2x−3 producen 4x²−9.",
            "errores": [
              "",
              "Cambiaste también el signo del primer término.",
              "Cambiaste los términos, no solo el signo."
            ]
          },
          {
            "pregunta": "¿Cuánto vale $(10+2)(10-2)$?",
            "opciones": [
              "$144$",
              "$96$",
              "$64$"
            ],
            "correcta": 1,
            "pista": "Resta los cuadrados 10² y 2².",
            "explicacion": "$100-4=96$; también $12\\times8=96$.",
            "errores": [
              "Ese es el cuadrado de 12.",
              "",
              "Ese es el cuadrado de 8."
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "factor-comun",
        "titulo": "Factorizar empieza por lo que se repite",
        "tituloRuta": "Extraer factor común",
        "descripcionRuta": "De una suma a un producto",
        "fase": "03 · APRENDE A FACTORIZAR",
        "bases": [
          "Distributiva; divisores y productos de potencias."
        ],
        "refuerzos": [
          "lenguaje",
          "multiplicar"
        ],
        "meta": "Extraer un factor que aparezca en todos los términos y comprobarlo.",
        "paraQue": "Para expresar una suma como producto y simplificar cálculos.",
        "explicacion": [
          "Desarrollar va de producto a suma: $3(x+2)=3x+6$. Factorizar recorre el camino inverso: $3x+6=3(x+2)$.",
          "Busca qué multiplica a todos los términos. En $6x+9$, ambos coeficientes son múltiplos de 3. Divide cada término entre 3: quedan $2x$ y $3$. Por tanto, $6x+9=3(2x+3)$.",
          "También puede repetirse una letra: $x^2+3x=x(x+3)$. El menor exponente común se puede extraer. En $6x^2+9x$, el factor común completo es $3x$.",
          "Comprueba siempre distribuyendo: $3x(2x+3)=6x^2+9x$. Si falta un término o cambia un signo, la factorización no es equivalente.",
          "Con números: $3\\times8+3\\times2=24+6=30$. Como ambos productos tienen el factor 3, también puedes calcular $3(8+2)=3\\times10=30$. La distributiva justifica los dos caminos."
        ],
        "ejemplo": "Factoriza $8x^2+12x$.",
        "pasos": [
          "8 y 12 comparten el divisor 4; ambos términos contienen x. Extrae $4x$.",
          "$8x^2=4x(2x)$ y $12x=4x(3)$.",
          "Resultado: $4x(2x+3)$.",
          "Comprueba: $4x\\times2x+4x\\times3=8x^2+12x$."
        ],
        "preguntas": [
          {
            "pregunta": "Factoriza $6x+9$.",
            "opciones": [
              "$3(2x+3)$",
              "$3(2x+9)$",
              "$6(x+3)$"
            ],
            "correcta": 0,
            "pista": "Divide cada término entre el factor 3.",
            "explicacion": "$3\\times2x+3\\times3=6x+9$.",
            "errores": [
              "",
              "9/3=3; no dejes el 9 sin dividir.",
              "6(x+3)=6x+18, no 6x+9."
            ]
          },
          {
            "pregunta": "¿Cuál es el factor común completo de $6x^2+9x$?",
            "opciones": [
              "$3$",
              "$3x$",
              "$3x^2$"
            ],
            "correcta": 1,
            "pista": "Busca el mayor divisor de 6 y 9 y la menor potencia de x compartida.",
            "explicacion": "Ambos términos contienen 3x.",
            "errores": [
              "3 es común, pero todavía queda x compartida.",
              "",
              "9x no tiene dos factores x."
            ]
          },
          {
            "pregunta": "Factoriza $5x-10$.",
            "opciones": [
              "$5(x-10)$",
              "$5(x+2)$",
              "$5(x-2)$"
            ],
            "correcta": 2,
            "pista": "Divide −10 entre 5 conservando el signo.",
            "explicacion": "$5x-10=5(x-2)$ y al distribuir se recupera la expresión.",
            "errores": [
              "Falta dividir el segundo término entre 5.",
              "El segundo término original es negativo.",
              ""
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "factor-cuadrados",
        "titulo": "Factorizar cuadrados: un caso a la vez",
        "tituloRuta": "Reconocer el patrón",
        "descripcionRuta": "Factorizar cuadrados y conjugados",
        "fase": "03 · APRENDE A FACTORIZAR",
        "bases": [
          "Cuadrados de binomios, conjugados y factor común."
        ],
        "refuerzos": [
          "cuadrado-suma",
          "cuadrado-resta",
          "conjugados",
          "factor-comun"
        ],
        "meta": "Factorizar un trinomio cuadrado perfecto y una diferencia de cuadrados.",
        "paraQue": "Para elegir una identidad por su estructura y comprobarla.",
        "explicacion": [
          "Primero cuenta los términos. Con tres términos, comprueba si tienes un trinomio cuadrado perfecto. Con dos términos separados por una resta, comprueba si tienes una diferencia de cuadrados. Estudia cada caso por separado."
        ],
        "preguntas": [
          {
            "pregunta": "Factoriza $x^2+10x+25$.",
            "opciones": [
              "$(x+5)^2$",
              "$(x+10)^2$",
              "$(x+5)(x-5)$"
            ],
            "correcta": 0,
            "pista": "25=5² y 10x=2×x×5.",
            "explicacion": "$(x+5)^2=x^2+10x+25$.",
            "errores": [
              "",
              "El término central sería 20x y el último 100.",
              "Los conjugados producen x²−25, sin término central."
            ]
          },
          {
            "pregunta": "Factoriza $9x^2-16$.",
            "opciones": [
              "$(9x+4)(9x-4)$",
              "$(3x+4)(3x-4)$",
              "$(3x-4)^2$"
            ],
            "correcta": 1,
            "pista": "Las bases de los cuadrados son 3x y 4.",
            "explicacion": "$(3x)^2-4^2=(3x+4)(3x-4)$.",
            "errores": [
              "El cuadrado de 9x es 81x², no 9x².",
              "",
              "El cuadrado de diferencia incluye el término −24x."
            ]
          },
          {
            "pregunta": "¿Es $x^2+5x+9$ un trinomio cuadrado perfecto?",
            "opciones": [
              "Sí, porque tiene tres términos.",
              "Sí, porque 9 es un cuadrado.",
              "No: el central debería ser 6x."
            ],
            "correcta": 2,
            "pista": "Comprueba el doble producto de x y 3.",
            "explicacion": "Los extremos sugieren x y 3, pero 2×x×3=6x, no 5x.",
            "errores": [
              "Tres términos no bastan.",
              "También debe coincidir el término central.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [],
        "bloques": [
          {
            "titulo": "1. Tres términos: trinomio cuadrado perfecto con suma",
            "descripcion": "Buscamos una expresión que provenga de multiplicar un binomio por sí mismo. No basta con tener tres términos: también debe coincidir el término central.",
            "problema": "Factoriza $x^2+6x+9$.",
            "pasos": [
              "Identifica las bases de los extremos: $x^2=x\\times x$ y $9=3\\times3$. Las bases son x y 3.",
              "Comprueba el término central: $2\\times x\\times3=6x$. Coincide con el que aparece en la expresión.",
              "Como el término central es positivo, escribe una suma: $(x+3)^2$.",
              "Comprueba multiplicando: $(x+3)(x+3)=x^2+3x+3x+9=x^2+6x+9$."
            ],
            "conclusion": "$x^2+6x+9=(x+3)^2$."
          },
          {
            "titulo": "2. Tres términos: trinomio cuadrado perfecto con resta",
            "descripcion": "Sigue el mismo procedimiento. El signo negativo del término central indica una resta dentro del binomio.",
            "problema": "Factoriza $x^2-8x+16$.",
            "pasos": [
              "Los extremos son $x^2$ y $4^2$.",
              "El doble producto es $2(x)(4)=8x$, con signo negativo en la expresión.",
              "Es un cuadrado de diferencia: $(x-4)^2$.",
              "Comprueba: $(x-4)(x-4)=x^2-8x+16$."
            ],
            "conclusion": "$x^2-8x+16=(x-4)^2$."
          },
          {
            "titulo": "3. Dos términos: diferencia de cuadrados",
            "descripcion": "Aquí no hay término central. Deben ser dos cuadrados separados por una resta. El resultado lleva dos paréntesis: una suma y una resta.",
            "problema": "Factoriza $x^2-25$.",
            "pasos": [
              "Cuenta los términos: son dos, $x^2$ y $25$, separados por una resta.",
              "Identifica sus bases: $x^2=x\\times x$ y $25=5\\times5$. Las bases son x y 5.",
              "Escribe una suma y una resta con esas bases: $(x+5)(x-5)$.",
              "Comprueba: $(x+5)(x-5)=x^2-5x+5x-25=x^2-25$. Los términos centrales se cancelan."
            ],
            "conclusion": "$x^2-25=(x+5)(x-5)$. No es $(x-5)^2$: ese cuadrado produciría un término adicional de −10x."
          },
          {
            "titulo": "4. Después: combinar con factor común",
            "descripcion": "Cuando ya reconozcas los casos anteriores, puedes combinar dos procedimientos. Si todos los términos tienen un factor común, extráelo primero.",
            "problema": "Factoriza $2x^2-18$.",
            "pasos": [
              "Extrae el factor común 2: $2x^2-18=2(x^2-9)$.",
              "Trabaja solo con lo que queda dentro: $x^2-9=x^2-3^2$. Es una diferencia de cuadrados.",
              "Factoriza el interior y conserva el 2: $2(x+3)(x-3)$.",
              "Comprueba: $2(x+3)(x-3)=2(x^2-9)=2x^2-18$."
            ],
            "conclusion": "Primero factor común; después diferencia de cuadrados."
          }
        ]
      },
      {
        "id": "termino-comun",
        "titulo": "Dos binomios con un término común",
        "tituloRuta": "Suma y producto",
        "descripcionRuta": "Desarrollar y factorizar trinomios",
        "fase": "03 · APRENDE A FACTORIZAR",
        "bases": [
          "Distribuir y reunir términos semejantes; multiplicar con signos."
        ],
        "refuerzos": [
          "multiplicar",
          "factor-comun",
          "factor-cuadrados"
        ],
        "meta": "Relacionar la suma y el producto de dos números con un trinomio sencillo.",
        "paraQue": "Para factorizar expresiones como x²+5x+6 sin adivinar.",
        "explicacion": [
          "Distribuye $(x+a)(x+b)=x^2+bx+ax+ab$. Reúne los términos con x: $x^2+(a+b)x+ab$.",
          "Los números a y b aparecen de dos maneras: su suma es el coeficiente de x y su producto es el término independiente.",
          "Para factorizar $x^2+5x+6$, busca dos números cuya suma sea 5 y cuyo producto sea 6: son 2 y 3. Resultado: $(x+2)(x+3)$.",
          "En $x^2+x-6$, el producto negativo exige signos distintos. 3 y −2 suman 1 y multiplican −6; queda $(x+3)(x-2)$.",
          "Este procedimiento se aplica aquí a trinomios con coeficiente 1 delante de $x^2$ y parejas enteras fáciles de reconocer. Si ninguna pareja de divisores sirve, no fuerces una respuesta: otros casos requieren herramientas posteriores."
        ],
        "ejemplo": "Factoriza $x^2+7x+12$.",
        "pasos": [
          "Busca parejas enteras de producto 12: (1,12), (2,6), (3,4).",
          "Sus sumas son 13, 8 y 7. Sirven 3 y 4.",
          "Escribe $(x+3)(x+4)$.",
          "Comprueba distribuyendo: $x^2+4x+3x+12=x^2+7x+12$."
        ],
        "preguntas": [
          {
            "pregunta": "Desarrolla $(x+2)(x+5)$.",
            "opciones": [
              "$x^2+7x+10$",
              "$x^2+10x+7$",
              "$x^2+7x+7$"
            ],
            "correcta": 0,
            "pista": "El coeficiente central es la suma; el independiente, el producto.",
            "explicacion": "$2+5=7$ y $2\\times5=10$.",
            "errores": [
              "",
              "Intercambiaste suma y producto.",
              "El término independiente es 2×5."
            ]
          },
          {
            "pregunta": "Factoriza $x^2+6x+8$.",
            "opciones": [
              "$(x+1)(x+8)$",
              "$(x+2)(x+4)$",
              "$(x+3)^2$"
            ],
            "correcta": 1,
            "pista": "Busca producto 8 y suma 6.",
            "explicacion": "2×4=8 y 2+4=6; al desarrollar se recupera el trinomio.",
            "errores": [
              "1+8=9, no 6.",
              "",
              "(x+3)² termina en 9, no 8."
            ]
          },
          {
            "pregunta": "Factoriza $x^2-x-6$.",
            "opciones": [
              "$(x-2)(x+3)$",
              "$(x-3)(x-2)$",
              "$(x-3)(x+2)$"
            ],
            "correcta": 2,
            "pista": "Busca producto −6 y suma −1.",
            "explicacion": "$(-3)+2=-1$ y $(-3)\\times2=-6$.",
            "errores": [
              "La suma es +1, no −1.",
              "El producto es +6 y la suma −5.",
              ""
            ]
          }
        ],
        "ejemplosExtra": []
      },
      {
        "id": "cubos",
        "titulo": "Cubos de binomios: multiplicar tres veces",
        "tituloRuta": "Cubos de binomios",
        "descripcionRuta": "Distribuir y agrupar términos iguales",
        "fase": "04 · PROFUNDIZA CON POTENCIAS",
        "bases": [
          "Cuadrados de binomios, distributiva y potencias de igual base."
        ],
        "refuerzos": [
          "lenguaje",
          "cuadrado-suma",
          "cuadrado-resta"
        ],
        "meta": "Desarrollar cubos de suma y diferencia con la distributiva.",
        "paraQue": "Para calcular una expresión multiplicada por sí misma tres veces sin omitir productos.",
        "explicacion": [
          "Elevar al cubo significa multiplicar la base tres veces: $3^3=3\\times3\\times3=27$. Por eso $(a+b)^3=(a+b)(a+b)(a+b)$.",
          "Primero multiplica dos factores, algo que ya conoces: $(a+b)^2=a^2+2ab+b^2$. Después multiplica el resultado por el tercer factor: $(a+b)(a^2+2ab+b^2)$.",
          "Al distribuir aparecen $a^3+2a^2b+ab^2+a^2b+2ab^2+b^3$. Reúne los términos semejantes: $2a^2b+a^2b=3a^2b$ y $ab^2+2ab^2=3ab^2$.",
          "Así, $(a+b)^3=a^3+3a^2b+3ab^2+b^3$. Los dos coeficientes 3 proceden de sumar términos semejantes; no hay que adivinarlos.",
          "Para una diferencia sustituye b por −b: $(a-b)^3=a^3-3a^2b+3ab^2-b^3$. Las potencias impares de −b son negativas y las pares son positivas.",
          "El cuadrado usa dos factores y el cubo usa tres. Por ejemplo, $(2+1)^2=9$ y $(2+1)^3=27$."
        ],
        "ejemplo": "Desarrolla $(x+2)^3$.",
        "pasos": [
          "Cuadrado previo: $(x+2)^2=x^2+4x+4$.",
          "Multiplica por x+2: $x^3+4x^2+4x+2x^2+8x+8$.",
          "Reúne: $x^3+6x^2+12x+8$.",
          "Con $x=1$: $3^3=27$ y $1+6+12+8=27$."
        ],
        "preguntas": [
          {
            "pregunta": "Desarrolla $(x+1)^3$.",
            "opciones": [
              "$x^3+1$",
              "$x^3+3x^2+3x+1$",
              "$x^3+2x+1$"
            ],
            "correcta": 1,
            "pista": "Multiplica primero (x+1)² y después el resultado por (x+1).",
            "explicacion": "$x^3+3(x^2)(1)+3(x)(1^2)+1=x^3+3x^2+3x+1$.",
            "errores": [
              "Faltan los términos intermedios que aparecen al distribuir.",
              "",
              "Usaste una expresión que no corresponde al cubo."
            ]
          },
          {
            "pregunta": "Al desarrollar $(a+b)^3$, ¿cómo se reúne $2a^2b+a^2b$?",
            "opciones": [
              "$3a^2b$",
              "$2a^4b^2$",
              "$3a^3b$"
            ],
            "correcta": 0,
            "pista": "La parte literal es la misma: suma los coeficientes 2 y 1.",
            "explicacion": "$2a^2b+1a^2b=(2+1)a^2b=3a^2b$. Al sumar términos semejantes, la parte literal se conserva.",
            "errores": [
              "",
              "Multiplicaste las partes literales; aquí se están sumando términos semejantes.",
              "Al sumar términos semejantes no cambia el exponente de a."
            ]
          },
          {
            "pregunta": "Desarrolla $(x-1)^3$.",
            "opciones": [
              "$x^3-1$",
              "$x^3-3x^2-3x-1$",
              "$x^3-3x^2+3x-1$"
            ],
            "correcta": 2,
            "pista": "Las potencias de −1 alternan sus signos.",
            "explicacion": "$x^3-3x^2+3x-1$.",
            "errores": [
              "Faltan los términos intermedios.",
              "El término con (−1)² es positivo.",
              ""
            ]
          }
        ],
        "ejemplosExtra": [
          {
            "problema": "Desarrolla $(2x-1)^3$.",
            "pasos": [
              "La base del primer término es $2x$.",
              "$(2x)^3-3(2x)^2(1)+3(2x)(1)^2-1^3$.",
              "Resultado: $8x^3-12x^2+6x-1$."
            ]
          }
        ]
      },
      {
        "id": "factor-cubos",
        "titulo": "Sumas y diferencias de cubos",
        "tituloRuta": "Factorizar cubos",
        "descripcionRuta": "Dos términos, no un cubo de binomio",
        "fase": "04 · PROFUNDIZA CON POTENCIAS",
        "bases": [
          "Productos de binomios, potencias cúbicas y factor común."
        ],
        "refuerzos": [
          "cubos",
          "multiplicar",
          "factor-comun"
        ],
        "meta": "Distinguir un cubo de binomio de una suma o diferencia de cubos y factorizar estas últimas.",
        "paraQue": "Para cerrar el tema reconociendo la estructura antes de elegir una identidad.",
        "explicacion": [
          "$a^3-b^3$ tiene dos términos; $(a-b)^3$ generalmente desarrolla cuatro. No son lo mismo: $3^3-1^3=26$, pero $(3-1)^3=8$.",
          "La diferencia de cubos se factoriza como $a^3-b^3=(a-b)(a^2+ab+b^2)$. Comprueba distribuyendo: los términos a²b y ab² se cancelan por pares.",
          "La suma de cubos es $a^3+b^3=(a+b)(a^2-ab+b^2)$. El signo del primer paréntesis coincide con el original; el término central del segundo lleva el signo contrario y el último siempre es positivo.",
          "Para $8x^3-27$, las bases cúbicas son 2x y 3. Así: $(2x-3)(4x^2+6x+9)$. Eleva las bases completas, no solo las letras.",
          "Antes de elegir una fórmula, identifica qué se está elevando al cubo: un binomio completo o cada término por separado. Después comprueba la factorización multiplicando sus factores."
        ],
        "ejemplo": "Factoriza $x^3-8$.",
        "pasos": [
          "$8=2^3$; identifica $a=x$ y $b=2$.",
          "Escribe $(x-2)(x^2+2x+4)$.",
          "Comprueba: $x^3+2x^2+4x-2x^2-4x-8=x^3-8$."
        ],
        "preguntas": [
          {
            "pregunta": "Factoriza $x^3-27$.",
            "opciones": [
              "$(x-3)(x^2+3x+9)$",
              "$(x-3)^3$",
              "$(x-3)(x^2-3x+9)$"
            ],
            "correcta": 0,
            "pista": "27=3³ y el segundo paréntesis tiene dos signos positivos.",
            "explicacion": "$x^3-3^3=(x-3)(x^2+3x+9)$.",
            "errores": [
              "",
              "(x−3)³ contiene términos intermedios.",
              "El término central debe ser +3x para cancelar los productos cruzados."
            ]
          },
          {
            "pregunta": "Factoriza $x^3+8$.",
            "opciones": [
              "$(x+2)^3$",
              "$(x+2)(x^2-2x+4)$",
              "$(x+2)(x^2+2x+4)$"
            ],
            "correcta": 1,
            "pista": "La suma de cubos usa signo negativo en el término central del trinomio.",
            "explicacion": "$x^3+2^3=(x+2)(x^2-2x+4)$.",
            "errores": [
              "El cubo del binomio agrega 6x² y 12x.",
              "",
              "El signo central debe ser negativo para cancelar."
            ]
          },
          {
            "pregunta": "¿Son iguales $a^3-b^3$ y $(a-b)^3$ para todos los reales?",
            "opciones": [
              "Sí, siempre.",
              "Sí, porque ambas tienen exponente 3.",
              "No; con a=3 y b=1 dan 26 y 8."
            ],
            "correcta": 2,
            "pista": "Prueba un par de valores sencillos.",
            "explicacion": "$27-1=26$ y $(3-1)^3=8$.",
            "errores": [
              "Un solo contraejemplo basta para descartar la igualdad general.",
              "Los paréntesis cambian la base que se eleva al cubo.",
              ""
            ]
          }
        ],
        "ejemplosExtra": []
      }
    ],
    "puenteAnterior": {
      "titulo": "¿Necesitas repasar la distributiva o los signos?",
      "descripcion": "Vuelve a la base del tema 1. Al regresar conservarás las respuestas de esta sesión.",
      "tema": "t1-u1-tema1",
      "leccion": "distributiva"
    },
    "cierreIntroduccion": "Estos ocho ejercicios combinan productos y factorizaciones de este tema. Reconoce primero la estructura y comprueba después con la distributiva.",
    "retosCierre": [
      "Desarrolla $(x+3)^2$ con la distributiva y explica por qué aparecen dos términos de 3x.",
      "Elige una diferencia de cuadrados, factorízala y recupera la expresión multiplicando.",
      "Explica por qué x³−8 y (x−2)³ no son iguales. Da un ejemplo numérico."
    ],
    "diagnostico": [
      {
        "pregunta": "La letra $x$ representa un número. Si ese número es 3, ¿cuánto es $2\\times x$ (dos veces ese número)?",
        "opciones": [
          "$5$",
          "$6$",
          "$9$"
        ],
        "correcta": 1,
        "pista": "Reemplaza la letra por 3: tienes dos grupos de 3. El símbolo × indica multiplicación.",
        "explicacion": "La letra x vale 3. Multiplicamos 2 por 3: 2 × 3 = 6. El símbolo × significa «multiplicado por». La escritura 2x también significa multiplicar 2 por el valor de x; no significa sumar.",
        "errores": [
          "Sumaste 2 y 3. Aquí se pide multiplicar: dos grupos de tres.",
          "",
          "Multiplicaste 3 por sí mismo. Aquí debes multiplicar 2 por el valor de la letra, que es 3."
        ],
        "leccion": "lenguaje"
      },
      {
        "pregunta": "¿Cuál equivale a $(2x)^2$?",
        "opciones": [
          "$4x^2$",
          "$2x^2$",
          "$4x$"
        ],
        "correcta": 0,
        "pista": "Eleva al cuadrado tanto el coeficiente como la letra.",
        "explicacion": "$(2x)(2x)=2\\times2\\times x\\times x=4x^2$.",
        "errores": [
          "",
          "El 2 también está dentro de la base que se eleva al cuadrado.",
          "Falta el segundo factor x."
        ],
        "leccion": "lenguaje"
      },
      {
        "pregunta": "Reúne los términos $3x+2x$.",
        "opciones": [
          "$5x^2$",
          "$6x$",
          "$5x$"
        ],
        "correcta": 2,
        "pista": "Hay tres grupos de x más dos grupos de x.",
        "explicacion": "$(3+2)x=5x$; la suma no multiplica las letras.",
        "errores": [
          "Sumar términos no eleva x al cuadrado.",
          "Multiplicaste los coeficientes en lugar de sumarlos.",
          ""
        ],
        "leccion": "lenguaje"
      },
      {
        "pregunta": "Distribuye $2(x+3)$.",
        "opciones": [
          "$2x+3$",
          "$2x+6$",
          "$x+6$"
        ],
        "correcta": 1,
        "pista": "El 2 multiplica ambos términos.",
        "explicacion": "$2\\times x+2\\times3=2x+6$.",
        "errores": [
          "Falta multiplicar 3 por 2.",
          "",
          "Falta multiplicar x por 2."
        ],
        "leccion": "multiplicar"
      },
      {
        "pregunta": "¿Cuánto es $4\\times3$?",
        "opciones": [
          "$7$",
          "$12$",
          "$14$"
        ],
        "correcta": 1,
        "pista": "Son cuatro grupos de tres.",
        "explicacion": "4 × 3 = 12: cuatro grupos de tres suman 3 + 3 + 3 + 3.",
        "errores": [
          "Sumaste 4 y 3, pero se pide multiplicar.",
          "",
          "Cuatro grupos de tres suman 12, no 14."
        ],
        "leccion": "multiplicar"
      },
      {
        "pregunta": "Calcula $(-2)(-3)$.",
        "opciones": [
          "$-6$",
          "$6$",
          "$-5$"
        ],
        "correcta": 1,
        "pista": "Un producto de dos negativos es positivo.",
        "explicacion": "2×3=6 y los dos signos negativos dan positivo.",
        "errores": [
          "Signos iguales dan producto positivo.",
          "",
          "La operación es un producto, no una suma."
        ],
        "leccion": "lenguaje"
      }
    ],
    "cierre": [
      {
        "pregunta": "Desarrolla $(x+5)^2$.",
        "opciones": [
          "$x^2+10x+25$",
          "$x^2+25$",
          "$x^2+5x+25$"
        ],
        "correcta": 0,
        "pista": "Calcula el doble producto.",
        "explicacion": "$x^2+2(x)(5)+5^2=x^2+10x+25$.",
        "errores": [
          "",
          "Faltan los dos productos cruzados.",
          "Falta uno de los productos cruzados."
        ],
        "leccion": "cuadrado-suma"
      },
      {
        "pregunta": "Desarrolla $(2x-3)^2$.",
        "opciones": [
          "$4x^2-6x+9$",
          "$4x^2-12x+9$",
          "$4x^2-9$"
        ],
        "correcta": 1,
        "pista": "El doble producto es 2×2x×3.",
        "explicacion": "$(2x)^2-2(2x)(3)+3^2=4x^2-12x+9$.",
        "errores": [
          "Solo incluiste un producto cruzado.",
          "",
          "Esa es una diferencia de cuadrados, no un cuadrado de diferencia."
        ],
        "leccion": "cuadrado-resta"
      },
      {
        "pregunta": "Desarrolla $(3x+2)(3x-2)$.",
        "opciones": [
          "$3x^2-4$",
          "$9x^2+4$",
          "$9x^2-4$"
        ],
        "correcta": 2,
        "pista": "Eleva 3x al cuadrado y resta 2².",
        "explicacion": "$(3x)^2-2^2=9x^2-4$.",
        "errores": [
          "Falta elevar al cuadrado el coeficiente 3.",
          "El producto 2×(−2) es negativo.",
          ""
        ],
        "leccion": "conjugados"
      },
      {
        "pregunta": "Factoriza $10x^2-15x$.",
        "opciones": [
          "$5x(2x-3)$",
          "$5(2x-3)$",
          "$5x(2x+3)$"
        ],
        "correcta": 0,
        "pista": "Ambos términos contienen 5x.",
        "explicacion": "$10x^2=5x(2x)$ y $-15x=5x(-3)$.",
        "errores": [
          "",
          "Se perdieron los factores x al dividir.",
          "El segundo término debe seguir siendo negativo."
        ],
        "leccion": "factor-comun"
      },
      {
        "pregunta": "Factoriza $x^2-14x+49$.",
        "opciones": [
          "$(x-7)(x+7)$",
          "$(x-7)^2$",
          "$(x-14)^2$"
        ],
        "correcta": 1,
        "pista": "49=7² y −14x=−2×x×7.",
        "explicacion": "$(x-7)^2=x^2-14x+49$.",
        "errores": [
          "Los conjugados dan x²−49.",
          "",
          "El último término sería 196 y el central −28x."
        ],
        "leccion": "factor-cuadrados"
      },
      {
        "pregunta": "Factoriza $x^2+9x+20$.",
        "opciones": [
          "$(x+2)(x+10)$",
          "$(x+5)^2$",
          "$(x+4)(x+5)$"
        ],
        "correcta": 2,
        "pista": "Busca producto 20 y suma 9.",
        "explicacion": "4×5=20 y 4+5=9.",
        "errores": [
          "2+10=12, no 9.",
          "(x+5)² tiene término central 10x y final 25.",
          ""
        ],
        "leccion": "termino-comun"
      },
      {
        "pregunta": "Desarrolla $(x+3)^3$.",
        "opciones": [
          "$x^3+9x^2+27x+27$",
          "$x^3+27$",
          "$x^3+6x^2+9$"
        ],
        "correcta": 0,
        "pista": "Usa los coeficientes 1,3,3,1 con b=3.",
        "explicacion": "$x^3+3(x^2)(3)+3(x)(9)+27=x^3+9x^2+27x+27$.",
        "errores": [
          "",
          "Faltan los términos intermedios que aparecen al distribuir.",
          "Usaste términos que no corresponden al cubo."
        ],
        "leccion": "cubos"
      },
      {
        "pregunta": "Factoriza $8x^3+1$.",
        "opciones": [
          "$(2x+1)^3$",
          "$(2x+1)(4x^2-2x+1)$",
          "$(2x+1)(4x^2+2x+1)$"
        ],
        "correcta": 1,
        "pista": "Las bases cúbicas son 2x y 1.",
        "explicacion": "$(2x)^3+1^3=(2x+1)((2x)^2-(2x)(1)+1^2)$.",
        "errores": [
          "El cubo del binomio agrega términos intermedios.",
          "",
          "La suma de cubos necesita el signo central negativo."
        ],
        "leccion": "factor-cubos"
      }
    ]
  }
};
