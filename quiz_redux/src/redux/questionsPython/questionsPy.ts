
const pythonQuest = [
  {
    number: 1,
    question: "O que é o GIL (Global Interpreter Lock) em Python?",
    options: [
      "Um mecanismo que permite múltiplas threads executarem simultaneamente",
      "Um lock que permite apenas uma thread executar bytecode por vez",
      "Um sistema de garbage collection",
      "Um gerenciador de memória para CPython"
    ],
    answer: "Um lock que permite apenas uma thread executar bytecode por vez",
  },
  {
    number: 2,
    question: "Qual é a diferença entre 'is' e '==' em Python?",
    options: [
      "'is' compara valores, '==' compara identidades",
      "'is' compara identidades, '==' compara valores",
      "Ambos comparam valores de forma idêntica",
      "'is' é para números, '==' é para strings"
    ],
    answer: "'is' compara identidades, '==' compara valores",
  },
  {
    number: 3,
    question: "O que são decoradores em Python?",
    options: [
      "Funções que modificam o comportamento de outras funções",
      "Comentários especiais para documentação",
      "Funções built-in para formatação de strings",
      "Métodos para decorar interfaces gráficas"
    ],
    answer: "Funções que modificam o comportamento de outras funções",
  },
  {
    number: 4,
    question: "Qual é o propósito do método __init__ em uma classe Python?",
    options: [
      "Destruir o objeto quando não é mais necessário",
      "Inicializar o objeto quando uma instância é criada",
      "Converter o objeto para string",
      "Comparar dois objetos da mesma classe"
    ],
    answer: "Inicializar o objeto quando uma instância é criada",
  },
  {
    number: 5,
    question: "O que são context managers em Python?",
    options: [
      "Funções que gerenciam o contexto de execução do programa",
      "Objetos que gerenciam recursos usando 'with' statement",
      "Classes que controlam o escopo de variáveis",
      "Módulos para gerenciar configurações"
    ],
    answer: "Objetos que gerenciam recursos usando 'with' statement",
  },
  {
    number: 6,
    question: "Qual é a diferença entre list comprehension e generator expression?",
    options: [
      "List comprehension é mais rápida, generator é mais legível",
      "List comprehension cria uma lista, generator cria um iterador lazy",
      "Generator expression só funciona com números",
      "Não há diferença significativa"
    ],
    answer: "List comprehension cria uma lista, generator cria um iterador lazy",
  },
  {
    number: 7,
    question: "O que é monkey patching em Python?",
    options: [
      "Corrigir bugs automaticamente",
      "Modificar classes ou módulos em runtime",
      "Uma técnica de otimização de performance",
      "Um padrão de design para testes"
    ],
    answer: "Modificar classes ou módulos em runtime",
  },
  {
    number: 8,
    question: "Qual é a função do método __slots__ em uma classe?",
    options: [
      "Permitir herança múltipla",
      "Otimizar memória restringindo atributos",
      "Definir métodos estáticos",
      "Criar propriedades computadas"
    ],
    answer: "Otimizar memória restringindo atributos",
  },
  {
    number: 9,
    question: "O que é metaprogramação em Python?",
    options: [
      "Programação para metaverso",
      "Código que escreve ou modifica outro código",
      "Programação com metacaracteres em regex",
      "Uso de metadata em arquivos"
    ],
    answer: "Código que escreve ou modifica outro código",
  },
  {  
    number: 10,
    question: "Qual é a diferença entre @staticmethod e @classmethod?",
    options: [
      "@staticmethod recebe a classe, @classmethod não recebe parâmetros",
      "@classmethod recebe a classe, @staticmethod não recebe parâmetros especiais",
      "Ambos são idênticos em funcionalidade",
      "@staticmethod é deprecated em Python 3"
    ],
    answer: "@classmethod recebe a classe, @staticmethod não recebe parâmetros especiais", 
  },
  {
    number: 11,
    question: "O que são dataclasses em Python?",
    options: [
      "Classes especiais para trabalhar com bancos de dados",
      "Classes que automaticamente geram métodos como __init__ e __repr__",
      "Classes que só contêm dados sem métodos",
      "Classes para manipulação de datas"
    ],
    answer: "Classes que automaticamente geram métodos como __init__ e __repr__",
  },
  {
    number: 12,
    question: "Qual é o propósito do método __call__?",
    options: [
      "Tornar um objeto callable como uma função",
      "Chamar o construtor da classe",
      "Implementar chamadas de superclasse",
      "Definir o comportamento de comparação"
    ],
    answer: "Tornar um objeto callable como uma função",
  },
  {
    number: 13,
    question: "O que é duck typing em Python?",
    options: [
      "Um sistema de tipagem estática",
      "Focar na interface do objeto",
      "Um padrão para classes que representam animais",
      "Uma técnica para debugging"
    ],
    answer: "Focar na interface do objeto",
  },
  {
    number: 14,
    question: "Qual é a diferença entre deep copy e shallow copy?",
    options: [
      "Shallow copy cria novos objetos para elementos aninhados",
      "Deep copy cria novos objetos para todos os níveis",
      "Ambas criam cópias idênticas",
      "Deep copy é mais rápida que shallow copy"
    ],
    answer: "Deep copy cria novos objetos para todos os níveis",
  },
  {
    number: 15,
    question: "O que são coroutines em Python?",
    options: [
      "Funções que rodam em paralelo com threads",
      "Funções que podem pausar e retomar execução",
      "Funções que sempre retornam coroutines",
      "Funções para processamento de cores em imagens"
    ],
    answer: "Funções que podem pausar e retomar execução",
  }
];

export default pythonQuest;