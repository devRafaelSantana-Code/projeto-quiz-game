// Initial Data

let currentQuestion = 0;
let correctAnswers = 0;

resetEvent();

// Events
document
   .querySelector(".scoreArea button")
   .addEventListener("click", resetEvent);

// Functions

function showQuestion() {
   if (questions[currentQuestion]) {
      let q = questions[currentQuestion];

      let pct = Math.floor((currentQuestion / questions.length) * 100);
      document.querySelector(".progress--bar").style.width = `${pct}%`;

      document.querySelector(".scoreArea").style.display = "none";
      document.querySelector(".questionArea").style.display = "block";

      document.querySelector(".question").innerHTML = q.question;
      document.querySelector(".options").innerHTML = "";

      let letters = ["A", "B", "C", "D"];

      let optionsHtml = "";
      for (let i in q.options) {
         optionsHtml += `<div data-op="${i}" class="option"><span>${letters[i]}</span>${q.options[i]}</div>`;
      }
      document.querySelector(".options").innerHTML = optionsHtml;

      document.querySelectorAll(".options .option").forEach((item) => {
         item.addEventListener("click", optionClickEvent);
      });
   } else {
      finishQuiz();
   }
}

function optionClickEvent(e) {
   let clickedOption = parseInt(e.target.getAttribute("data-op"));

   if (questions[currentQuestion].answer === clickedOption) {
      correctAnswers++;
   }

   currentQuestion++;
   showQuestion();
}

function finishQuiz() {
   let points = Math.floor((correctAnswers / questions.length) * 100);

   if (points <= 50) {
      document.querySelector(".scoreText1").innerHTML = "Precisa melhorar!";
      document.querySelector(".scorePct").style.color = "#f00";
   } else if (points < 70) {
      document.querySelector(".scoreText1").innerHTML = "Muito bom!";
      document.querySelector(".scorePct").style.color = "#ff0";
   } else {
      document.querySelector(".scoreText1").innerHTML = "Parabéns!";
      document.querySelector(".scorePct").style.color = "#0f0";
   }
   document.querySelector(".scorePct").style.textShadow = "0px 5px 5px #0005";

   document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`;
   document.querySelector(".scoreText2").innerHTML =
      `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

   document.querySelector(".questionArea").style.display = "none";
   document.querySelector(".scoreArea").style.display = "block";

   document.querySelector(".progress--bar").style.width = "100%";
   setTimeout(() => {
      resetEvent();
   }, 7000);
}

function resetEvent() {
   let quizStart = document.querySelector(".start");

   document.querySelector(".questionArea").style.display = "none";
   document.querySelector(".scoreArea").style.display = "none";

   if (quizStart) {
      quizStart.innerHTML = "Início  de jogo";
      quizStart.classList.add("piscar");
   }

   currentQuestion = 0;
   correctAnswers = 0;

   setTimeout(() => {
      if (quizStart) {
         quizStart.classList.remove("piscar"); // Remove o piscar para sumir com o h2
      }
      showQuestion(); // Agora sim exibe a primeira pergunta
   }, 3000);
}
