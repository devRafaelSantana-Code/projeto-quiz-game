# 🧠 Quiz Game — Jogo de Perguntas e Respostas em JavaScript

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/DOM-6C63FF?style=for-the-badge&logo=javascript&logoColor=white" alt="DOM">
</p>

## 🚀 Demonstração

Projeto publicado na Vercel, permitindo experimentar o jogo diretamente pelo navegador.

**[🎮 Acessar Quiz Game](https://projeto-quiz-game.vercel.app/)**

**[📂 Repositório no GitHub](https://github.com/devRafaelSantana-Code/projeto-quiz-game)**

## 📖 Sobre o projeto

O **Quiz Game** é uma aplicação interativa de perguntas e respostas desenvolvida com HTML5, CSS3 e JavaScript Vanilla, baseada em um desafio prático da B7Web.

O projeto consiste em um jogo de conhecimentos no qual o usuário responde a uma sequência de questões, acompanha seu progresso e recebe um resultado final de acordo com seu desempenho.

A aplicação utiliza manipulação do DOM para construir e atualizar dinamicamente a interface, controlar o fluxo das perguntas e apresentar feedback visual durante a experiência.

O desenvolvimento teve como foco a prática da lógica de programação, manipulação de elementos HTML, gerenciamento do estado do jogo e criação de interfaces interativas.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estruturação semântica da aplicação.
- **CSS3:** estilização da interface, organização dos elementos e animações.
- **JavaScript Vanilla:** lógica do jogo, controle das perguntas, pontuação e interatividade.
- **DOM API:** manipulação dinâmica dos elementos da página.

## ✨ Funcionalidades

- **Sistema de perguntas e respostas:** apresentação dinâmica das questões disponíveis no jogo.
- **Banco de questões:** organização das perguntas e alternativas em uma estrutura de dados JavaScript.
- **Seleção de respostas:** interação com as alternativas disponíveis em cada questão.
- **Barra de progresso:** acompanhamento visual do avanço durante o questionário.
- **Sistema de pontuação:** contabilização das respostas corretas e cálculo do desempenho final.
- **Feedback visual:** indicação do resultado obtido por meio de cores e elementos visuais.
- **Tela de resultados:** apresentação da quantidade de questões respondidas e do percentual de acertos.
- **Reiniciar partida:** possibilidade de iniciar uma nova rodada após a conclusão do jogo.
- **Renderização dinâmica:** atualização da interface conforme o andamento da partida.

## ⚙️ Implementação técnica

### Organização das perguntas

As questões são armazenadas em uma estrutura de dados JavaScript, permitindo separar o conteúdo do questionário da lógica responsável pela execução do jogo.

### Renderização dinâmica

A função `showQuestion()` utiliza manipulação do DOM e templates de strings para construir dinamicamente os elementos da pergunta e suas respectivas alternativas.

### Acompanhamento do progresso

A aplicação atualiza uma barra de progresso percentual conforme o usuário avança pelas questões, proporcionando uma referência visual do andamento da partida.

### Sistema de pontuação

A função `finishQuiz()` realiza a finalização do questionário, calcula o percentual de acertos e apresenta o resultado obtido pelo usuário.

O feedback visual utiliza diferentes cores para representar o desempenho alcançado.

### Temporização e animações

O projeto utiliza `setTimeout()` para controlar a execução de determinadas ações e transições, contribuindo para uma experiência mais organizada durante a navegação entre as questões.

## 📦 Como executar o projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/devRafaelSantana-Code/projeto-quiz-game.git
```

**2. Acesse a pasta do projeto:**

```bash
cd projeto-quiz-game
```

**3. Execute a aplicação:**

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code para executar o projeto em um servidor de desenvolvimento local.

## 📚 Aprendizados

O desenvolvimento deste projeto proporcionou a prática e consolidação de conhecimentos importantes no desenvolvimento Front-End, especialmente:

- Manipulação do DOM com JavaScript.
- Utilização de arrays e objetos para organização de dados.
- Estruturação de funções e lógica condicional.
- Gerenciamento do estado e fluxo de execução de uma aplicação.
- Renderização dinâmica de conteúdo HTML.
- Implementação de sistemas de pontuação e acompanhamento de progresso.
- Utilização de `setTimeout()` para controle de temporização.
- Aplicação de feedback visual e animações com CSS3.
- Integração entre HTML5, CSS3 e JavaScript Vanilla.

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e construção de aplicações web.

- **GitHub:** [devRafaelSantana-Code](https://github.com/devRafaelSantana-Code)
- **Projeto:** [Quiz Game — Vercel](https://projeto-quiz-game.vercel.app/)

---

<p align="center">
  Desenvolvido por <strong>Rafael Santana</strong> 🚀
</p>
