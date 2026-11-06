# 🧠 Quiz Game — Motor de Avaliação Interativo (JavaScript Vanilla)

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla_Fundamental-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Vanilla">
  <img src="https://img.shields.io/badge/CSS3-Custom_Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/HTML5-Dynamic_Interface-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/DOM-Interactive_UI-6C63FF?style=for-the-badge" alt="DOM Manipulation">
</p>

## 📌 Sobre o Projeto

O **Quiz Game** é uma aplicação interativa de perguntas e respostas desenvolvida com JavaScript Vanilla, baseada nos desafios práticos da plataforma **B7Web**.

O projeto funciona como um motor de avaliação baseado em dados, utilizando uma coleção de questões para construir dinamicamente uma interface de múltipla escolha, atualizar uma barra de progresso e apresentar um painel de resultados ao final da avaliação.

O principal objetivo do desenvolvimento é consolidar conhecimentos em manipulação dinâmica do DOM, gerenciamento de estados sequenciais, processamento de cálculos percentuais e integração entre JavaScript e animações CSS.

## 🛠️ Tecnologias e Recursos Técnicos

- **HTML5:** Estruturação semântica dos elementos e organização dos componentes da interface.
- **CSS3:** Estilização personalizada, gradientes, transições, animações com `@keyframes` e controle de estados visuais.
- **JavaScript Vanilla:** Implementação da lógica do jogo, manipulação do DOM, gerenciamento de eventos e processamento dos resultados.

## ⚙️ Funcionalidades e Implementação

### 🗂️ Arquitetura Baseada em Dados

As perguntas, alternativas e índices das respostas corretas são centralizados no arquivo `questions.js`, organizados em um array de objetos.

Essa abordagem separa o conteúdo da lógica de funcionamento, facilitando a manutenção e permitindo ampliar ou modificar o questionário sem alterar a estrutura principal do motor.

### ⚡ Renderização Dinâmica de Questões

A função `showQuestion` é responsável por apresentar as questões e construir dinamicamente as alternativas.

A montagem dos elementos utiliza uma variável acumuladora (`optionsHtml`), que recebe as estruturas HTML durante a iteração antes de sua inserção no DOM.

Essa estratégia reduz operações repetidas de atualização da interface durante a construção das alternativas.

### 📊 Barra de Progresso Dinâmica

A aplicação utiliza cálculos percentuais para atualizar visualmente o andamento da avaliação.

A porcentagem é calculada a partir da relação entre a questão atual e a quantidade total de questões:

\[
\text{Progresso} = \left\lfloor \frac{\text{Questão Atual}}{\text{Total de Questões}} \times 100 \right\rfloor
\]

O resultado é aplicado dinamicamente à propriedade `width` do elemento responsável pela barra de progresso, com transições suaves controladas pelo CSS.

### 🏆 Sistema de Avaliação e Pontuação

Ao finalizar o questionário, a função `finishQuiz` processa o desempenho do usuário e apresenta o resultado da avaliação.

O sistema utiliza diferentes faixas de aproveitamento para classificar o desempenho e aplicar feedbacks visuais personalizados, com cores específicas para cada nível de resultado.

### 🎬 Animações e Controle de Estados

O gerenciamento das transições entre as etapas utiliza `setTimeout` para controlar a exibição dos elementos e a aplicação ou remoção de classes CSS.

A classe `.piscar`, associada a animações definidas com `@keyframes`, complementa o feedback visual e contribui para uma experiência de utilização mais dinâmica.

## 🎨 Interface e Experiência do Usuário

- **Layout com gradiente:** Aplicação de fundo com gradiente linear para composição visual da interface.
- **Controle de viewport:** Utilização de `height: 100vh` e `overflow: hidden` para manter a aplicação ajustada à área visível da janela.
- **Transições CSS:** Animações suaves para atualização dos elementos e apresentação do progresso.
- **Interação com alternativas:** Utilização de atributos personalizados `data-op` para identificar as opções selecionadas.
- **Controle de eventos:** Aplicação de `pointer-events: none` nos elementos internos `<span>`, direcionando a interação para o elemento contêiner responsável pelo evento de clique.

## 📂 Estrutura do Projeto

```text
projeto-quiz-game/
│
├── index.html
├── css/
│   └── style.css
│
└── js/
    ├── questions.js
    └── script.js
```

## 💻 Como Executar o Projeto Localmente

Por ser uma aplicação desenvolvida com tecnologias nativas do navegador, o projeto não exige instalação de dependências ou configuração de servidor backend.

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Acesse a pasta do projeto:

```bash
cd projeto-quiz-game
```

3. Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** do Visual Studio Code para executar a aplicação em ambiente local.

## 🎯 Objetivos de Aprendizado

O desenvolvimento deste projeto contribuiu para a consolidação dos seguintes conhecimentos:

- Manipulação e atualização dinâmica do DOM.
- Organização de dados utilizando arrays e objetos.
- Separação entre dados e lógica de aplicação.
- Gerenciamento de estados e fluxo sequencial de execução.
- Manipulação de eventos e atributos personalizados.
- Cálculos matemáticos aplicados a interfaces.
- Integração entre JavaScript e propriedades CSS.
- Utilização de temporizadores com `setTimeout`.
- Desenvolvimento de interfaces interativas com HTML5, CSS3 e JavaScript.

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação | Foco em Desenvolvimento Full-Stack, JavaScript e Engenharia de Software.

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript e desenvolvimento de interfaces responsivas.
</p>
