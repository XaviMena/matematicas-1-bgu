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
              "descripcion": "Desarrollo algebraico y demostración visual mediante áreas y volúmenes: binomio al cuadrado, diferencia de cuadrados y cubo de un binomio."
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
    "unidadId": "unidad-1",
    "unidadTitulo": "Unidad 1: Propiedades de los números reales y medidas de tendencia central y dispersión",
    "trimestre": 1,
    "paginasLibro": "16-17",
    "apertura": {
      "saberesPrevios": "¿Cómo se calcula el área de un cuadrado de lado $x$? ¿Y el volumen de un cubo de arista $a$?",
      "desequilibrioCognitivo": "Si un cuadrado tiene lado $(a+b)$, ¿su área es simplemente $a^2 + b^2$? ¿Por qué faltan áreas intermedias al cometer ese error común?",
      "contextoVidaReal": "Los productos notables se utilizan en la optimización de algoritmos de inteligencia artificial, procesamiento de gráficos computacionales 3D y en el cálculo estructural de componentes arquitectónicos."
    },
    "productosNotables": [
      {
        "nombre": "Cuadrado de la suma de un binomio",
        "formula": "(a + b)^2 = a^2 + 2ab + b^2",
        "demostracionAlgebraica": "(a + b)(a + b) = a(a + b) + b(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2",
        "interpretacionGeometrica": "Un cuadrado de lado $(a+b)$ se descompone exactamente en 4 regiones: un cuadrado grande de área $a^2$, un cuadrado pequeño de área $b^2$, y dos rectángulos simétricos de área $ab$. Por tanto, el área total es $a^2 + 2ab + b^2$.",
        "tipoVisual": "cuadrado-binomio"
      },
      {
        "nombre": "Cuadrado de la diferencia de un binomio",
        "formula": "(a - b)^2 = a^2 - 2ab + b^2",
        "demostracionAlgebraica": "(a - b)(a - b) = a(a - b) - b(a - b) = a^2 - ab - ba + b^2 = a^2 - 2ab + b^2",
        "interpretacionGeometrica": "A partir de un cuadrado de lado $a$ con área $a^2$, se restan dos tiras rectangulares de dimensiones $a \\times b$. Al restar ambas tiras, la esquina $b \\times b$ se sustrae dos veces, por lo que debe sumarse $b^2$ para compensar.",
        "tipoVisual": "cuadrado-diferencia"
      },
      {
        "nombre": "Producto de la suma por la diferencia (Diferencia de cuadrados)",
        "formula": "(a + b)(a - b) = a^2 - b^2",
        "demostracionAlgebraica": "(a + b)(a - b) = a^2 - ab + ba - b^2 = a^2 - b^2",
        "interpretacionGeometrica": "A un cuadrado de lado $a$ y área $a^2$ se le extirpa una esquina cuadrada de lado $b$ (área $b^2$). La figura resultante en forma de 'L' de área $a^2 - b^2$ puede cortarse y reordenarse como un solo rectángulo de base $(a+b)$ y altura $(a-b)$.",
        "tipoVisual": "diferencia-cuadrados"
      },
      {
        "nombre": "Producto de dos binomios con un término común",
        "formula": "(x + a)(x + b) = x^2 + (a + b)x + ab",
        "demostracionAlgebraica": "(x + a)(x + b) = x^2 + xb + ax + ab = x^2 + (a + b)x + ab",
        "interpretacionGeometrica": "Representa el área de un rectángulo con dimensiones $(x+a)$ y $(x+b)$, compuesto por un cuadrado base $x^2$, dos extensiones rectangulares $ax$ y $bx$, y la esquina de cierre $ab$.",
        "tipoVisual": "termino-comun"
      },
      {
        "nombre": "Cubo de un binomio (Suma)",
        "formula": "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
        "demostracionAlgebraica": "(a + b)^3 = (a + b)(a + b)^2 = (a + b)(a^2 + 2ab + b^2) = a^3 + 2a^2b + ab^2 + a^2b + 2ab^2 + b^3 = a^3 + 3a^2b + 3ab^2 + b^3",
        "interpretacionGeometrica": "Un cubo grande tridimensional de arista $(a+b)$ se divide en exactamente 8 cuerpos paralelepípedos: 1 cubo grande $a^3$, 3 paralelepípedos de base cuadrada y altura $b$ ($3a^2b$), 3 paralelepípedos de base $b^2$ y altura $a$ ($3ab^2$), y 1 cubo pequeño $b^3$.",
        "tipoVisual": "cubo-binomio"
      },
      {
        "nombre": "Cubo de un binomio (Diferencia)",
        "formula": "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3",
        "demostracionAlgebraica": "(a - b)^3 = (a - b)(a^2 - 2ab + b^2) = a^3 - 3a^2b + 3ab^2 - b^3",
        "interpretacionGeometrica": "Reducción volumétrica análoga al cubo de una suma con alternancia de signos debida a los volúmenes sustraídos y compensados.",
        "tipoVisual": "cubo-diferencia"
      }
    ],
    "ejemplosLibro": [
      {
        "titulo": "Cálculo mental de áreas aplicando $(a+b)^2$",
        "problema": "Calcular mentalmente $(4.1)^2$ utilizando descomposición de binomios.",
        "desarrollo": [
          "1. Descomponer el número: $4.1 = 4 + 0.1$",
          "2. Aplicar la fórmula: $(4 + 0.1)^2 = 4^2 + 2(4)(0.1) + (0.1)^2$",
          "3. Calcular cada término: $16 + 0.8 + 0.01 = 16.81$"
        ]
      },
      {
        "titulo": "Factorización de diferencia de cubos",
        "problema": "Demostrar que $(a - b)(a^2 + ab + b^2) = a^3 - b^3$",
        "desarrollo": [
          "1. Propiedad distributiva: $a(a^2 + ab + b^2) - b(a^2 + ab + b^2)$",
          "2. Expandir: $a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3$",
          "3. Cancelación de términos opuestos: $+a^2b - a^2b = 0$ y $+ab^2 - ab^2 = 0$",
          "4. Resultado: $a^3 - b^3$"
        ]
      }
    ]
  }
};
