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
          "titulo": "Propiedades de los números reales y medidas de tendencia central y dispersión",
          "paginas": "10-35",
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
              "titulo": "Productos notables y factorización con interpretación geométrica",
              "paginas": "16-17",
              "archivo": "data/modules/t1-u1-tema2.json",
              "descripcion": "Ruta de aprendizaje con diagnóstico, distributiva, modelos de áreas y volúmenes, productos notables, factor común y factorización de cuadrados, trinomios y cubos."
            },
            {
              "id": "t1-u1-eval1",
              "numero": "1.3",
              "titulo": "Evaluación Formativa: Números Reales y Álgebra",
              "paginas": "18-19",
              "archivo": "data/modules/t1-u1-eval.json",
              "tipo": "evaluacion",
              "descripcion": "Ejercicios prácticos del libro oficial: aproximaciones numéricas (redondeo y truncamiento), simplificación de radicales, inversos multiplicativos y demostraciones algebraicas."
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
  "data/modules/t1-u1-eval.json": {
    "id": "t1-u1-eval",
    "titulo": "Evaluación Formativa: Números Reales, Álgebra y Productos Notables",
    "unidadId": "unidad-1",
    "unidadTitulo": "Unidad 1: Propiedades de los números reales y medidas de tendencia central y dispersión",
    "trimestre": 1,
    "paginasLibro": "18-19",
    "secciones": [
      {
        "id": "sec-1",
        "numero": 1,
        "enunciado": "Aproximaciones decimales con calculadora (4 y 8 cifras decimales)",
        "ejercicios": [
          {
            "literal": "a",
            "expresion": "x = \\sqrt{571}",
            "cuatroDecimales": "23.8956",
            "ochoDecimales": "23.89560629",
            "explicacion": "Valor exacto en punto flotante: 23.8956062908... Se evalúa la cifra siguiente para redondear."
          },
          {
            "literal": "b",
            "expresion": "x = -800\\sqrt{4}",
            "cuatroDecimales": "-1600.0000",
            "ochoDecimales": "-1600.00000000",
            "explicacion": "Como $\\sqrt{4} = 2$, tenemos $-800 \\times 2 = -1600$ (número entero exacto)."
          },
          {
            "literal": "c",
            "expresion": "a = -800\\sqrt{45}",
            "cuatroDecimales": "-5366.5631",
            "ochoDecimales": "-5366.56314599",
            "explicacion": "$\\sqrt{45} = 3\\sqrt{5} \\approx 6.708203932...$; al multiplicar por $-800$ resulta $-5366.56314599$."
          }
        ]
      },
      {
        "id": "sec-2",
        "numero": 2,
        "enunciado": "Operaciones con aproximaciones conocidas",
        "datos": "$\\sqrt{5} \\approx 2.236067977$, $\\sqrt[3]{5} \\approx 1.709975947$, $\\sqrt[4]{5} \\approx 1.495348781$",
        "ejercicios": [
          {
            "literal": "a",
            "expresion": "x = 15.41 - 2.37\\sqrt[3]{5}",
            "resultado": "11.35735701",
            "pasos": [
              "1. Multiplicar: $2.37 \\times 1.709975947 = 4.052642994$",
              "2. Restar: $15.41 - 4.052642994 = 11.35735701$"
            ]
          },
          {
            "literal": "b",
            "expresion": "y = \\frac{1 + \\sqrt[4]{5}}{1 - \\sqrt[3]{5}}",
            "resultado": "-3.5147048",
            "pasos": [
              "1. Numerador: $1 + 1.495348781 = 2.495348781$",
              "2. Denominador: $1 - 1.709975947 = -0.709975947$",
              "3. Cociente: $\\frac{2.495348781}{-0.709975947} \\approx -3.5147048$"
            ]
          }
        ]
      },
      {
        "id": "sec-3",
        "numero": 3,
        "enunciado": "Tabla comparativa: Truncamiento vs. Redondeo",
        "filas": [
          {
            "numero": "2.276567",
            "truncadoCent": "2.27",
            "redondeadoCent": "2.28",
            "truncadoMil": "2.276",
            "redondeadoMil": "2.277"
          },
          {
            "numero": "3.14567",
            "truncadoCent": "3.14",
            "redondeadoCent": "3.15",
            "truncadoMil": "3.145",
            "redondeadoMil": "3.146"
          },
          {
            "numero": "8.43496",
            "truncadoCent": "8.43",
            "redondeadoCent": "8.43",
            "truncadoMil": "8.434",
            "redondeadoMil": "8.435"
          }
        ]
      },
      {
        "id": "sec-5",
        "numero": 5,
        "enunciado": "Cálculo del opuesto aditivo $-x$ para cada expresión real",
        "ejercicios": [
          {
            "literal": "a",
            "expresion": "x = 2a + 1",
            "opuesto": "-x = -(2a + 1) = -2a - 1"
          },
          {
            "literal": "b",
            "expresion": "x = 3a - b",
            "opuesto": "-x = -(3a - b) = -3a + b"
          },
          {
            "literal": "c",
            "expresion": "x = -\\frac{a}{4} + \\frac{2}{3}b",
            "opuesto": "-x = \\frac{a}{4} - \\frac{2}{3}b"
          },
          {
            "literal": "d",
            "expresion": "x = a - \\sqrt{2}b",
            "opuesto": "-x = -a + \\sqrt{2}b"
          },
          {
            "literal": "e",
            "expresion": "a = x - y - 2 \\implies x = a + y + 2",
            "opuesto": "-x = -a - y - 2"
          },
          {
            "literal": "f",
            "expresion": "a = 6x^2 - m^3x",
            "opuesto": "$-x$: Para $x$ despejado o la expresión opuesta $-a = -6x^2 + m^3x$"
          },
          {
            "literal": "g",
            "expresion": "a = \\frac{1}{2}x - \\frac{3}{4}y",
            "opuesto": "-x = -2a - \\frac{3}{2}y"
          },
          {
            "literal": "h",
            "expresion": "0 = -5\\sqrt{3}x + 7\\sqrt{13}y",
            "opuesto": "Como $x = \\frac{7\\sqrt{13}y}{5\\sqrt{3}}$, su opuesto es $-x = -\\frac{7\\sqrt{13}y}{5\\sqrt{3}}$"
          }
        ]
      },
      {
        "id": "sec-6",
        "numero": 6,
        "enunciado": "Determinación del inverso multiplicativo (recíproco $x^{-1} = 1/x$)",
        "ejercicios": [
          {
            "literal": "a",
            "expresion": "x = 3a",
            "inverso": "x^{-1} = \\frac{1}{3a} \\quad (a \\neq 0)"
          },
          {
            "literal": "b",
            "expresion": "x = -\\frac{a}{3b}",
            "inverso": "x^{-1} = -\\frac{3b}{a} \\quad (a, b \\neq 0)"
          },
          {
            "literal": "c",
            "expresion": "x = 10ab",
            "inverso": "x^{-1} = \\frac{1}{10ab} \\quad (a, b \\neq 0)"
          },
          {
            "literal": "d",
            "expresion": "x = -3xy",
            "inverso": "\\text{Opuesto multiplicativo de } -3xy \\text{ es } -\\frac{1}{3xy}"
          }
        ]
      },
      {
        "id": "sec-9",
        "numero": 9,
        "enunciado": "Pruebas y demostraciones algebraicas formales",
        "ejercicios": [
          {
            "literal": "a",
            "expresion": "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc",
            "demostracion": [
              "Agrupar los primeros dos términos: $[(a + b) + c]^2$",
              "Aplicar binomio al cuadrado: $(a + b)^2 + 2(a + b)c + c^2$",
              "Desarrollar: $a^2 + 2ab + b^2 + 2ac + 2bc + c^2$",
              "Reordenar términos cuadráticos y dobles productos: $a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$."
            ]
          },
          {
            "literal": "b",
            "expresion": "(a - b + c)^2 = a^2 + b^2 + c^2 - 2ab + 2ac - 2bc",
            "demostracion": [
              "Escribir como suma de signos: $[a + (-b) + c]^2$",
              "Aplicar la fórmula del trinomio al cuadrado:",
              "$a^2 + (-b)^2 + c^2 + 2a(-b) + 2ac + 2(-b)c$",
              "Simplificar signos: $a^2 + b^2 + c^2 - 2ab + 2ac - 2bc$."
            ]
          }
        ]
      }
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
    ]
  },
  "data/modules/t1-u1-tema2.json": {
    "id": "t1-u1-tema2",
    "titulo": "Productos notables y factorización con interpretación geométrica",
    "temaNumero": 2,
    "unidadId": "unidad-1",
    "unidadTitulo": "Tema 2 · De las áreas a los productos",
    "trimestre": 1,
    "paginasLibro": "16-17",
    "version": 2,
    "introduccion": "Primero entiende las piezas. Después reconoce el patrón y aprende a recorrerlo en ambos sentidos: desarrollar y factorizar.",
    "objetivo": "Desarrollar productos notables, interpretar áreas y volúmenes y factorizar expresiones reconociendo su estructura.",
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
            "explicacion": "Como $x=3$, reemplazamos la letra por 3: $2\\times x=2\\times3=6$. Se lee «dos por tres es igual a seis». En álgebra, $2x$ es otra manera de escribir $2\\times x$: significa multiplicar, no sumar.",
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
        "visual": null,
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
          "Un rectángulo de lados $x+2$ y $x+3$ se divide en cuatro áreas: $x^2$, $3x$, $2x$ y $6$. Las partes juntas cubren exactamente el rectángulo.",
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
        "visual": "binom-rectangle",
        "ejemplosExtra": []
      },
      {
        "id": "cuadrado-suma",
        "titulo": "El cuadrado de una suma",
        "tituloRuta": "Cuadrado de una suma",
        "descripcionRuta": "Las cuatro partes de un cuadrado",
        "fase": "02 · COMPRENDE LOS PRODUCTOS",
        "bases": [
          "Multiplicar binomios; calcular cuadrados."
        ],
        "refuerzos": [
          "lenguaje",
          "multiplicar"
        ],
        "meta": "Explicar y desarrollar el cuadrado de un binomio con suma.",
        "paraQue": "Para calcular áreas y reconocer el término que suele olvidarse.",
        "explicacion": [
          "Elevar $a+b$ al cuadrado significa $(a+b)(a+b)$. No significa elevar cada sumando por separado.",
          "Distribuye: $a^2+ab+ba+b^2$. Como $ab=ba$, hay dos rectángulos de área $ab$: $a^2+2ab+b^2$.",
          "La identidad es $(a+b)^2=a^2+2ab+b^2$. Se lee: cuadrado del primero, más dos veces el producto de ambos, más cuadrado del segundo.",
          "En el dibujo, a y b son longitudes positivas. La identidad algebraica vale para todos los números reales a y b. Un dibujo de longitudes positivas no representa valores negativos.",
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
              "Porque aparecen dos áreas de ab.",
              "Porque se suman los exponentes.",
              "Porque a+b siempre vale 2."
            ],
            "correcta": 0,
            "pista": "Busca los dos productos cruzados.",
            "explicacion": "Los productos ab y ba son iguales y su suma es 2ab.",
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
              "Faltan los dos rectángulos de 4x.",
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
        "visual": "binom-square",
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
        "descripcionRuta": "Restar tiras y recuperar la esquina",
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
          "$(a-b)^2=(a-b)(a-b)$. Distribuye: $a^2-ab-ba+b^2$. El último producto es positivo porque $(-b)(-b)=b^2$.",
          "Así, $(a-b)^2=a^2-2ab+b^2$. Solo el término central lleva signo negativo; el último sigue siendo un cuadrado positivo o cero.",
          "Para visualizarlo usamos $a>b>0$. Desde un cuadrado de lado a, retira una tira horizontal y una vertical de ancho b. La esquina b×b pertenece a las dos tiras.",
          "Al restar ambas tiras completas, contaste esa esquina dos veces. Debes recuperarla una vez: $a^2-ab-ab+b^2$. Queda el cuadrado de lado $a-b$.",
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
            "pregunta": "¿Por qué se suma la esquina b² después de retirar dos tiras?",
            "opciones": [
              "Porque fue restada dos veces.",
              "Porque toda resta cambia a suma.",
              "Porque el área total aumenta."
            ],
            "correcta": 0,
            "pista": "La esquina pertenece a las dos tiras retiradas.",
            "explicacion": "Se recupera una copia para que la esquina se retire solo una vez.",
            "errores": [
              "",
              "Solo corregimos la doble sustracción de la esquina.",
              "El cuadrado final es menor; sumar b² corrige el conteo."
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
        "visual": "binom-difference",
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
        "paraQue": "Para calcular productos y preparar su factorización.",
        "explicacion": [
          "Los binomios $a+b$ y $a-b$ tienen los mismos términos y solo cambia el signo entre ellos: se llaman conjugados.",
          "Distribuye $(a+b)(a-b)=a^2-ab+ba-b^2$. Como $-ab+ba=0$, queda $a^2-b^2$.",
          "En $(x+4)(x-4)=x^2-16$ no hay término con x: se cancelan $-4x$ y $+4x$.",
          "Para el modelo geométrico usa $a>b>0$. Quita de un cuadrado a×a una esquina b×b: queda una L de área $a^2-b^2$.",
          "Divide la L en un rectángulo a×(a−b) y otro b×(a−b). Al girar el segundo y colocarlo junto al primero, forman un rectángulo de lados a+b y a−b."
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
        "visual": "binom-conjugates",
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
          "En un rectángulo dividido con altura común a, la suma de sus áreas $ab+ac$ se escribe como el producto de altura por base total: $a(b+c)$."
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
        "visual": "factor-area",
        "ejemplosExtra": []
      },
      {
        "id": "factor-cuadrados",
        "titulo": "Reconocer cuadrados y diferencias de cuadrados",
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
          "Un trinomio cuadrado perfecto tiene tres términos: los extremos son cuadrados y el central es el doble producto de sus bases. $x^2+6x+9$ cumple esto porque $9=3^2$ y $6x=2(x)(3)$.",
          "Así, $x^2+6x+9=(x+3)^2$. Si el central es negativo, $x^2-6x+9=(x-3)^2$. No basta con que los extremos sean cuadrados.",
          "En $4x^2+12x+9$, las bases de los cuadrados son $2x$ y 3. Su doble producto es $12x$; por eso se factoriza como $(2x+3)^2$.",
          "Una diferencia de cuadrados tiene dos términos cuadrados separados por resta: $x^2-25=(x+5)(x-5)$. La identidad $a^2-b^2=(a+b)(a-b)$ se lee ahora al revés.",
          "Antes de buscar patrones, revisa el factor común: $2x^2-18=2(x^2-9)=2(x+3)(x-3)$. Una suma de cuadrados $x^2+9$ no se factoriza como $(x+3)(x-3)$ en los reales."
        ],
        "ejemplo": "Factoriza $x^2-8x+16$.",
        "pasos": [
          "Los extremos son $x^2$ y $4^2$.",
          "El doble producto es $2(x)(4)=8x$, con signo negativo en la expresión.",
          "Es un cuadrado de diferencia: $(x-4)^2$.",
          "Comprueba: $(x-4)(x-4)=x^2-8x+16$."
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
        "visual": null,
        "ejemplosExtra": []
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
        "visual": "binom-rectangle",
        "ejemplosExtra": []
      },
      {
        "id": "cubos",
        "titulo": "Del área al volumen: cubos de binomios",
        "tituloRuta": "Cubos de binomios",
        "descripcionRuta": "Por qué aparecen dos grupos de tres",
        "fase": "04 · PROFUNDIZA CON VOLÚMENES",
        "bases": [
          "Cuadrados de binomios, distributiva y volumen de un prisma."
        ],
        "refuerzos": [
          "lenguaje",
          "cuadrado-suma",
          "cuadrado-resta"
        ],
        "meta": "Desarrollar cubos de suma y diferencia y relacionar la suma con ocho volúmenes.",
        "paraQue": "Para extender lo aprendido de dos dimensiones a tres.",
        "explicacion": [
          "El volumen de un prisma rectangular es largo×ancho×alto. En un cubo de arista a, vale $a^3$. Cada uno de los tres factores aporta una longitud.",
          "$(a+b)^3=(a+b)(a+b)^2$. Usa el cuadrado aprendido y distribuye: $(a+b)(a^2+2ab+b^2)$.",
          "Aparecen $a^3+2a^2b+ab^2+a^2b+2ab^2+b^3$. Reuniendo términos: $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.",
          "Si a y b son longitudes positivas, divide cada arista en a y b. Los ocho prismas son: uno de volumen a³, tres de a²b, tres de ab² y uno de b³. Los coeficientes 3 cuentan piezas iguales.",
          "Para una diferencia sustituye b por −b en la identidad: $(a-b)^3=a^3-3a^2b+3ab^2-b^3$. Los signos alternan porque las potencias impares de −b son negativas y las pares son positivas.",
          "El cuadrado tiene coeficientes 1,2,1; el cubo tiene 1,3,3,1. No uses la fórmula del cuadrado para un volumen."
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
            "pista": "Hay ocho piezas agrupadas en 1,3,3,1.",
            "explicacion": "$x^3+3(x^2)(1)+3(x)(1^2)+1=x^3+3x^2+3x+1$.",
            "errores": [
              "Faltan los seis prismas intermedios.",
              "",
              "Usaste una expresión que no corresponde al cubo."
            ]
          },
          {
            "pregunta": "¿Cuántas piezas de volumen $a^2b$ aparecen en $(a+b)^3$?",
            "opciones": [
              "Tres.",
              "Dos.",
              "Una."
            ],
            "correcta": 0,
            "pista": "La longitud b puede estar en cualquiera de las tres dimensiones.",
            "explicacion": "Hay tres posiciones para b: b×a×a, a×b×a y a×a×b.",
            "errores": [
              "",
              "El cubo tiene tres dimensiones, no dos.",
              "La dimensión b puede ocupar tres posiciones."
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
        "visual": "binom-cube",
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
        "fase": "04 · PROFUNDIZA CON VOLÚMENES",
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
          "El diagrama de volúmenes de la lección anterior explica un cubo de binomio. Estas dos identidades se justifican aquí con distributiva y cancelación; no son el mismo reparto de ocho piezas."
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
        "visual": null,
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
      "Dibuja el cuadrado de lado x+3 y explica por qué su área incluye 6x.",
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
        "explicacion": "Como $x=3$, reemplazamos la letra por 3: $2\\times x=2\\times3=6$. Se lee «dos por tres es igual a seis». En álgebra, $2x$ es otra manera de escribir $2\\times x$: significa multiplicar, no sumar.",
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
        "pregunta": "Un rectángulo de lados 4 y 3 tiene área…",
        "opciones": [
          "$7$ unidades cuadradas.",
          "$12$ unidades cuadradas.",
          "$14$ unidades cuadradas."
        ],
        "correcta": 1,
        "pista": "El área se obtiene multiplicando base por altura.",
        "explicacion": "4×3=12 unidades cuadradas.",
        "errores": [
          "Sumaste los lados.",
          "",
          "Calculaste el perímetro, no el área."
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
          "Faltan las dos áreas cruzadas.",
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
          "Faltan los volúmenes intermedios.",
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
